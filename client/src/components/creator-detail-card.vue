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
            <div class="text-center">
                <router-link :to="'/profile/' + this.itemWallet">
                    <p class="avatars_name">
                        {{
                            showShortName(itemFirstname + " " + itemLastname) || showWalletSeller(itemWallet)
                        }}
                    </p>
                </router-link>
            </div>
            <div class="details text-center margin-auto">
                <div class="subItem">
                    <p class="color_black ">
                        <span>191</span></p>
                    <p class="color_black ">ETH Sold</p>
                </div>
                <div class="subItem">
                    <p class="color_black "><span>{{this.collectionCount}}</span></p>
                    <p class="color_black ">Collections</p>
                </div>
                <div class="subItem">
                    <p class="color_black "><span>{{this.itemCount}}</span></p>
                    <p class="color_black ">Views</p>
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
            itemFirstname: String,
            itemLastname: String,
            itemAvatar: String,
            itemBanner: String,
            itemWallet: String
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_1.png"),
                bannerimage: require('@/assets/img/bg/prrofile.png'),
                itemCount: 0,
                collectionCount: 0
            };
        },
        async mounted() {
            await this.getItemsCount(this.itemWallet);
            await this.getCollectionsCount(this.itemWallet);
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
                if (wallet == null)
                    return null;
                else
                    return (
                        wallet.substring(0, 5) +
                        "..." +
                        wallet.substring(wallet.length - 5, wallet.length)
                    );
            },
            async getItemsCount(wallet) {
                try {
                    this.itemCount = await this.$store.dispatch(
                        "item/getItemCountForCreator", {
                        keysearch: wallet
                        }
                    );
                } catch (error) {
                    console.log(error)
                }
            },
            async getCollectionsCount(wallet) {
                try {
                    this.collectionCount = await this.$store.dispatch(
                        "collection/getCollectionCountForUser", {
                            keysearch: wallet
                        }
                    );
                } catch (error) {
                    console.log(error)
                }
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

    .subItem {
        border:1px solid #183b56 ;
        border-radius: 10%;
        font-size: 13px !important;
        padding: 0 5px;
    }

    .details {
        padding:15px;
    }

    .img-fluid {
        width:100%;
        height:100px !important;
    }
</style>