import axios from "axios";
import ipfsHttpClient from 'ipfs-http-client'

export const CollectionStore = {
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
    getAllCollections: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['name','ASC'], 
        }
      })

      return result.data.data
    },

    getRecentCollections: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/all";

      const result = await axios.get(url, {
        params: {
          skip:0, 
          limit:1, 
          orderby:['created_at','DESC'], 
        }
      })

      return result.data.data
    },

    getTopCollections: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/all";

      const result = await axios.get(url, {
        params: {
          skip:0, 
          limit:1, 
          orderby:['name','ASC'], 
        }
      })

      return result.data.data
    },

    getCollectionForUser: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['created_at','ASC'], 
          filter:{
            created_by:data.keysearch
          }
        }
      })

      return result.data.data
    },

    getCollectionCountForUser: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/all";

      const result = await axios.get(url, {
        params: {
          filter:{
            created_by:data.keysearch
          }
        }
      })

      return result.data.count
    },
    getDetailCollection: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/all";

      const result = await axios.get(url, {
        params: {
          filter:{
            id:data.keysearch
          }
        }
      })

      return result.data.data[0]
    },
    createCollection: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/add/rinkeby/" + data.contractAddress;

      await axios.post(url, {
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
        creator_email:data.creator_email,
        created_by: data.created_by
      })

      url = process.env.VUE_APP_SERVER + "/api/collection/" + `${data.address}`;
      let ipfs = await ipfsHttpClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })
      
      if (data.fileAvatar) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(data.fileAvatar)
        reader.onload = async function(file) {
            const filebytes = file.target.result
            let ipfsreturn = await ipfs.add(filebytes)
            let ipfImage = 'https://ipfs.io/ipfs/' + ipfsreturn.path

            axios.put(url, {
              image:ipfImage,
            })
        }
      }

      if (data.fileBanner) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(data.fileBanner)
        reader.onload = async function(file) {
            const filebytes = file.target.result
            let ipfsreturn = await ipfs.add(filebytes)
            let ipfsbanner_img = 'https://ipfs.io/ipfs/' + ipfsreturn.path

            axios.put(url, {
              banner_image:ipfsbanner_img,
            })
        }
      }

      commit('show_success', 'Create collection successfully!');
    },

    editCollection: async ({ commit, dispatch }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/collection/" + `${data.id}`;
      axios.put(url, {
                name:data.name,
                description:data.description,
                category_id:data.category_id,
                royalty:data.royalty,
                fee_recipient:data.fee_recipient,
                short_url:data.short_url,
                social_link1:data.social_link1,
                social_link2:data.social_link2,
                social_link3:data.social_link3,
                social_link4:data.social_link4,
                creator_email:data.creator_email
      })

      let ipfs = await ipfsHttpClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })
      
      if (data.fileAvatar) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(data.fileAvatar)
        reader.onload = async function(file) {
            const filebytes = file.target.result
            let ipfsreturn = await ipfs.add(filebytes)
            let ipfImage = 'https://ipfs.io/ipfs/' + ipfsreturn.path

            axios.put(url, {
              image:ipfImage,
            })
        }
      }

      if (data.fileBanner) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(data.fileBanner)
        reader.onload = async function(file) {
            const filebytes = file.target.result
            let ipfsreturn = await ipfs.add(filebytes)
            let ipfsbanner_img = 'https://ipfs.io/ipfs/' + ipfsreturn.path

            axios.put(url, {
              banner_image:ipfsbanner_img,
            })
        }
      }

      commit('show_success', 'Update collection successfully!');
    },
  },
};
