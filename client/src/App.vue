<template>
  <div :class="{'is__dark':$root.darkMode}">
    <app-header></app-header>
     <div class="global-loading text-center p-2" v-show="loading">
      <img style="width: 50px" :src="loadimage" />
      <span class="pl-10" style="color:yellow; font-size:30px"> Loading...</span>
    </div>
    <div class="modal modal-bg show" v-show="loadingModal.isShow">
      <modal>
        <template slot="header">
          <h4 class="modal-title">
            Authorizing your account for {{ loadingModal.title }}
          </h4>
        </template>
        <template slot="body">
          <p>{{ loadingModal.description }}</p>
          <img style="width: 100%" src="./assets/img/modelImg.png" />
          <img style="width: 50px" :src="loadimage" />
        </template>
      </modal>
    </div>
    <router-view/>
    <app-footer></app-footer>
    <bid></bid>
    <bid-success></bid-success>
    <history></history>
    <report></report>
  </div>
</template>

<style>

</style>
<script>
  import AppHeader from "./components/app-header";
  import AppFooter from "./components/app-footer";
  import Bid from "./components/modals/bid";
  import BidSuccess from "./components/modals/bidSuccess";
  import History from "./components/modals/history";
  import Report from "./components/modals/report";
  import Modal from "./components/modals/modal.vue";
  export default {
    components: {Report, History, BidSuccess, Bid, AppFooter, AppHeader, Modal},
    data: () => ({
        layout: null,
        hasRole: true,
        active: true,
        loadimage: require("@/assets/img/loading1.gif"),
    }),
    computed: {
        loading() {
          return this.$store.state.global.loading;
        },
        loadingModal() {
          return this.$store.state.global.loadingModal;
        },
    },
  }
</script>

<style>
  .global-loading {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #183b56 !important;
    opacity: 0.6;
    padding-top: 48vh;
    z-index: 1001;
    color: white;
  }
</style>