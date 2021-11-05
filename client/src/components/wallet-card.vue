<template>
    <div class="box in__wallet space-y-10">
        <div class="logo">
            <img
                :src="cardImage"
                alt="logo_community">
        </div>
        <h5 class="text-center">{{this.name}}</h5>
        <p class="text-center">wallet that works on both mobile and through a browser
            extension</p>
    </div>
</template>

<script>
    export default {
        name: "wallet-card",
        props: {
            name: String,
            cardImage: String,
        },
    }
</script>

<style scoped>

</style>

