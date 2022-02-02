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
            <div class="d-flex
                            align-items-center
                            space-x-10
                            justify-content-between mt-3">
                <div class="d-flex align-items-center space-x-5">
                    <i class="ri-history-line"></i>
                    <router-link :to="{name:'home'}" data-toggle="modal"
                                    data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                            View History
                        </p>
                    </router-link>
                </div>
                <div  v-if="this.creator == metaMaskAddress && this.editable" 
                        class="d-flex align-items-center space-x-5">
                    <router-link :to="'/editcollection/' + this.itemId">
                        <div class="btn btn-sm btn-primary" 
                            data-toggle="modal"
                            data-target="#popup_buy"
                            > Edit</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collection-card",
        props: {
            itemId: Number,
            itemName: String,
            cardImage: String,
            creator: String,
            itemCount: Number,
            editable: Boolean
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
                let creator;
                creator = await this.$store.dispatch(
                            "user/getUserProfileByAddress",
                            this.creator
                        );

                this.viewUser = creator[0];
            } 
            catch (error) {
                console.log("error11")
            }
        },
       computed: {
            userData() {
                return this.$store.state.user?.information;
            },
            metaMaskAddress() {
                return this.userData?.address;
            },
        },
        methods: {
            showShortName(name) {
                if (name.length < 25)
                    return name;
                else
                    return (
                        name.substring(0, 6) +
                        "..." +
                        name.substring(name.length - 8, name.length)
                    );
            },
            showWalletSeller(wallet) {
                if (wallet == null)
                    return null;
                else
                    return (
                        wallet.substring(0, 5) +
                        "..." +
                        wallet.substring(wallet.length - 5, wallet.length)
                    );
            },
            getItem() {
                return this.$store.dispatch("collection/getDetailCollection", { keysearch: this.itemId });
            },
        },
    }
</script>

<style scoped>
    .loadimg {
        height: 211px !important;
        border-radius: 12px;
    }
</style>