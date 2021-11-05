<template>
    <div class="creator_item creator_card space-y-10 is_big">
                <div class="avatars flex-column space-y-10">
                    <div class="media has_border">
                        <router-link :to="{name:'profile'}">
                            <img
                            :src="require('@/assets/img/avatars/avatar_1.png')"
                                alt="Avatar" class="avatar avatar-md">
                        </router-link>
                        <div class="has_number">
                            {{index + 1}}
                        </div>
                    </div>
                    <div class="text-center">
                       <router-link :to="{name:'profile'}">
                            <p class="avatars_name large color_black">@jimena_stark</p>
                        </router-link>
                        <span class="sales color_text">4 sales on
                            14.28 ETH</span>
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        name: "creator-card",
        props:{
            index:{
                type:Number,
                default:1
            }
        }
    }
</script>

<style scoped>

</style>