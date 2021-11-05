<template>
    <div>
        <footer class="footer__1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 space-y-20">
                        <div class="footer__logo">
                            <a href="/">
                                <img  :src="$root.darkMode?require('@/assets/img/logos/Logo_white.svg'):require('@/assets/img/logos/Logo.svg')" alt="logo">
                            </a>
                        </div>
                        <p class="footer__text">
                            raroin is a shared liquidity NFT market smart contract
                        </p>
                        <div>
                            <ul class="footer__social space-x-10 mb-40">
                                <li><a href=""> <i class="ri-facebook-line"></i> </a>
                                </li>
                                <li><a href=""> <i class="ri-messenger-line"></i> </a>
                                </li>
                                <li><a href=""> <i class="ri-whatsapp-line"></i> </a>
                                </li>
                                <li><a href=""> <i class="ri-youtube-line"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-6">
                        <h6 class="footer__title">Raroin</h6>
                        <ul class="footer__list">
                            <li><router-link :to="{name:'home'}"> Home </router-link>
                            </li>
                            <li><router-link :to="{name:'marketplace'}"> Marketplace
                            </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6">
                        <h6 class="footer__title">Assets</h6>
                        <ul class="footer__list">
                            <li><router-link :to="{name:'profile'}"> Profile </router-link>
                            </li>
                            <li><router-link :to="{name:'creators'}"> Creators </router-link>
                            </li>
                            <li><router-link :to="{name:'collections'}"> Colletctions </router-link>
                            </li>
                            <li><router-link :to="{name:'activity'}"> Activity
                            </router-link></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6">
                        <h6 class="footer__title">Company</h6>
                        <ul class="footer__list">
                            <li><router-link :to="{name:'upload-type'}"> Upload Types </router-link>
                            </li>
                            <li><router-link :to="{name:'upload'}"> Upload </router-link></li>
                            <li><router-link :to="{name:'connect-wallet'}"> Connect wallet
                            </router-link></li>
                            <li><router-link :to="{name:'item-details'}"> Item details </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="copyright text-center">
                    Copyright © 2021. Created with love by creabik.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "app-footer"
    }
</script>

<style scoped>

</style>