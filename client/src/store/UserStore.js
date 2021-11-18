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
    init() {
    },
    set_account(state,account) {
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
    /*
    connect({commit}) {
      window.ethereum.request({ 
          method: 'eth_requestAccounts' 
      }).then((accounts) => {
          if(accounts.length==0) {
              console.log("No connected");
          } 
          else {
            window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0xfa2' }],
            }).then(() => {
              console.log("wallet_switchEthereumChain")
              const account = {
                address: accounts[0],
              }
              commit('set_account',account)
              console.log(account.address)
            }).catch(error => {
              console.log("error:wallet_switchEthereumChain",error)
              if (error.code==4902 || error.code==-32603) {
                window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{ 
                    chainId: '0xfa2', 
                    chainName: 'FantomNetwork',
                    rpcUrls: ['https://rpc.testnet.fantom.network'],
                    blockExplorerUrls: ['https://testnet.ftmscan.com'],
                    nativeCurrency: {
                      name: 'Fantom',
                      symbol: 'FTM',
                      decimals: 18
                    }
                  }],
                }).then(() => {
                }).catch(() => {
                  console.log("error:wallet_switchEthereumChain")
                });
              }
            });
          }
      }).catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });  
    },*/
    connect({commit, dispatch}) {
      window.ethereum.request({ 
          method: 'eth_requestAccounts' 
      }).then((accounts) => {
          if(accounts.length==0) {
              console.log("No connected");
          } 
          else {
            window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x3' }],
            }).then(() => {
              console.log("wallet_switchEthereumChain")
              const account = {
                address: accounts[0],
              }
              commit('set_account',account)
            }).catch(error => {
              console.log("error:wallet_switchEthereumChain",error)
              if (error.code==4902 || error.code==-32603) {
                window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{ 
                    chainId: '0x3', 
                    chainName: 'Ropsten',
                    rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
                    blockExplorerUrls: ['https://ropsten.etherscan.io'],
                    nativeCurrency: {
                      name: 'Ropsten',
                      symbol: 'ETH',
                      decimals: 18
                    }
                  }],
                }).then(() => {
                }).catch(() => {
                  console.log("error:wallet_switchEthereumChain")
                });
              }
            });
          }
      }).catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });  
    },
    disconnect({state}) {
      state.account = null
    },
  }
};
