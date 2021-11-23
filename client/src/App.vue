<template>
  <div :class="{'is__dark':$root.darkMode}">
    <app-header></app-header>
     <div class="global-loading text-center p-2" v-show="loading">
      <img style="width: 50px" :src="loadimage" />
      <span class="pl-10" style="color:yellow; font-size:30px"> Loading...</span>
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
  export default {
    components: {Report, History, BidSuccess, Bid, AppFooter, AppHeader},
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
    },
  }
</script>