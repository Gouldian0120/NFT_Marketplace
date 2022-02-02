import axios from 'axios'
import { Request } from "../utils/Request";
import Web3 from "web3";
import ipfsHttpClient from 'ipfs-http-client'

export const UserStore = {
  namespaced: true,
  state: {
    account: null,
    ETHRate: 0,
    information: null,
    web3: null,
    AccountInterval: null,
    messageContent: null,
    messageType: null,
  },
  mutations: {
    SET_ACCOUNT(state,account) {
      state.account = account
    },
    SET_USER(state, data) {
      state.information = data;
    },
    SET_ETH_RATE(state, data) {
      state.ETHRate = data;
    },
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
    getAllUsers: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/user/all";

      const result = await axios.get(url, {
        params: {
          skip:data.skip,
          limit:data.limit,
          orderby:['first_name','ASC'],
          filter:{
          }
        }
      })

      return result.data.data
    },
    getUserProfileByAddress: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/user/all";

      const result = await axios.get(url, {
        params: {
          filter:{
            address:data.keysearch
          }
        }
      })

      return result.data.data
    },
    editProfile: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/user/" + `${data.address}`;
      let ipfs = await ipfsHttpClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })
      
      if (data.fileAvatar) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(data.fileAvatar)
        reader.onload = async function(file) {
            const filebytes = file.target.result
            let ipfsreturn = await ipfs.add(filebytes)
            let ipfsavatar = 'https://ipfs.io/ipfs/' + ipfsreturn.path

            axios.put(url, {
              avatar:ipfsavatar,
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
              banner_img:ipfsbanner_img,
            })
        }
      }

      axios.put(url, {
          first_name:data.first_name,
          last_name:data.last_name,
          description:data.description,
          custom_url:data.custom_url,
          email:data.email,
          social_link1:data.social_link1,
          social_link2:data.social_link2,
          social_link3:data.social_link3,
          social_link4:data.social_link4,
      })

      commit('show_success', 'Update user profile successfully!');
    },
    createProfile: ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/user/";

      axios.post(url, {
          address:data
      })
    },
    getETHRate: ({ commit }) => {
      return Request()
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        )
        .then((res) => {
          commit("SET_ETH_RATE", res.data.ethereum.usd);
        });
    },
    loginUser: async ({ state, commit, dispatch }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/user/all";

      const result = await axios.get(url, {
        params: {
          filter:{
            address:data
          }
        }
      })

      if (result.data.data.length > 0) {
        let currentUser = result.data.data[0];

        commit("SET_USER", currentUser);
        localStorage.setItem("metaMaskAddress", currentUser.address);
//      dispatch("getETHRate");
      }
      else {
        await dispatch("createProfile", data);
      }
    },
    logoutUser: ({ commit, state }) => {
      localStorage.removeItem("metaMaskAddress");

//    clearInterval(state.AccountInterval);
      commit("SET_USER", null);
      commit("SET_ACCOUNT", null);
    },
    web3TimerCheck: ({ dispatch, state }) => {
      if (state.web3 === null) return;
      state.AccountInterval = setInterval(async () => {
        await dispatch("checkAccounts");
      }, 2000);
    },
    checkAccounts: ({ commit, dispatch, state }) => {
      state.web3.eth.getAccounts(async (err, accounts) => {
        const netID = state.web3.utils.hexToNumber(window.ethereum.chainId); //User MetaMask's current status

        if (netID != 4002) {
          await dispatch("logoutUser");
          commit('show_error', 'Current web working with Fantom Testnet');
          return;
        }

        if (err != null || !accounts || accounts.length == 0)
        {
          await dispatch("logoutUser");
          commit('show_error', 'Please log in to your metamask to continue with this app.');
        }
        else
        {
          commit("SET_ACCOUNT", accounts[0]);
/*
          if (!state.information || state.information.wallet_address != accounts[0])
          {
            clearInterval(state.AccountInterval);
            await dispatch("loginUser", accounts[0]);
            await dispatch("web3TimerCheck");
          }
          */
        }
      });
    },
    loginServer: async ({ dispatch, state, commit }, data) => {
      if (!state.information || state.information.wallet_address != data)
      {
 //     clearInterval(state.AccountInterval);
        await dispatch("loginUser", data);
        commit('show_success', 'Login successfully!');
  //    await dispatch("web3TimerCheck");
      }
    },
    loginMetamask: async ({ commit, dispatch, state }) => {
      if (window.ethereum) {
        try {
          state.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          await dispatch("checkAccounts");
        } catch (error) {
          commit('show_error', 'login metamask error.');
        }
      }
      else if (window.web3) {
        try {
          state.web3 = new Web3(window.web3.currentProvider);
          await dispatch("checkAccounts");
        } catch (error) {
          commit('show_error', 'login metamask error.');
        }
      }
      else {
        state.web3 = null;
        commit('show_error', '"Please install metamask for this application');
      }
    },
  }
};
