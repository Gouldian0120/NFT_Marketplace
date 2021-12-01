<template>
    <div class="card__item five">
        <div class="card_body space-y-10 space-x-10 d-flex">
            <div class="card_head h-auto">
                <router-link :to="'/item-details/' + this.itemId">
                    <div class="img-box zoom-box">
                        <div v-lazy-container="{ selector: 'img' }">
                            <img class="loadimg" :data-src="cardImage" :data-loading="loadimage"/>
                        </div>
                    </div>
                </router-link>
                <div class="details d-flex justify-content-between"><!--
                    <div class="progress">
                        <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 80%"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100">
                        </div>
                    </div>-->
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
                                <img
                                    :src="require('@/assets/img/avatars/avatar_4.png')"
                                    alt="Avatar"
                                    class="avatar avatar-sm"
                                />
                            </router-link>
                        </div>
                        <router-link :to="'/profile/' + this.itemCreator">
                            <p class="avatars_name txt_sm">{{showShortName(this.itemCreator)}}</p>
                        </router-link>
                    </div>
                    <div class="d-flex
                                align-items-center
                                justify-content-between
                                space-x-3">
                        <a  v-if="this.itemIsputonmarket"
                            class="btn btn-sm btn-primary"
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid">Place Bid</a>
                        <span  v-if="this.itemIsputonmarket" class="color_green txt_sm text-right">{{this.itemMinBid || 0}} ETH</span>
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
            itemId: String,
            itemName: String,
            itemMinBid: Number,
            cardImage: String,
            itemCreator: String,
            itemIsputonmarket: Boolean
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
            };
        },
        mounted() {
            let box = document.querySelectorAll('.img-box');
            box.forEach(el=>{
                el.style.height=el.offsetWidth*0.75+'px'
            })
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
        },
    }
</script>

<style scoped>
    .loadimg {
        width: 100% !important;
        height: 165px !important;
        text-align: center;
        border-radius: 12px;
    }
</style>