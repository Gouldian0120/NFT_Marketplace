<template>
    <div class="card__item five">
                                    <div class="card_body space-y-10 space-x-10 d-flex">
                                        <!-- ???? =============== -->
                                        <div class="card_head">

                                            <router-link :to="'item-details'">
                                                <div :style="{ backgroundImage: 'url(' + require('@/assets/img/avatars/avatar_4.png') + ')' }"
                                                     class="img-box zoom-box">
                                                </div>
                                            </router-link>
                                            <div class="details d-flex justify-content-between">
                                                <div class="progress">
                                                    <div
                                                            class="progress-bar"
                                                            role="progressbar"
                                                            style="width: 80%"
                                                            aria-valuenow="80"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- ???? =============== -->
                                        <div
                                                class="d-flex flex-column justify-content-center
                            w-100
                            space-y-10">
                                            <h6 class="card_title">Colorful Abstract Painting</h6>
                                            <div class="hr"></div>
                                            <div class="card_footer d-block space-y-10">
                                                <div class="creators space-x-10">
                                                    <div class="avatars">
                                                        <router-link :to="{name:'profile'}">
                                                            <img
                                                                    :src="require('@/assets/img/avatars/avatar_4.png')"
                                                                    alt="Avatar"
                                                                    class="avatar avatar-sm"
                                                            />
                                                        </router-link>
                                                    </div>
                                                    <router-link :to="{name:'profile'}">
                                                        <p class="avatars_name txt_sm">@krista_bryan...</p>
                                                    </router-link>
                                                </div>
                                                <div

                                                        class="d-flex
                                    align-items-center
                                    justify-content-between
                                    space-x-3">
                                                    <a
                                                            class="btn btn-sm btn-primary"
                                                            href="#"
                                                            data-toggle="modal"
                                                            data-target="#popup_bid">Place Bid</a>
                                                    <span class="color_green txt_sm text-right">4,906
                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
</template>

<script>
    export default {
        name: "artwork-card"
    }
</script>

<style scoped>

</style>