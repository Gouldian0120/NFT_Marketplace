import { apolloClient } from "../utils/ApolloClient";
import { GET_CATEGORY } from "./graphql/category/query";

export const CategoryStore = {
  namespaced: true,
  state: {
    categories: null,
  },
  actions: {
    getCategories: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_CATEGORY,
        })
        .then(({ data }) => {
          let categories = data.getAllCategory;
          commit("SET_CATEGORY", categories);
        });
    },
  },
  mutations: {
    SET_CATEGORY(state, data) {
      state.categories = data;
    },
  },
};
