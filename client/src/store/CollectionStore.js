import axios from "axios";
import { apolloClient } from "../utils/ApolloClient";
import { API_URL } from "../utils/Constants";
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
    getAllCollections: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/collection/all', {
        params: {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['name','ASC'], 
        }
      })

      return result.data.data
    },
    getCollectionForUser: async ({ commit }, data) => {/*
      return apolloClient
        .mutate({
          mutation: GET_COLLECTION_FOR_USER,
          variables: data,
        })
        .then(({ data }) => data.getCollectionForUser);*/
      const result = await axios.get('http://192.168.107.91:3000/api/collection/all', {
        params: {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['name','ASC'], 
          filter:{
            creator:data.creator
          }
        }
      })

      return result.data.data
    },
    getDetailCollection: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/collection/all', {
        params: {
          filter:{
            id:data.id
          }
        }
      })

      return result.data.data[0]
    },
    createCollection: ({ commit }, data) => {
      let url = "http://192.168.107.91:3000/api/collection/add/rinkeby/" + data.contractAddress;

      axios.post(url, {
        name:data.name,
        description:data.description,
        category_id:data.category_id,
        royalty:data.royalty,
        fee_recipient:data.recipient,
        short_url:data.short_url,
        social_link1:data.socials.facebook,
        social_link2:data.socials.twitter,
        social_link3:data.socials.instagram,
        social_link4:data.socials.medium,
        image:data.fileAvatar,
        banner_image:data.fileBanner,
        creator_email:data.creator_email
      })
    },
    editCollection: ({ commit, dispatch }, data) => {
        axios.put(`http://192.168.107.91:3000/api/collection/${data.id}`, {
          params: {
            filter:{
                name:data.name,
                description:data.description,
                category_id:data.category_id,
                royalty:data.royalty,
                fee_recipient:data.fee_recipient,
                project_url:data.short_url,
                Socials1:data.Socials1,
                Socials2:data.Socials2,
                Socials3:data.Socials3,
                Socials4:data.Socials4,
                images:data.images,
                banner_img:data.banner_img,
                creator:data.creator,
                creator_email:data.creator_email
            }
          }
        })
    },
  },
  mutations: {},
};
