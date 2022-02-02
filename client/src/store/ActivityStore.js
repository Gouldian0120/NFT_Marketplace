import axios from 'axios'

export const ActivityStore = {
  namespaced: true,
  state: {
    account: null,
    ETHRate: 0,
    information: null,
    web3: null,
    AccountInterval: null,
  },
  mutations: {
  },
  actions: {
    getActivity: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/activity/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['id','ASC'], 
          filter:{
            data
          }
        }
      })

      return result.data.data
    },

    addActivity: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/activity/";
      axios.post(url, {
        data
      })
    },

    getFavoriteCount: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/favorite/all";
      const result = await axios.get(url, {
        params: {
          filter:data
        }
      })
      
      return result.data.count
    },

    getUserFavoriteTokens: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/favorite/all";
      const result = await axios.get(url, {
        params: {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['id','ASC'], 
          filter:{
            wallet_address:data.keysearch
          }
        }
      })
      
      return result.data.data
    },

    insertFavorite: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/favorite/";
      const result = await axios.post(url, data)
    },

    deleteFavorite: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/favorite/";
      const result = await axios.delete(url, {
        params: {
          filter:data
        }
      })
    }
  }
};
