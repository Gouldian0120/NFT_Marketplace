<template>
    <div class="creator_item creator_card space-y-20 mb-20">
        <div class="avatars flex-column space-y-10">
            <div class="cover">
                <router-link :to="'/profile/' + this.itemWallet">
                    <div v-lazy-container="{ selector: 'img' }">
                        <img class="img-fluid" :data-src="itemBanner || bannerimage" :data-loading="loadimage"/>
                    </div>
                </router-link>
            </div>
            <div class="media has_border">
                <router-link :to="'/profile/' + this.itemWallet">
                    <div v-lazy-container="{ selector: 'img' }">
                        <img class="loadimg" :data-src="itemAvatar || avatarimage" :data-loading="loadimage"/>
                    </div>
                </router-link>
            </div>
            <div class="details text-center">
                <div>
                    <p class="color_black txt_lg">191
                        <span class="txt_sm">ETH</span></p>
                    <p class="color_black txt_sm">Sold</p>
                </div>
                <div>
                    <p class="color_black txt_lg">345</p>
                    <p class="color_black txt_sm">Collections</p>
                </div>
                <div>
                    <p class="color_black txt_lg">17,005</p>
                    <p class="color_black txt_sm">Views</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "creator-card",
        props:{
            index:{
                type:Number,
                default:1
            },
            itemId: String,
            itemName: String,
            itemAvatar: String,
            itemBanner: String,
            itemWallet: String
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_1.png"),
                bannerimage: require('@/assets/img/bg/prrofile.png'),
            };
        },
        mounted() {
        },
        methods: {
            showShortName(name) {
                if (name.length < 25)
                    return name;
                else
                    return (
                        name.substring(0, 6) +
                        "..." +
                        name.substring(name.length - 8, name.length)
                    );
            },
            showWalletSeller(wallet) {
                return (
                    wallet.substring(0, 5) +
                    "..." +
                    wallet.substring(wallet.length - 5, wallet.length)
                );
            },
        },
    }
</script>

<style scoped>
    .loadimg {
        width: 80px !important;
        height: 80px !important;
        border-radius: 50%;
    }
</style>