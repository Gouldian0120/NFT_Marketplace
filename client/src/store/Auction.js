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
    getAllAuctions: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/auction/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'],
        filter:{
          name:data.name,
          description:data.description,
        }
      })
    },
    editAuction: ({ commit }, data) => {
      axios.put(`http://192.168.107.91:3000/api/auction/${data.auction_id}`, {
        filter:{
          name:data.name,
          description:data.description,
          short_url:data.short_url,
          user_email:data.user_email,
          Socials1:data.Socials1,
          Socials2:data.Socials2,
          Socials3:data.Socials3,
          Socials4:data.Socials4,
          avatar_img:data.avatar_img,
          logo_img:data.logo_img,
        }
      })
    },
    createAuction: ({ commit }, data) => {
      axios.post(`http://192.168.107.91:3000/api/auction/`, {
        filter:{
          name:data.name,
          description:data.description,
          short_url:data.short_url,
          user_email:data.user_email,
          Socials1:data.Socials1,
          Socials2:data.Socials2,
          Socials3:data.Socials3,
          Socials4:data.Socials4,
          avatar_img:data.avatar_img,
          logo_img:data.logo_img,
        }
      })
    },
    getAllBid: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/bid/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
      })
    },
    editBid: ({ commit }, data) => {
      axios.put(`http://192.168.107.91:3000/api/bid/${data.bid_id}`, {
        filter:{
          name:data.name,
        }
      })
    },
    createBid: ({ commit }, data) => {
      axios.post(`http://192.168.107.91:3000/api/bid/`, {
        filter:{
          name:data.name,
        }
      })
    },
    getOffer: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/offer/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
      })
    },
    editOffer: ({ commit }, data) => {
      axios.put(`http://192.168.107.91:3000/api/offer/${data.offer_id}`, {
        filter:{
          _id:data.offer_id,
        }
      })
    },
    createOffer: ({ commit }, data) => {
      axios.post(`http://192.168.107.91:3000/api/offer/`, {
        filter:{
          name:data.name,
        }
      })
    },
  }
};
