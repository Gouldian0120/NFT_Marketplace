<template>
    <div class="card__item four" style="width:280px">
        <div class="card_body space-y-10">
            <div class="creators space-x-10">
                <div class="avatars space-x-3">
                    <router-link :to="{name:'profile'}">
                        <img
                            :src="require('@/assets/img/avatars/avatar_1.png')"
                            alt="Avatar"
                            class="avatar avatar-sm"/>
                    </router-link>
                    <router-link :to="{name:'profile'}">
                        <p class="avatars_name txt_xs">@mickel_fenn</p>
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
                        <p class="avatars_name txt_xs">@danil_pannini</p>
                    </router-link>
                </div>
            </div>
            <div class="card_head h-auto">
                <router-link :to="'/item-details/' + this.itemId">
                    <div class="img-box zoom-box">
                        <div v-lazy-container="{ selector: 'img' }">
                            <img class="loadimg" :data-src="cardImage" :data-loading="loadimage"/>
                        </div>
                    </div>
                </router-link>
                <a class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.2k</span>
                </a>
            </div>
            <h6 class="card_title">
                <router-link
                    :to="'/item-details'"
                    class="color_black">
                    {{showShortName(this.itemName)}}
                </router-link>
            </h6>
            <div class="card_footer d-block space-y-10">
                <div class="card_footer justify-content-between">
                    <div class="creators">
                        <p class="txt_sm">4 in stock</p>
                    </div>
                    <router-link :to="{name:'home'}">
                        <p class="txt_sm">
                            Price: <span class="color_green txt_sm">
                                {{this.itemMinBid || 0}} ETH</span>
                        </p>
                    </router-link>
                </div>
                <div class="hr"></div>
                <div class="d-flex
                            align-items-center
                            space-x-10
                            justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                        <i class="ri-history-line"></i>
                        <router-link :to="{name:'home'}" data-toggle="modal"
                                     data-target="#popup_history">
                            <p class="color_text txt_sm view_history" style="width: auto">
                                View History
                            </p>
                        </router-link>
                    </div>
                    <router-link :to="{name:'home'}" class="btn btn-sm btn-primary"
                        data-toggle="modal"
                        data-target="#popup_bid">
                        Place Bid
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item-card",
        props: {
            itemId: String,
            itemName: String,
            itemMinBid: Number,
            cardImage: String,
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
    };
</script>

<style scoped>
    .loadimg {
        width: 100% !important;
        height: 178px !important;
        text-align: center;
        border-radius: 12px;
    }
</style>