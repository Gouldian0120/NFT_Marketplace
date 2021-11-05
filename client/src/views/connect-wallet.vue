<template>
    <div>
        <div class="modal fade popup" id="popup_connected" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body space-y-20 p-40">
                        <h3 class="text-center">Wallet Connected!</h3>
                        <p class="text-center">You have sucessfully connected your
                            wallet,
                            now you can start bidding or upload your own art!</p>
                        <div class="d-flex justify-content-center space-x-20">
                            <a href="#" data-dismiss="modal" class="btn btn-dark">
                                Discover Assets</a>
                            <a href="" class="btn btn-grad"> Create item</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade popup" id="popup_error" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body space-y-20 p-40">
                        <h3 class="color_red">Error!</h3>
                        <p>User rejected the request.. <br>
                            If the problem persist please Contact support</p>

                        <a href="" class="btn btn-primary"> Try again</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="effect">
            <div class="container">
                <a href="/" class="btn btn-white btn-sm mt-20">
                    Back to home</a>
                <div class="hero__wallets pt-100 pb-50">
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
                            <div class="row mb-20_reset">
                                <!-- ================= item -->
                                <div class="col-lg-4" v-for="n in 6" :key="n">
                                    <wallet-card></wallet-card>
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
      components: {WalletCard}
    }
</script>
