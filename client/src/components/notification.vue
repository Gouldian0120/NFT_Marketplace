<template>
    <div class="notification-slot"></div>
</template>

<script>
    export default {
        name: "notification",
        mounted() {
            if(this.$store.state.user.messageType && this.$store.state.user.messageContent)
            {
                this.$toast[this.$store.state.user.messageType](this.$store.state.user.messageContent, {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: false,
                    icon: true,
                    rtl: false
                });
                this.$store.state.user.messageType = null
                this.$store.state.user.messageContent = null
            }

            if(this.$store.state.collection.messageType && this.$store.state.collection.messageContent)
            {
                this.$toast[this.$store.state.collection.messageType](this.$store.state.collection.messageContent, {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: false,
                    icon: true,
                    rtl: false
                });
                this.$store.state.collection.messageType = null
                this.$store.state.collection.messageContent = null
            }

            if(this.$store.state.item.messageType && this.$store.state.item.messageContent)
            {
                this.$toast[this.$store.state.item.messageType](this.$store.state.item.messageContent, {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: false,
                    icon: true,
                    rtl: false
                });
                this.$store.state.item.messageType = null
                this.$store.state.item.messageContent = null
            }

            if(this.$store.state.global.messageType && this.$store.state.global.messageContent)
            {
                this.$toast[this.$store.state.global.messageType](this.$store.state.global.messageContent, {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: false,
                    icon: true,
                    rtl: false
                });
                this.$store.state.global.messageType = null
                this.$store.state.global.messageContent = null
            }
        }
    }
</script>

<style scoped>
    .notification-slot {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
    }
</style>