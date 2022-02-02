import axios from 'axios'

export const ItemStore = {
  namespaced: true,
  state: {
    messageContent: null,
    messageType: null,
  },
  mutations: {
    show_info(state,message) {
      state.messageContent = message
      state.messageType = 'info'
    },
    show_success(state,message) {
        state.messageContent = message
        state.messageType = 'success'
    },
    show_error(state,message) {
        state.messageContent = message
        state.messageType = 'error'
    },
    show_warning(state,message) {
        state.messageContent = message
        state.messageType = 'warning'
    },
  },
  actions: {
    getAllItems: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip,
          limit:data.limit,
          orderby:['name','ASC'], 
        }
      })
      
      return result.data.data
    },
    getItemsByCategory: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip,
          limit:data.limit,
          orderby:['name','ASC'], 
          filter:{
            category_id:data.keysearch
          }
        }
      })

      return result.data.data
    },
    getItemsByCollection: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip,
          limit:data.limit,
          orderby:['name','ASC'], 
          filter:{
            collection_id:data.keysearch
          }
        }
      })

      return result.data.data
    },
    getDetailItem: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
        params: {
          filter:{
            id:data.id
          }
        }
      })
      
      return result.data.data[0]
    },
    getAllItemsOnSale: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip,
          limit:data.limit,
          orderby:['name','ASC'],
          filter:{
            is_on_market:1
          }
        }
      })

      return result.data.data
    },
    getItemForCreator: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
          params: {
            skip:data.skip,
            limit:data.limit,
            orderby:['name','ASC'],
            filter:{
              created_by:data.keysearch
            }
          }
        })

        return result.data.data
    },
    getItemCountForCreator: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
          params: {
            filter:{
              created_by:data.keysearch
            }
          }
        })

        return result.data.count
    },
    getItemForOwner: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/all";

      const result = await axios.get(url, {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
        filter:{
          owner:data.keysearch
        }
      })

      return result.data.data
    },
    editItem: ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/" + `${data.id}`;

      axios.put(url, {
        is_on_market: data.is_on_market,
        is_market_option: data.is_market_option,
        min_bid: data.min_bid,
        start_bid: data.start_bid,
        expire_bid: data.expire_bid
      })

      commit('show_success', 'Update item successfully!');
    },
    sellItem: ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/" + `${data.id}`;

      axios.put(url, {
        is_on_market: data.is_on_market,
      })

      commit('show_success', 'Update item successfully!');
    },
    updateOwner: ({ commit, dispatch }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/token/" + `${data.id}`;
      axios.put(url, {
          filter:{
            owner:data.owner
          }
      })
    },
  },
};
