import { apolloClient } from "../utils/ApolloClient";
import {
  CREATE_ITEM,
  EDIT_ITEM,
  MINT_ITEM,
  BUY_ITEM,
  UPDATE_OWNER_ITEM,
} from "./graphql/item/mutation";
import {
  GET_ALL_ITEM,
  GET_ITEM_CATEGORY,
  GET_ALL_ITEM_ON_SALE,
  GET_ITEM_DETAIL,
  GET_ITEM_OF_USER,
  GET_ITEM_CREATED,
} from "./graphql/item/query";

export const ItemStore = {
  namespaced: true,
  state: {},
  actions: {
    getDetailItem: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_ITEM_DETAIL,
          variables: data,
        })
        .then(({ data }) => data.getDetailItem);
    },
    getItemForUser: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_ITEM_OF_USER,
          variables: data,
        })
        .then(({ data }) => data.getItemForUser);
    },
    getItemCreated: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_ITEM_CREATED,
          variables: data,
        })
        .then(({ data }) => data.getItemCreated);
    },
    getAllItems: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_ALL_ITEM,
          variables: data,
        })
        .then(({ data }) => data.getAllItems);
    },
    getItemsByCategory: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_ITEM_CATEGORY,
          variables: data,
        })
        .then(({ data }) => data.getItemsByCategory);
    },
    getAllItemsOnSale: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: GET_ALL_ITEM_ON_SALE,
          variables: data,
        })
        .then(({ data }) => data.getAllItemsOnSale);
    },
    createItem: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: CREATE_ITEM,
          variables: data,
        })
        .then(({ data }) => data.createItem);
    },
    editItem: ({ commit, dispatch }, data) => {
      return apolloClient
        .mutate({
          mutation: EDIT_ITEM,
          variables: data,
        })
        .then(({ data }) => data.updateItem);
    },
    requestMintSignature: ({ commit, dispatch }, data) => {
      return apolloClient
        .mutate({
          mutation: MINT_ITEM,
          variables: {
            token_id: data,
          },
        })
        .then(({ data }) => data.requestMintSignature);
    },
    requestBuyAsset: ({ commit, dispatch }, data) => {
      return apolloClient
        .mutate({
          mutation: BUY_ITEM,
          variables: {
            token_id: data,
          },
        })
        .then(({ data }) => data.requestBuyAsset);
    },
    updateOwner: ({ commit, dispatch }, data) => {
      return apolloClient
        .mutate({
          mutation: UPDATE_OWNER_ITEM,
          variables: data,
        })
        .then(({ data }) => data.updateOwner);
    },
  },
  mutations: {},
};
