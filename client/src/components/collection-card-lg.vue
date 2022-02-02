<template>
    <div class="card__item two">
        <div class="card_body space-y-10">
            <div class="card_head h-auto">
                <div class="img-box zoom-box">
                    <router-link :to="'/marketplace/' + this.itemId">
                        <div v-lazy-container="{ selector: 'img' }" style="text-align:center">
                            <img class="loadimg" :data-src="this.cardImage" :data-loading="loadimage"/>
                        </div>
                    </router-link>
                </div>
            </div>
            <h6 class="card_title">
                <router-link :to="'/marketplace/' + this.itemId">
                    {{showShortName(this.itemName)}}
                </router-link>
            </h6>
            <div class="hr"></div>
            <div class="card_footer justify-content-between">
                <div class="avatars">
                    <router-link :to="'/profile/' + this.creator">
                        <div v-lazy-container="{ selector: 'img' }">
                            <img class="avatar avatar-sm" 
                                :data-src="viewUser.avatar || avatarimage" 
                                :data-loading="loadimage"/>
                                <span class="avatars_name txt_sm">
                                    {{showWalletSeller(this.creator)}}
                                </span>
                        </div>
                    </router-link>
                </div>
                <span class="color_green txt_sm">
                    {{this.itemCount}} items</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collection-card-lg",
        props: {
            itemId: Number,
            itemName: String,
            cardImage: String,
            creator: String,
            itemCount: Number
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_4.png"),
                item: null,
                viewUser: {},
            };
        },
        async mounted() {
           try {
                this.item = await this.getItem();
/*
                this.viewUser = await this.$store.dispatch(
                            "user/getUserProfile",
                            this.creator
                        );*/
            } 
            catch (error) {
                console.log("error11")
            }
        },
        methods: {
            showShortName(name) {
                if (name.length < 25)
                    return name;
                else
                    return (
                        name.substring(0, 8) +
                        "..." +
                        name.substring(name.length - 8, name.length)
                    );
            },
            showWalletSeller(wallet) {
                if (wallet == null)
                    return null;
                else
                    return (
                        wallet.substring(0, 8) +
                        "..." +
                        wallet.substring(wallet.length - 8, wallet.length)
                    );
            },
            getItem() {
                return this.$store.dispatch("collection/getDetailCollection", { id: this.itemId });
            },
        },
    }
</script>

<style scoped>
    .loadimg {
        height: 303px !important;
        border-radius: 12px;
    }
</style>