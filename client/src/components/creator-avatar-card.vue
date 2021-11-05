<template>
    <div class="avatars space-x-10">
                               <router-link :to="{name:'profile'}">
                                    <img
                                        :src="require('@/assets/img/avatars/avatar_6.png')"
                                        alt="Avatar" class="avatar avatar-md">
                                </router-link>
                                <div>
                                <router-link :to="{name:'profile'}">
                                        <p class="avatars_name color_black">@eli_tyler...</p>
                                </router-link>
                                    <span class="price color_green">16.58
                                        ETH
                                    </span>
                                </div>
                            </div>
</template>

<script>
    export default {
        name: "creator-avatar-card"
    }
</script>

<style scoped>

</style>