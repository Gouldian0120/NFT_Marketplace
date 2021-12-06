<template>
    <div class="row justify-content-between align-items-center">
        <div class="col-auto">
            <div class="creators_box">
                <div class="avatars space-x-10">
                    <div class="media">
                        <img
                            :src="require('@/assets/img/items/item_1.png')"
                            alt="Avatar" class="avatar avatar-md">
                    </div>
                    <div>
                        <h5 class="color_black">Creative Art
                            collection</h5>
                        <div class="d-flex space-x-10">
                            <span class="price color_text">listed by
                            </span>
                            <router-link :to="{name:'profile'}" class="price color_brand">
                                @jimena_stark
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-auto">
            <p class="date color_text"> Last 2 days </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "activity-card"
    }
</script>

<style scoped>

</style>