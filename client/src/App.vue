<template>
  <div :class="{'is__dark':$root.darkMode}">
    <app-header></app-header>
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
  }
</script>