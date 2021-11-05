import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import Web3 from "web3/lib"
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "./assets/css/plugins/remixicon.css";
import "./assets/css/plugins/bootstrap.min.css";
import "swiper/css/swiper.css";
import "./assets/scss/style.scss";
import "./assets/css/plugins/swiper-bundle.min.css";

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false;
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);

Vue.loadScript("js/jquery-3.6.0.js");
Vue.loadScript("js/bootstrap.bundle.min.js");
Vue.loadScript("js/script.js");


new Vue({
    data() {
        return {
            darkMode: false
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
