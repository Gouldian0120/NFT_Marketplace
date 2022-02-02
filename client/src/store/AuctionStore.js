import axios from 'axios'

export const UserStore = {
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
    getAllOrders: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/auction/all";
      const result = await axios.get(url, {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['id','ASC'],
        filter:{
          data
        }
      })
    },
    createOrder: ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/auction/";
      axios.post(url, {
        data
      })
    },
    updateOrder: ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/auction/" + `${data.id}`;

      axios.put(url, {
        data
      })
    },
    getAllOffer: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/bid/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
      })
    },
    addOffer: ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/auction/offer/";
      axios.post(url, {
        data
      })
    },
    updateOffer: ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/auction/offer/" + `${data.id}`;

      axios.put(url, {
        data
      })
    },
  }
};
