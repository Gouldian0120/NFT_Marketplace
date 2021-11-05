<template>
    <div>
        <a href="#" class="box in__wallet space-y-10"
           data-toggle="modal"
           data-target="#popup_connected">
            <div class="logo">
                <img
                        :src="require('@/assets/img/icons/coibase.svg')"
                        alt="logo_community">
            </div>
            <h5 class="text-center">coibase</h5>
            <p class="text-center">wallet that works on both mobile and through a browser
                extension</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "wallet-card"
    }
</script>

<style scoped>

</style>