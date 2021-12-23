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
    getAllUsers: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/user/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
      })
    },
    getUserActivity: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/user/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
        filter:{
          wallet_address:data.wallet_address
        }
      })
    },
    editUserActivity: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/user/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
        filter:{
          wallet_address:data.wallet_address
        }
      })
    },
    insertUserActivity: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/user/all', {
        skip:data.skip, 
        limit:data.limit, 
        orderby:['name','ASC'], 
        filter:{
          wallet_address:data.wallet_address
        }
      })
    },
    insertFavoriteItem: ({ commit }, data) => {
      axios.put(`http://192.168.107.91:3000/api/user/${data.wallet_address}`, {
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
    deleteFavoriteItem: ({ commit }, data) => {
      axios.put(`http://192.168.107.91:3000/api/user/`, {
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
  }
};
