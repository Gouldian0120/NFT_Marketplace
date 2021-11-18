import Vue from 'vue'
import Vuex from 'vuex'
import { UserStore } from "./UserStore";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserStore,
  },
  state: {
    account: null,
  },
  mutations: {
    init() {
    },
  },
  method: {
  },
  actions: {
  }
})
