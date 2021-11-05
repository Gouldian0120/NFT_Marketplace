<template>
    <div class="hero__1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="hero__left space-y-20">
                            <h1 class="hero__title">
                                Discover digital art
                                and collect NFTs
                            </h1>
                            <p class="hero__text txt">raroin is a shared liquidity
                                NFT
                                market smart contract
                                which
                                is used by multiple websites to provide the users the
                                best
                                possible experience.</p>
                            <div class="space-x-20 d-flex flex-column flex-md-row
                        sm:space-y-20">
                                <router-link :to="{name:'marketplace'}" class="btn btn-primary">View
                                    market
                                </router-link>
                                <router-link class="btn btn-white" :to="{name:'upload-type'}">
                                    Upload your item</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid w-full"
                             :src="require('@/assets/img/bg/in_hero1.png')"
                             alt="">
                    </div>
                </div>

            </div>
        </div>
</template>

<script>
    export default {
        name: "home-banner"
    }
</script>

<style scoped>

</style>