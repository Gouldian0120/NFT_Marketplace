import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { onError } from "apollo-link-error";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { getToken, logout } from "./CredentialUtils";
import { API_URL } from "./Constants";
import { failAlert } from "./ComponentUtils";
import store from "../store";

const GRAPHQL_URL = API_URL + "/graphql";
const cache = new InMemoryCache({
  dataIdFromObject: () => {
    //TODO check key cache
    return null;
  },
});

const getHeaders = () => {
  const headers = {};
  const token = getToken();
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  return headers;
};

const request = (operation) => {
  operation.setContext({
    headers: getHeaders(),
  });
};

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  // wsLink,
  httpLink
);

const requestLink = new ApolloLink((operation, forward) => {
  request(operation);
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  },
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        // let exception = graphQLErrors[0]?.extensions?.exception;
        // if (exception?.status == 401) {
        //   logout();
        // }
        graphQLErrors.forEach(({ message, locations, path }) => {
          failAlert({
            toast: true,
            text: message,
          });
        });
      }

      if (networkError) {

        failAlert({
          toast: true,
          text: networkError,
        });
        store.dispatch("global/setLoading", false);
      }
    }),
    requestLink,
    withClientState({
      defaults: {
        isConnected: true,
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            cache.writeData({ data: { isConnected } });
            return null;
          },
        },
      },
      cache,
    }),
    createUploadLink({
      uri: GRAPHQL_URL,
      cache: cache,
    }),
    link,
  ]),
  cache: cache,
});
