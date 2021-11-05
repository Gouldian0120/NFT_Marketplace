

export const UserStore = {
  namespaced: true,
  state: {
    web3: null,
  },

  actions: {/*
    loginMetamask: async ({ dispatch, state }) => {
      if (window.ethereum) {
        try {
          const { ethereum } = window;
          if(ethereum && ethereum.isMetaMask) {
            window.web3 = new Web3(ethereum);
          }

          state.web3 = new Web3(ethereum);
          await ethereum.enable();
          await dispatch("checkAccounts");
        } catch (error) {
          console.log(222)
        }
      } else if (window.web3) {
        try {
          state.web3 = new Web3(web3.currentProvider);
          await dispatch("checkAccounts");
        } catch (error) {
            console.log(222)
        }
      } else {
        state.web3 = null;
      }
    },*/
  },
  mutations: {
  },
};
