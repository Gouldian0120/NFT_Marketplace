<template>
    <div class="creator_item creator_card space-y-10 is_big">
        <div class="avatars flex-column space-y-10">
            <div class="media has_border">
                <router-link :to="'/profile/' + this.itemWallet">
                        <div v-lazy-container="{ selector: 'img' }">
                            <img class="loadimg" :data-src="itemAvatar || avatarimage" :data-loading="loadimage"/>
                        </div>
                </router-link>
                <div class="has_number">
                    {{index + 1}}
                </div>
            </div>
            <div class="text-center">
                <router-link :to="'/profile/' + this.itemWallet">
                    <p class="avatars_name large color_black">
                        {{
                            showShortName(itemName) || showWalletSeller(itemWallet)
                        }}
                    </p>
                </router-link>
                <span class="sales color_text">4 sales on 14.28 ETH</span>
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
            itemWallet: String
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_1.png"),
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