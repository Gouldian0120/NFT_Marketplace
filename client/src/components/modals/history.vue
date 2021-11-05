<template>
    <div class="modal fade popup" id="popup_history" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body space-y-20 p-40">
                        <h4> History </h4>
                        <div class="creator_item creator_card space-x-10">
                            <div class="avatars space-x-10">
                                <div class="media">
                                    <div class="badge">
                                        <img :src="require('@/assets/img/icons/Badge.svg')"
                                             alt="">
                                    </div>
                                    <router-link :to="{name:'profile'}">
                                        <img
                                                :src="require('@/assets/img/avatars/avatar_1.png')"
                                                alt="Avatar"
                                                class="avatar avatar-md">
                                    </router-link>
                                </div>
                                <div>
                                    <p class="color_black">Bid accepted <span
                                            class="color_brand">1
                                    ETH</span> by <router-link class="color_black txt
                                    _bold"
                                                     :to="{name:'profile'}">ayoub</router-link></p>
                                    <span class="date color_text">28/06/2021, 12:08</span>
                                </div>
                            </div>
                        </div>
                        <div class="creator_item creator_card space-x-10">
                            <div class="avatars space-x-10">
                                <div class="media">
                                    <div class="badge">
                                        <img :src="require('@/assets/img/icons/Badge.svg')"
                                             alt="">
                                    </div>
                                    <router-link :to="{name:'profile'}">
                                        <img
                                                :src="require('@/assets/img/avatars/avatar_2.png')"
                                                alt="Avatar"
                                                class="avatar avatar-md">
                                    </router-link>
                                </div>
                                <div>
                                    <p class="color_black">Bid accepted <span
                                            class="color_brand">3
                                    ETH</span> by <router-link class="color_black txt
                                    _bold"
                                                     :to="{name:'profile'}">monir</router-link></p>
                                    <span class="date color_text">22/05/2021, 12:08</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "history"
    }
</script>

<style scoped>

</style>