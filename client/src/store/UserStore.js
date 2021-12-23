import axios from 'axios'
import { apolloClient } from "../utils/ApolloClient";
import { EDIT_USER, LOGIN_USER } from "./graphql/user/mutation";
import { GET_ALL_USER } from "./graphql/user/query";
import { Request } from "../utils/Request";
import Web3 from "web3";
import { failAlert, successAlert } from "../utils/ComponentUtils";

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
    SET_ACCOUNT(state,account) {
      state.account = account
    },
    SET_USER(state, data) {
      state.information = data;
    },
    SET_ETH_RATE(state, data) {
      state.ETHRate = data;
    },
  },
  actions: {
    getAllUsers: async ({ commit }, data) => {/*
      return apolloClient
        .mutate({
          mutation: GET_ALL_USER,
        })
        .then(({ data }) => data.getAllUsers);*/

        const result = await axios.get('http://192.168.107.91:3000/api/user/all', {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['name','ASC'], 
        })
    },
    getUserProfile: async ({ commit }, data) => {/*
      return apolloClient
        .mutate({
          mutation: LOGIN_USER,
          variables: {
            wallet_address: data,
          },
        })
        .then(({ data }) => data.checkExistUser);*/
        const result = await axios.get('http://192.168.107.91:3000/api/user/all', {
          skip:data.skip, 
          limit:data.limit, 
          orderby:['name','ASC'], 
          filter:{
            wallet_address:data.wallet_address
          }
        })
    },
    editProfile: ({ commit }, data) => {
      /*
      return apolloClient
        .mutate({
          mutation: EDIT_USER,
          variables: data,
        })
        .then(({ data }) => {
          let currentUser = data.updateProfile;
          commit("SET_USER", currentUser);
          localStorage.setItem("metaMaskAddress", currentUser.wallet_address);
        });*/
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
    createProfile: ({ commit }, data) => {
      /*
      return apolloClient
        .mutate({
          mutation: EDIT_USER,
          variables: data,
        })
        .then(({ data }) => {
          let currentUser = data.updateProfile;
          commit("SET_USER", currentUser);
          localStorage.setItem("metaMaskAddress", currentUser.wallet_address);
        });*/
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
    getETHRate: ({ commit }) => {/*
      return Request()
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        )
        .then((res) => {
          commit("SET_ETH_RATE", res.data.ethereum.usd);
        });*/
    },
    loginUser: ({ state, commit, dispatch }, data) => {
      apolloClient
        .mutate({
          mutation: LOGIN_USER,
          variables: {
            wallet_address: data,
          },
        })
        .then(({ data }) => {
          if (data) {
            let currentUser = data.checkExistUser;

            commit("SET_USER", currentUser);

            localStorage.setItem("metaMaskAddress", currentUser.wallet_address);
            dispatch("getETHRate");

            successAlert({
              text: `Login success with address \n ${currentUser.wallet_address}`,
            });
          }
        });
    },
    logoutUser: ({ commit, state }) => {
      localStorage.removeItem("metaMaskAddress");

      clearInterval(state.AccountInterval);
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

        if (netID != 3) {
          await dispatch("logoutUser");
          failAlert({
            text: "Current web working with testnet Ropsten",
          });
          return;
        }

        if (err != null || !accounts || accounts.length == 0)
        {
          await dispatch("logoutUser");
          failAlert({
            text: "Please log in to your metamask to continue with this app.",
          });
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
    loginApolloServer: async ({ dispatch, state }, data) => {
      if (!state.information || state.information.wallet_address != data)
      {
 //       clearInterval(state.AccountInterval);
        await dispatch("loginUser", data);
  //      await dispatch("web3TimerCheck");
      }
    },
    loginMetamask: async ({ commit, dispatch, state }) => {
      if (window.ethereum) {
        try {
          state.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          await dispatch("checkAccounts");
        } catch (error) {
 /*         failAlert({
            text: error,
          });*/
        }
      }
      else if (window.web3) {
        try {
          state.web3 = new Web3(window.web3.currentProvider);
          await dispatch("checkAccounts");
        } catch (error) {
 /*         failAlert({
            text: error,
          });*/
        }
      }
      else {
        state.web3 = null;
 /*       failAlert({
          text: "Please install metamask for this application",
        });*/
      }
    },
  }
};
