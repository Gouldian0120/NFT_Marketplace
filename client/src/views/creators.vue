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
            <div class="row"><!--
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
                </div>-->
                <div class="col-lg-3 mb-4"  
                    v-for="n in 8" :key="n">
                    <creator-card 
                        :index="n-1"
                        item-id="123123"
                        :item-avatar="'https://nimspace-staging-storage.s3.us-east-2.amazonaws.com/avatar/avatar_1638152056627'"
                        item-name="Anna"
                        item-wallet="0xFC242f42127494934efc79386ec03DCc8991d095">
                    </creator-card>
                </div>
            </div>
        </div>
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
                            </div><!--
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
                            </div>-->
                        </div>
                    </div>
                    <div class="section__body space-y-20">
                        <div class="row mb-20_reset">
                            <div class="col-lg-4" v-for="n in 6" :key="n">
                                <creator-detail-card 
                                    :index="n-1"
                                    item-id="123123"
                                    :item-avatar="'https://nimspace-staging-storage.s3.us-east-2.amazonaws.com/avatar/avatar_1637952083624'"
                                    :item-banner="'https://nimspace-staging-storage.s3.us-east-2.amazonaws.com/banner-user/banner-user_1637957938940'"
                                    item-name="Danche"
                                    item-wallet="0x2C4C168A2fE4CaB8E32d1B2A119d4Aa8BdA377e7">
                                </creator-detail-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__head mt-5 text-align:center">
            <div 
                class="btn btn-dark btn-sm d-flex align-items-center mx-auto" 
                v-if="this.isShowMore"
                @click="loadNextItems"
            >
                Show More
            </div>
        </div>
    </div>
</template>

<script>
    import CreatorCard from "../components/creator-card";
    import CreatorDetailCard from "../components/creator-detail-card";
    //import CreatorAvatarCard from "../components/creator-avatar-card";

    export default {
        name: "creators",
        components: {CreatorCard, CreatorDetailCard},
        data() {
            return {
                wallet: null,
                listUsers: [],
                listSearchResult: [],
                isShowMore: true,
                filterData: {
                    skip: 0,
                    limit: 12,
                    keySearch: null,
                },
            };
        },
        async mounted() {
            this.$loading(true);
            this.getItems()
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
            async getItems() {
                try {
                    this.listUsers = await this.$store.dispatch("user/getAllUsers", 
                        this.filterData
                    );
                } catch (error) {/*
                    this.$failAlert({
                        text: error,
                    });*/
                }

                if (this.listUsers.length == this.filterData.limit) {
                    this.filterData.skip += this.listUsers.length;
                } else {
                    this.isShowMore = false;
                }
            },
            async loadNextItems() {
                try {
                    let newData = await this.$store.dispatch(
                        "user/getAllUsers",
                        this.filterData
                    );

                    if (newData && newData.length > 0) {
                        if (newData.length == this.filterData.limit) {
                            this.filterData.skip += newData.length;
                        } else {
                            this.isShowMore = false;
                        }
                        this.listUsers.push.apply(this.listUsers, newData);
                    }
                    else
                        this.isShowMore = false;
                } catch (error) {
                    console.log(1212)
                }
            },
        },
    }
</script>

<style scoped>

</style>