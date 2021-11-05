<template>
    <div class="section__artists mt-100">
            <div class="container">
                <div class="space-y-30">
                    <div class="section_head">
                        <h2 class="section__title">Top Artists</h2>
                    </div>
                    <div class="section_body swiper_artists"  >
                        <!-- Additional required wrapper -->
                        <swiper :options="swiperOptions">
                            <!-- Slides -->
                            <swiper-slide v-for="n in 10 " :key="n" style="width: fit-content!important;">
                                <div class="creator_item creator_card rounded_border space-x-10" style="padding-right: 100px">
                                    <div class="avatars space-x-10">
                                        <div class="media">
                                            <div class="badge">
                                                <img
                                                       :src="require('@/assets/img/icons/Badge.svg')"
                                                        alt="Badge">
                                            </div>
                                             <router-link :to="{name:'profile'}">
                                                <img
                                                        :src="require('@/assets/img/avatars/avatar_1.png')"
                                                        alt="Avatar" class="avatar
                                            avatar-md">
                                            </router-link>

                                        </div>
                                        <div>
                                            <router-link :to="{name:'profile'}">
                                            <p class="avatars_name
                                            color_black">@xander_hall...</p>
                                            </router-link>
                                            <span class="price color_green">16.58 ETH</span>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "artist-slider",
        data(){
            return{
                swiperOptions: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    breakpoints: {
                        640: {
                            spaceBetween: 10
                        },
                        320: {
                            spaceBetween: 8
                        }
                    }
                },
            }
        }
    }
</script>

<style scoped>

</style>