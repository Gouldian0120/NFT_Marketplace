<template>
    <div>
        <div class="modal fade popup" 
            id="popup_connected" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" @click="goToHome()" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div v-if="isMetaMaskInstalled && isMetaMaskConnected" class="modal-body space-y-20 p-40">
                        <h3 class="text-center">Wallet Connected!</h3>
                        <p class="text-center">You have sucessfully connected your
                            wallet,
                            now you can start bidding or upload your own art!</p>
                        <div class="d-flex justify-content-center space-x-20">
                           <button class="btn btn-grad" @click="goTo('marketplace')" data-dismiss="modal">
                                Discover Assets</button>
                            <button class="btn btn-grad" @click="goTo('')" data-dismiss="modal">
                                Go to Home</button>
                        </div>
                    </div>
                    <div v-if="isMetaMaskInstalled && !isMetaMaskConnected" 
                        class="modal-body space-y-20 p-40">
                        <h3 class="color_red">Error!</h3>
                        <p>User rejected the request.. <br>
                            If the problem persist please Contact support</p>
                        <a href="" class="btn btn-primary">Try again</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="effect">
            <div class="container">
                <div class="hero__wallets pt-20 pb-20">
                    <div class="space-y-20 d-flex flex-column align-items-center">
                        <div class="logo">
                            <img :src="require('@/assets/img/icons/logo.svg')" alt="">
                        </div>
                        <h2 class="text-center">Connect your wallet</h2>
                        <p class="text-center">Connect with one of available wallet
                            providers or create a new wallet.
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="wallets">
                            <div class="row mb-30_reset">
                                <div class="col-lg-6">
                                    <wallet-card 
                                        name="Metamask" 
                                        :card-image="wallets.metamask" 
                                        data-toggle="modal" 
                                        data-target="#popup_connected"
                                        @click.native="loginMetamask">
                                    </wallet-card>
                                </div>
                                <div class="col-lg-6">
                                    <wallet-card  
                                        name="Coinbase" 
                                        :card-image="wallets.coibase">
                                    </wallet-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import WalletCard from "../components/wallet-card";
    export default {
        components: {WalletCard},
        data() {
            return {
                wallets: {
                    metamask: require("@/assets/img/icons/metamask.svg"),
                    coibase: require("@/assets/img/icons/coibase.svg"),
                },
            };
        },
        watch: {
            metaMaskAddress(newValue, oldValue) {
                if (newValue && newValue.length > 0) {
                    this.$router.push("/");
                }
            },
        },
        computed: {
            metaMaskAddress() {
                return this.$store.state.user.information?.address;
            },
            isMetaMaskInstalled() {
                const {ethereum} = window;
                return Boolean(ethereum && ethereum.isMetaMask)
            },
            isMetaMaskConnected() {
                return this.$store.state.user.account != null;
            },
        },
        methods: {
            async loginMetamask() {
                try {
                    await this.$store.dispatch("user/loginMetamask");
                } 
                catch (error) {
                  this.$failAlert({
                        text: error,
                    });
                }
            },
            async goTo(url) {
                await this.$store.dispatch("user/loginServer", this.$store.state.user.account);
                this.$router.push("/" + url);
            },
        }
    }
</script>
