<template>
    <div class="collections space-y-10 mb-30">
        <router-link :to="{name:'collections'}">
            <div class="collections_item">
                <div class="images-box space-y-10">
                    <div class="top_imgs">
                        <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_9.png') + ')' }"
                             class="img-box"></div>
                        <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_10.png') + ')' }"
                             class="img-box mx-2"></div>
                        <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_11.png') + ')' }"
                             class="img-box"></div>
                    </div>
                    <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_12.png') + ')' }"
                         class="img-box"></div>
                </div>
            </div>
        </router-link>
        <div class="collections_footer justify-content-between">
            <h5 class="collection_title">
                <router-link :to="{name:'collections'}">
                    Creative Art collection
                </router-link>
            </h5>
            <router-link :to="{name:'home'}" class="likes space-x-3">
                <i class="ri-heart-3-fill"></i>
                <span class="txt_md">2.1k</span>
            </router-link>
        </div>
        <div class="creators space-x-10">
            <span class="color_text txt_md"> 5 items · Created by</span>
            <div class="avatars space-x-5">
                <router-link :to="{name:'profile'}">
                    <img
                            :src="require('@/assets/img/avatars/avatar_2.png')"
                            alt="Avatar" class="avatar avatar-sm">
                </router-link>
            </div>
            <router-link :to="{name:'profile'}">
                <p class="avatars_name txt_sm"> @william_jamy... </p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collection-card",
        mounted() {
                let box = this.$el.querySelectorAll('.img-box');
                box.forEach(el => {
                    el.style.height = el.offsetWidth * 0.75 + 'px'
                })

        },
    }
</script>

<style scoped>

</style>