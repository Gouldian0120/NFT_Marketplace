<template>
    <div class="card__item five">
        <div class="card_body space-y-10 space-x-10 d-flex">
            <div class="card_head h-auto">
                <router-link :to="'/item-details/' + this.itemId">
                    <div class="img-box zoom-box">
                        <div v-lazy-container="{ selector: 'img' }">
 <!--                           <img class="loadimg" :data-src="cardImage" :data-loading="loadimage"/>-->
                        </div>
                    </div>
                </router-link>
                <div class="details d-flex justify-content-between">
                </div>
            </div>
            <div class="d-flex flex-column justify-content-center w-100 space-y-10">
                <h6 class="card_title">{{showShortName(this.itemName)}}</h6>
                <div class="hr"></div>
                <div>Creator:</div>
                <div class="card_footer d-block space-y-10">
                    <div class="creators space-x-10">
                        <div class="avatars">
                            <router-link :to="'/profile/' + this.itemCreator">
                                <div v-lazy-container="{ selector: 'img' }">
                                    <img class="avatar avatar-sm" 
                                        :data-src="viewUser.avatar || avatarimage" 
                                        :data-loading="loadimage"/>
                                    <span class="avatars_name txt_sm ml-1">{{showWalletSeller(this.itemCreator)}}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="d-flex
                                align-items-center
                                justify-content-between
                                space-x-3" style="min-height:30px">
                        <a  v-if="this.itemIsonmarket && itemIsmarketoption == 2"
                            class="btn btn-sm btn-primary"
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid">Place Bid</a>
                        <a  v-if="this.itemIsonmarket && itemIsmarketoption == 1"
                            class="btn btn-sm btn-primary"
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid">Buy Now</a>
                        <span  v-if="this.itemIsonmarket" class="color_green txt_sm text-right">{{this.itemMinbid || 0}} ETH</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "artwork-card",
        props: {
            itemId: Number,
            itemName: String,
            itemMinbid: Number,
            cardImage: String,
            itemCreator:String,
            itemIsonmarket: Number,
            itemIsmarketoption: Number
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_4.png"),
                viewUser: {},
            };
        },
        async mounted() {
            let box = document.querySelectorAll('.img-box');
            box.forEach(el=>{
                el.style.height=el.offsetWidth*0.75+'px'
            })

/*
            this.viewUser = await this.$store.dispatch(
                            "user/getUserProfile",
                            this.itemCreator
            );*/
        },
        methods: {
            showShortName(name) {
                if (name.length < 25)
                    return name;
                else
                    return (
                        name.substring(0, 5) +
                        "..." +
                        name.substring(name.length - 5, name.length)
                    );
            },
            showWalletSeller(wallet) {
                if (wallet == null)
                    return null;
                else
                    return (
                        wallet.substring(0, 6) +
                        "..." +
                        wallet.substring(wallet.length - 7, wallet.length)
                    );
            },
        },
    }
</script>

<style scoped>
    .loadimg {
        height: 165px !important;
        text-align: center;
        border-radius: 12px;
    }
</style>