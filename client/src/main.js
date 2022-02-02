import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Chart from 'vue2-frappe';
import store from "./store"
import Web3 from "web3/lib"
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyload from "vue-lazyload";
import LoadScript from 'vue-plugin-load-script';
import MaterialKit from "./plugins/material-kit";
import Toast from "vue-toastification";

import "./assets/css/plugins/remixicon.css";
import "./assets/css/plugins/bootstrap.min.css";
import "swiper/css/swiper.css";
import "./assets/scss/style.scss";
import "./assets/css/plugins/swiper-bundle.min.css";
import "vue-toastification/dist/index.css";

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false;

Vue.use(LoadScript);
Vue.use(MaterialKit);
Vue.use(Chart);

const loadimage = require("@/assets/img/image_placeholder.jpg");
const errorimage = require("@/assets/img/image_placeholder.jpg");
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: errorimage,
    loading: loadimage,
    attempt: 2,
  });

Vue.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });

Vue.loadScript("js/jquery-3.6.0.js");
Vue.loadScript("js/bootstrap.bundle.min.js");
Vue.loadScript("js/script.js");

new Vue({
    data() {
        return {
            darkMode: true
        }
    },
    router,
    store,
    beforeCreate() {
        const { ethereum } = window;
        if(ethereum && ethereum.isMetaMask) {
          window.web3 = new Web3(ethereum);
        }
     //   this.$q.dark.set(true);
      },
    render: h => h(App),
}).$mount('#app')
