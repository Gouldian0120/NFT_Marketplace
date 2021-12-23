import axios from 'axios'
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
    getItemForUser: async ({ commit }, data) => {/*
      return apolloClient
        .mutate({
          mutation: GET_ITEM_OF_USER,
          variables: data,
        })
        .then(({ data }) => data.getItemForUser);*/
        const result = await axios.get('http://192.168.107.91:3000/api/token/all', {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['name','ASC'], 
          filter:{
            creator:data.creator
          }
        })

        return result.data.data
    },
    getItemCreated: ({ commit }, data) => {/*
      return apolloClient
        .mutate({
          mutation: GET_ITEM_CREATED,
          variables: data,
        })
        .then(({ data }) => data.getItemCreated);*/
    },
    getAllItems: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/token/all', {
        params: {
          skip:data.skip,
          limit:data.limit,
          orderby:['name','ASC'], 
        }
      })
      
      return result.data.data
    },
    getItemsByCategory: async ({ commit }, data) => {
      console.log(data)
      const result = await axios.get('http://192.168.107.91:3000/api/token/all', {
        params: data
      })

      return result.data.data
    },
    getDetailItem: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/token/all', {
        params: {
          filter:{
            id:data.id
          }
        }
      })
      
      return result.data.data[0]
    },
    getAllItemsOnSale: async ({ commit }, data) => {
        const result = await axios.get('http://192.168.107.91:3000/api/token/all', {
          params: data
        })

        return result.data.data
    },
    editItem: ({ commit, dispatch }, data) => {/*
      return apolloClient
        .mutate({
          mutation: EDIT_ITEM,
          variables: data,
        })
        .then(({ data }) => data.updateItem);*/
      axios.put(`http://192.168.107.91:3000/api/token/${data.id}`, {
        params: {
          filter:{
            name:data.name,
            description:data.description,
            short_url:data.short_url,
            Socials1:data.Socials1,
            Socials2:data.Socials2,
            Socials3:data.Socials3,
            Socials4:data.Socials4,
            images:data.images,
            banner_img:data.banner_img,
            creator:data.creator,
            updated_at:data.updated_at
          }
        }
      })
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
    updateOwner: ({ commit, dispatch }, data) => {/*
      return apolloClient
        .mutate({
          mutation: UPDATE_OWNER_ITEM,
          variables: data,
        })
        .then(({ data }) => data.updateOwner);*/
        axios.put(`http://192.168.107.91:3000/api/token/${data.id}`, {
          filter:{
            creator:data.creator,
            updated_at:data.updated_at
          }
        })
    },
  },
  mutations: {},
};
