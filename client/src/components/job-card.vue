<template>
    <div class="card__item three">
        <div class="card_body space-y-10">
            <!-- =============== -->
            <div class="card_head h-auto">
<!--                <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_1.png') + ')' }"-->
<!--                     class="img-box">-->

<!--                </div>-->
                <div :style="{ backgroundImage: 'url(https://www.thecartoonpictures.com/data/media/173/Thundercats-Logo_800_600.jpg)' }"
                         class="img-box zoom-box">

                    </div>
                <a href="#" class="likes
                                                        space-x-3">
                    <i
                            class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.2k</span>
                </a>
                <div class="action">
                    <a href="#" class="btn
                                                            btn-primary btn-sm
                                                            btn_auction"
                       data-toggle="modal"
                       data-target="#popup_bid">
                        <i
                                class="ri-auction-line
                                                                color_white"></i>
                        Place Your Bid
                    </a>
                </div>
            </div>
            <!-- =============== -->
            <h6 class="card_title">
                <!--<router-link :to="'item-details'" class="color_black">-->
                    pop art Painting
                <!--</router-link>-->
            </h6>

            <div class="card_footer d-block
                                                    space-y-10">
                <div class="d-flex
                                                        justify-content-between
                                                        align-items-center">
                    <div class="creators
                                                            space-x-10">
                        <div class="avatars
                                                                -space-x-20">
                            <router-link :to="{name:'profile'}">
                                <img
                                        :src="require('@/assets/img/avatars/avatar_1.png')"
                                        alt="Avatar"
                                        class="avatar
                                                                        avatar-sm"
                                />
                            </router-link>
                            <router-link :to="{name:'profile'}">
                                <img
                                        :src="require('@/assets/img/avatars/avatar_2.png')"
                                        alt="Avatar"
                                        class="avatar
                                                                        avatar-sm"
                                />
                            </router-link>
                        </div>
                        <router-link :to="{name:'profile'}">
                            <p
                                    class="avatars_name
                                                                    txt_sm">
                                @luka_fenn..
                            </p>
                        </router-link>
                    </div>
                    <a href="#"
                       class="space-x-3">
                        <p
                                class="color_green
                                                                txt_sm">0.001
                            ETH</p>
                    </a>
                </div>
                <div class="hr"></div>
                <div

                        class="d-flex
                                                        align-items-center
                                                        space-x-10">
                    <i
                            class="ri-vip-crown-line"></i>
                    <p class="color_text
                                                            txt_sm"
                       style="width: auto">
                        Highest bid
                    </p>
                    <span class="color_black
                                                            txt_sm">0.022
                                                            ETH</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "job-card",
         mounted() {
            let box = document.querySelectorAll('.img-box');
            box.forEach(el=>{
                el.style.height=el.offsetWidth*0.75+'px'
            })
        }
    }
</script>

<style scoped>

</style>