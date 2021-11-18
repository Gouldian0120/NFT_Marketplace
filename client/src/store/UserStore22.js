import { apolloClient } from "../utils/ApolloClient";
import { EDIT_USER, LOGIN_USER } from "./graphql/user/mutation";
import { GET_ALL_USER } from "./graphql/user/query";
import { Request } from "../utils/Request";
import Web3 from "web3";
import { failAlert, successAlert } from "../utils/ComponentUtils";

export const UserStore = {
  namespaced: true,
  state: {
    information: null,
    web3: null,
    ETHRate: 0,
    AccountInterval: null,
  },

  actions: {
    getAllUsers: ({ commit }) => {
      return apolloClient
        .mutate({
          mutation: GET_ALL_USER,
        })
        .then(({ data }) => data.getAllUsers);
    },
    getUserProfile: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: LOGIN_USER,
          variables: {
            wallet_address: data,
          },
        })
        .then(({ data }) => data.checkExistUser);
    },
    editProfile: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: EDIT_USER,
          variables: data,
        })
        .then(({ data }) => {
          let currentUser = data.updateProfile;
          commit("SET_USER", currentUser);
          localStorage.setItem("metaMaskAddress", currentUser.wallet_address);
        });
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
    loginUser: ({ commit, dispatch }, data) => {
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
    },
    web3TimerCheck: ({ dispatch, state }) => {
      if (state.web3 === null) return;
      state.AccountInterval = setInterval(async () => {
        await dispatch("checkAccounts");
      }, 2000);
    },
    checkAccounts: ({ dispatch, state }) => {
      state.web3.eth.getAccounts(async (err, accounts) => {
        const netID = state.web3.utils.hexToNumber(window.ethereum.chainId); //User MetaMask's current status
        if (netID != 3) {
          await dispatch("logoutUser");
          failAlert({
            text: "Current web working with testnet Ropsten",
          });
          return;
        }

        if (err != null || !accounts || accounts.length == 0) {
          await dispatch("logoutUser");
          failAlert({
            text: "Please log in to your metamask to continue with this app.",
          });
        } else if (
          !state.information ||
          state.information.wallet_address != accounts[0]
        ) {
          clearInterval(state.AccountInterval);
          await dispatch("loginUser", accounts[0]);
          await dispatch("web3TimerCheck");
        }
      });
    },
    loginMetamask: async ({ dispatch, state }) => {
      if (window.ethereum) {
        try {
          state.web3 = new Web3(ethereum);
          await ethereum.enable();
          await dispatch("checkAccounts");
        } catch (error) {
          failAlert({
            text: error,
          });
        }
      } else if (window.web3) {
        try {
          state.web3 = new Web3(web3.currentProvider);
          await dispatch("checkAccounts");
        } catch (error) {
          failAlert({
            text: error,
          });
        }
      } else {
        state.web3 = null;
        failAlert({
          text: "Please install metamask for this application",
        });
      }
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.information = data;
    },
    SET_ETH_RATE(state, data) {
      state.ETHRate = data;
    },
  },
};
