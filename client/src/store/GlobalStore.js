export const GlobalStore = {
  namespaced: true,
  state: {
    loading: false,
    loadingModal: {
      isShow: false,
      title: "",
      description:
        "If a signature request pops up, just click 'Sign' to verify that you own your wallet",
      image: null,
    },
    currentLang: "",
    walletAddress: "",
    messageContent: null,
    messageType: null,
  },
  actions: {
    setLoading: ({ commit }, loading) => {
      commit("SET_LOADING", loading);
    },
    setLoadingModal: ({ commit }, loading) => {
      commit("SET_LOADING_MODAL", loading);
    },
    setLoadingTitle: ({ commit }, loading) => {
      commit("SET_LOADING_TITLE", loading);
    },
    setLang: ({ commit }, currentLang) => {
      commit("SET_LANG", currentLang);
    },
    showMessage: ({ commit }, data) => {
      commit(data.kind, data.content);
    }
  },
  mutations: {
    SET_LOADING(state, data) {
      state.loading = data;
    },
    SET_LOADING_MODAL(state, data) {
      state.loadingModal.isShow = data;
    },
    SET_LOADING_TITLE(state, data) {
      state.loadingModal.title = data;
    },
    SET_LANG(state, data) {
      state.currentLang = data;
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
};
