<template>
    <div class="card__item four" style="">
        <div class="card_body space-y-10"><!--
            <div class="creators space-x-10">
                <div class="avatars space-x-3">
                    <router-link :to="{name:'profile'}">
                        <img
                            :src="require('@/assets/img/avatars/avatar_1.png')"
                            alt="Avatar"
                            class="avatar avatar-sm"/>
                    </router-link>
                    <router-link :to="{name:'profile'}">
                        <p class="avatars_name txt_xs">{{showWalletSeller(this.itemCreator)}}</p>
                    </router-link>
                </div>
                <div class="avatars space-x-3">
                    <router-link :to="{name:'profile'}">
                        <img
                            :src="require('@/assets/img/avatars/avatar_1.png')"
                            alt="Avatar"
                            class="avatar avatar-sm"/>
                    </router-link>
                    <router-link :to="{name:'profile'}">
                        <p class="avatars_name txt_xs">{{showWalletSeller(this.itemOwner)}}</p>
                    </router-link>
                </div>
            </div>-->
            <div class="card_head h-auto">
                <router-link :to="'/item-details/' + this.itemId">
                    <div class="img-box zoom-box">
                        <div v-lazy-container="{ selector: 'img' }">
<!--                           <img class="loadimg" :data-src="cardImage" :data-loading="loadimage"/>-->
                        </div>
                    </div>
                </router-link>
               <!-- <div @click="setFavorite" class="likes space-x-3 cursor-pointer">-->
                <div class="likes space-x-3">
                    <i v-if="this.isfavorited" class="ri-heart-3-fill red"></i>
                    <i v-if="!this.isfavorited" class="ri-heart-3-fill"></i>
                    <span class="txt_sm">{{ this.itemFavoritecount }}</span>
                </div>
            </div>
            <h6 class="card_title">
                {{showShortName(this.itemName)}}
            </h6>
            <div class="card_footer d-block space-y-10">
                <div class="card_footer justify-content-between">
                    <div class="creators">
                        <p class="txt_sm">4 in stock</p>
                    </div>
                    <router-link :to="{name:'home'}">
                        <p class="txt_sm">
                            Price: <span class="color_green txt_sm">
                                {{this.itemMinbid || 0}} ETH</span>
                        </p>
                    </router-link>
                </div>
                <div class="hr"></div>
                <div class="d-flex
                            align-items-center
                            space-x-10
                            justify-content-between mt-3">
                    <div class="d-flex align-items-center space-x-5"><!--
                        <i class="ri-history-line"></i>
                        <router-link :to="{name:'home'}" data-toggle="modal"
                                     data-target="#popup_history">
                            <p class="color_text txt_sm view_history" style="width: auto">
                                View History
                            </p>
                        </router-link>-->
                    </div>
                    <div class="d-flex align-items-center space-x-5" style="height:30px">
                        <div v-if="this.itemOwner == metaMaskAddress && !this.itemStatus" 
                            class="btn btn-sm btn-primary" 
                            data-toggle="modal"
                            data-target="#popup_buy"
                            @click="sellItem" > Sell</div>
                        <div v-else-if="this.itemOwner == metaMaskAddress && this.itemStatus"
                            class="btn btn-sm btn-primary" 
                            data-toggle="modal"
                            data-target="#popup_buy"
                            >
                            <router-link :to="'/edititem/' + this.itemId">
                                Edit Item
                            </router-link>
                            </div>
                        <div v-if="this.itemOwner != metaMaskAddress && this.itemStatus"
                            class="btn btn-sm btn-primary" 
                            data-toggle="modal"
                            data-target="#popup_buy"
                            > Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item-card",
        props: {
            itemId: Number,
            itemName: String,
            itemMinbid: Number,
            cardImage: String,
            itemCreator:String,
            itemOwner:String,
            itemIsonmarket: Number,
            itemTokenid: Number,
            itemCollectionid: Number,
            itemFavoritecount: Number
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                favorite: false,
                favoriteCount: 0,
                isfavorited: false,
                itemSellStatus: null
            };
        },
        async mounted() {
            let box = document.querySelectorAll('.img-box');
            box.forEach(el=>{
                el.style.height=el.offsetWidth*0.75+'px'
            })

            this.itemSellStatus = this.itemIsonmarket

//          await this.getFavorite();
        },
       computed: {
            userData() {
                return this.$store.state.user?.information;
            },
            metaMaskAddress() {
                return this.userData?.address;
            },
            totalfavoriteCount() {
                return this.favoriteCount
            },
            favoriteStatus() {
                return this.isfavorited
            },
            itemStatus() {
                return this.itemSellStatus
            }
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
            async getFavorite() {
                try {
                    this.favoriteCount = await this.$store.dispatch("activity/getFavoriteCount",
                        {
                            collection_id: this.itemCollectionid,
                            token_id: this.itemTokenid
                        }
                    );

                    let value = await this.$store.dispatch("activity/getFavoriteCount",
                        {
                            collection_id: this.itemCollectionid,
                            token_id: this.itemTokenid,
                            wallet_address: this.metaMaskAddress
                        }
                    );

                    if (value > 0)
                        this.isfavorited = true;
                    else
                        this.isfavorited = false;
                        
                } catch (error) {
                    console.log(error)
                }
            },
            setFavorite()
            {
                if (!this.metaMaskAddress)
                    return;

                if (this.isfavorited){
                    let value = this.$store.dispatch("item/deleteFavorite",
                        {
                            collection_id: this.itemCollectionid,
                            token_id: this.itemTokenid,
                            wallet_address: this.metaMaskAddress
                        }
                    );

                    this.isfavorited = false;
                    this.favoriteCount--;
                }
                else {
                    this.$store.dispatch("item/insertFavorite",
                        {
                            collection_id: this.itemCollectionid,
                            token_id: this.itemTokenid,
                            wallet_address: this.metaMaskAddress
                        }
                    );

                    this.isfavorited = true;
                    this.favoriteCount++;
                }
            },
            async sellItem() {
                if (this.userData) {
                    this.$loading(true)
                    try {
                        await this.$store.dispatch("item/sellItem", {id:this.itemId,
                                                                     is_on_market: 1});

                        this.itemSellStatus = 1;
                        this.$loading(false);
                    } catch (error) {
                        this.$loading(false);
                        this.$failAlert({
                            text: error,
                        });
                    }
                } else {
                    this.$router.push("/connect-wallet");
                }
            },
            buyItem() {
            }
        },
    };
</script>

<style scoped>
    .loadimg {
        height: 216px !important;
        text-align: center;
        border-radius: 12px;
    }
</style>