import { apolloClient } from "../utils/ApolloClient";
import {
  CREATE_COLLECTION,
  EDIT_COLLECTION,
} from "./graphql/collection/mutation";
import {
  GET_COLLECTION_FOR_USER,
  GET_ALL_COLLECTION,
  GET_DETAIL_COLLECTION,
} from "./graphql/collection/query";

export const CollectionStore = {
  namespaced: true,
  state: {},
  actions: {
    getAllCollections: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_ALL_COLLECTION,
          variables: data,
        })
        .then(({ data }) => data.getListCollection);
    },
    getCollectionForUser: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_COLLECTION_FOR_USER,
          variables: data,
        })
        .then(({ data }) => data.getCollectionForUser);
    },
    getDetailCollection: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_DETAIL_COLLECTION,
          variables: data,
        })
        .then(({ data }) => data.getDetailCollection);
    },
    createCollection: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: CREATE_COLLECTION,
          variables: data,
        })
        .then(({ data }) => data.createCollection);
    },
    editCollection: ({ commit, dispatch }, data) => {
      return apolloClient
        .mutate({
          mutation: EDIT_COLLECTION,
          variables: {
            wallet_address: data,
          },
        })
        .then(({ data }) => {});
    },
  },
  mutations: {},
};
