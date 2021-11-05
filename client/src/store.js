import Vue from "vue";
import Vuex from "vuex";
import { UserStore } from "./store/UserStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserStore,
  },
});
