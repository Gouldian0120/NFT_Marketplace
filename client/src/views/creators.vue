<template>
    <div>
        <div class="hero__creators">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-6">
                        <div class="space-y-20">
                            <h1>Popular Creators</h1>
                            <p class="hero__text">
                                I make art with the simple goal of giving you something
                                pleasing to
                                look at for a few seconds.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-auto mt-80">
                        <router-link class="btn btn-dark" :to="{name:'connect-wallet'}"> 
                            be one of our creators
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 mb-4"  
                    v-for="(item, i) in listUsers"
                    :key="i">
                    <creator-card 
                        :index="i"
                        :item-id="item._id"
                        :item-avatar="item.avatar"
                        :item-name="item.full_name"
                        :item-wallet="item.wallet_address">
                    </creator-card>
                </div>
            </div>
        </div><!--
        <div class="section__creators mt-100">
            <div class="container">
                <div class="space-y-30">
                    <div class="section_head">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-lg-auto">
                                <h2 class="section__title">Discover all Creators</h2>
                            </div>
                            <div class="col-lg-4">
                                <div class="search">
                                    <input v-model="wallet" type="text" placeholder="Search" 
                                           class="bg_white" style="color:#000; background:white !important">
                                    <button class="result" @click="SearchCreator">
                                        <i class="ri-search-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-auto">
                                <div class="dropdown">
                                    <button class="btn btn-primary btn-sm dropdown-toggle"
                                            type="button"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                        Recent Active
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section__body space-y-20">
                        <div class="row mb-20_reset">
                            <div class="col-lg-4" v-for="n in 6" :key="n">
                                <div class="creator_item creator_card space-y-20 mb-20">
                                    <div class="avatars flex-column space-y-10">
                                        <div class="cover">
                                            <img
                                                :src="require('@/assets/img/items/cover_1.png')"
                                                alt="Avatar" class="img-fluid">
                                        </div>
                                        <div class="media">
                                            <router-link :to="{name:'profile'}">
                                                <img
                                                    :src="require('@/assets/img/avatars/avatar_5.png')"
                                                    alt="Avatar" class="avatar avatar-md">
                                            </router-link>
                                        </div>
                                        <div class="details text-center">
                                            <div>
                                                <p class="color_black txt_lg">191
                                                    <span class="txt_sm">ETH</span></p>
                                                <p class="color_black txt_sm">Sold</p>
                                            </div>
                                            <div>
                                                <p class="color_black txt_lg">345</p>
                                                <p class="color_black txt_sm">Collections</p>
                                            </div>
                                            <div>
                                                <p class="color_black txt_lg">17,005</p>
                                                <p class="color_black txt_sm">Views</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    import CreatorCard from "../components/creator-card";
    import CreatorAvatarCard from "../components/creator-avatar-card";

    export default {
        name: "creators",
        components: {CreatorCard},
        data() {
            return {
                wallet: null,
                listUsers: [],
                listSearchResult: []
            };
        },
        async mounted() {
            this.$loading(true);
            try {
                this.listUsers = await this.$store.dispatch("user/getAllUsers")
            } catch (error) {/*
                this.$failAlert({
                    text: error,
                });*/
            }
            this.$loading(false);
        },
        computed: {
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
                return (
                    wallet.substring(0, 5) +
                    "..." +
                    wallet.substring(wallet.length - 5, wallet.length)
                );
            },
            async SearchCreator() {
                this.this.listSearchResult = 
                    await this.$store.dispatch("user/getDetailUser", 
                        {
                            id: this.wallet,
                        }
                    )
            },
        },
    }
</script>

<style scoped>

</style>