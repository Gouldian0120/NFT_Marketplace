<template>
    <div>
        <div class="hero__3 bg_white">
            <div class="container">
                <div class="row align-items-center md:space-y-20">
                    <div class="col-lg-6">
                        <h1 class="hero__title">
                            <span class="color_brand">Discover</span> rare digital art
                            and collect NFTs
                        </h1>
                    </div>
                    <div class="col-lg-6">
                        <p class="hero__text color_black">Raroin is a shared liquidity
                            NFT
                            market smart contract
                            which
                            is used by multiple websites to provide the users the
                            best
                            possible experience.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero__3">
            <div class="container">
                <div class="wrapper">
                    <div class="section__head">
                        <div class="d-flex justify-content-between sm-column align-items-center mb-20">
                            <h2 class="section__title"> Recent Collection</h2>
                            <router-link :to="{name:'marketplace'}" class="btn btn-dark btn-sm">
                                View All
                            </router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div
                            v-for="(item, k) in carousel"
                            :key="k"
                            class="col-lg-4"
                        >
                            <collection-card-lg 
                                text-center
                                class="mt-3"
                                card-plain
                                :item-id="item.id"
                                :item-name="item.name"
                                :creator="item.created_by"
                                :card-image="item.image"
                                :item-count="getRecentCollectionItems.length">
                            </collection-card-lg>
                        </div><!--
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6"
                                    v-for="(item, k) in getRecentCollectionItems"
                                    :key="k">
                                    <artwork-card 
                                        text-center
                                        class="mt-3"
                                        card-plain
                                        :item-id="item.id"
                                        :item-name="item.name"
                                        :itemMinBid="item.minBid"
                                        :item-creator="item.creator"
                                        :card-image="item.image"
                                        :item-isputonmarket="item.isPutOnMarket">
                                    </artwork-card>
                                </div>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="section__artists">
            <div class="container">
                <div class="">
                    <div class="">
                        <div class="section_head d-flex justify-content-between align-items-center">
                            <h2 class="section__title mb-20">Hot Sellers</h2>
                            <div class="dropdown">
                                <button class="btn btn-white btn-sm dropdown-toggle"
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
                        <div class="box">
                            <div class="row">
                                <div
                                    class="col-lg-3 creator_item space-x-10"
                                    v-for="(item, i) in listUsers.slice(0,8)"
                                    :key="i"
                                >
                                    <div class="avatars space-x-10">
                                        <div class="media has_border">
                                            <router-link :to="'/profile/' + item.wallet_address">
                                                <div v-lazy-container="{ selector: 'img' }">
                                                    <img class="avatarloadimg"
                                                        :data-src="item.avatar || avatarimage"
                                                        :data-loading="loadimage"/>
                                                </div>
                                                <div class="has_number">
                                                    {{i + 1}}
                                                </div>
                                            </router-link>
                                        </div>
                                        <div class="">
                                            <a
                                                class="float-left"
                                                :href="`#/user-profile/${item.wallet_address}`"
                                            >
                                                <h4 class="comment-heading show-name">
                                                    {{
                                                    showShortName(item.full_name) || showWalletSeller(item.wallet_address)
                                                    }}
                                                </h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section mt-100">
            <div class="container">
                <div class="section__head">
                    <div class="d-flex justify-content-between sm-column align-items-center mb-20">
                        <h2 class="section__title"> Live Autions</h2>
                        <router-link :to="{name:'marketplace'}" class="btn btn-dark btn-sm">
                            View All
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <div  
                        v-if="carouselItems && carouselItems.length > 0"
                        trigger="click"
                        :interval="10000">
                        <div
                            v-for="(group, i) in carouselItems" :key="i" 
                        >
                            <div class="row">
                                <div
                                    v-for="(item, k) in group"
                                    :key="k"
                                   class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                                >
                                    <item-card
                                        text-center
                                        class="mt-3"
                                        card-plain
                                        :item-id="item.id"
                                        :item-name="item.name"
                                        :item-minBid="item.minBid"
                                        :card-image="item.image"
                                        :item-isputonmarket="item.isPutOnMarket"
                                    >
                                    </item-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body space-y-20 p-40">
                        <h3 class="text-center">Your Bidding
                            Successfuly Added</h3>
                        <p class="text-center">your bid <span class="color_text txt
                        _bold">(16ETH) </span> has been listing
                            to our database</p>
                        <a href="#" class="btn btn-dark w-full"> Watch the listings</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero__3">
            <div class="container">
                <div class="wrapper">
                    <div class="section__head">
                        <div class="d-flex justify-content-between sm-column align-items-center mb-20">
                            <h2 class="section__title"> Top artworks</h2>
                            <router-link :to="{name:'marketplace'}" class="btn btn-dark btn-sm">
                                View All
                            </router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div
                            v-for="(item, k) in topColllections"
                            :key="k"
                            class="col-lg-4"
                        >
                            <collection-card-lg 
                                    text-center
                                    class="mt-3"
                                    card-plain
                                    :item-id="item.id"
                                    :item-name="item.name"
                                    :creator="item.created_by"
                                    :card-image="item.image"
                                    :item-count="getRecentCollectionItems.length">
                            </collection-card-lg>
                        </div><!--
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6"
                                    v-for="(item, k) in itemsInTopCollection"
                                    :key="k">
                                    <artwork-card 
                                        text-center
                                        class="mt-3"
                                        card-plain
                                        :item-id="item.id"
                                        :item-name="item.name"
                                        :itemMinBid="item.minBid"
                                        :item-creator="item.creator"
                                        :card-image="item.image"
                                        :item-isputonmarket="item.isPutOnMarket">
                                    </artwork-card>
                                </div>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="call2action is__light">
            <div class="container">
                <div class="row justify-content-between align-items-center sm:space-y-20">
                    <div class="col-md-6">
                        <div class="space-y-20">
                            <h1>Start your own
                                collection today</h1>
                            <p class="color_text section__text">raroin is a shared
                                liquidity NFT
                                market smart contract
                                which
                                is used by multiple websites to provide the users the
                                best
                                possible experience.</p>
                            <router-link to="/connect-wallet" class="btn btn-primary">Start
                                Collecting
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-auto">
                        <img class="img-fluid img__logo"
                             :src="require('@/assets/img/logos/Logo_illustrstion_white.png')"
                             alt="...">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="community">
                <div class="section__head space-y-20">
                    <h3 class="section__title text-center">Global community</h3>
                    <p class="section__text text-center"> Learn more about raroin, chat
                        with the team,
                        other people in the community, and express your opinion on the
                        future development of raroin. </p>
                </div>
                <div class="community__items">
                    <div class="row justify-content-center mb-20_reset">
                        <div class="col-md-3">
                            <div class="item space-y-10">
                                <div class="logo">
                                    <img
                                        :src="require('@/assets/img/icons/github.svg')"
                                        alt="logo_community">
                                </div>
                                <h5 class="text-center">Github</h5>
                                <p class="text-center">Understand the progress of our
                                    code and project</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="item space-y-10">
                                <div class="logo is_twitter">
                                    <img
                                        :src="require('@/assets/img/icons/twitter.svg')"
                                        alt="logo_community">
                                </div>
                                <h5 class="text-center">Twitter</h5>
                                <p class="text-center">Understand the progress of our
                                    code and project</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="item space-y-10">
                                <div class="logo is_discord">
                                    <img
                                        :src="require('@/assets/img/icons/discord.svg')"
                                        alt="logo_community">
                                </div>
                                <h5 class="text-center">Discord</h5>
                                <p class="text-center">Understand the progress of our
                                    code and project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ItemCard from "../components/item-card";
 //   import ArtworkCard from "../components/artwork-card";
    import CollectionCardLg from "../components/collection-card-lg";

    export default {
        components: { ItemCard, CollectionCardLg},
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_1.png"),
                carouselItems: [],
                listItemsOnSale: [],
                listColllections: [],
                listUsers: [],
                subscribe: null,
                filterName: "All",
                carousel: [],
                topColllections: [],
                itemsInTopCollection: [],
                recentCollectionitem: null,
                topCollectioonItem: null,
            };
        },
        async mounted() {
        //    this.$loading(true);
            let box = document.querySelectorAll('.img-box');
            box.forEach(el=>{
                el.style.height=el.offsetWidth*0.75+'px'
            })

            try {
                await this.getItemsOnSale()
                await this.getRecentListCollections()
                await this.getTopCollections()

                this.recentCollectionitem = await this.getDetailCollection(this.carousel[0].id)
                await this.getTopCollectionsItems()

         //       this.listUsers = await this.$store.dispatch("user/getAllUsers")
            } catch (error) {
                this.$loading(false);
                console.log("error 121212")
                /*
                this.$failAlert({
                    text: error,
                });*/
            }
        //    this.$loading(false);
        },
        computed: {
            getRecentCollectionItems() {
                if (this.recentCollectionitem == null)
                    return 0
                return this.recentCollectionitem.items
            },
            getTopCollectionItems() {
                if (this.topCollectionItem == null)
                    return 0
                return this.topCollectionItem.items
            }
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
            goTo(url) {
                this.$router.push("/" + url);
            },
            showWalletSeller(wallet) {
                return (
                    wallet.substring(0, 5) +
                    "..." +
                    wallet.substring(wallet.length - 5, wallet.length)
                );
            },
            async getItemsOnSale() {
                this.listItemsOnSale = await this.$store.dispatch(
                    "item/getAllItemsOnSale",
                    {
                        skip: 0,
                        limit: 16,
                        filter:{
                            is_on_market:1
                        }
                    }
                );

                for (let index = 0; index < this.listItemsOnSale.length; index++) {
                    let tmp = Math.floor(index / 4);
                    if (this.carouselItems.length == tmp) {
                        this.carouselItems.push([]);
                    }
                    this.carouselItems[tmp].push(this.listItemsOnSale[index]);
                }
            },
            async getRecentListCollections() {
                this.listColllections = await this.$store.dispatch(
                    "collection/getAllCollections",
                    {
                        skip: 0,
                        limit: 1,
                        sortBy: "created_at",
                    }
                );

                this.carousel.push(this.listColllections[this.listColllections.length - 1]);
            },
            async getTopCollections() {
                this.topColllections = await this.$store.dispatch(
                    "collection/getAllCollections",
                    {
                        skip: 0,
                        limit: 1,
                    }
                );
            },
            async getDetailCollection(collectionid) {
                return await this.$store.dispatch("collection/getDetailCollection", { id: collectionid });
            },
            async getTopCollectionsItems() {
                this.topCollectionItem = await this.getDetailCollection(this.topColllections[0].id)

                for (let index = 0; index < this.topCollectionItem.items.length; index++) {
                    if (index < 4) {
                        this.itemsInTopCollection.push(this.topCollectionItem.items[index]);
                    }
                }               
            },
        },
    }
</script>

<style scoped>
    .loadimg {
        width: 100% !important;
        height: 252px !important;
        border-radius: 12px;
    }

    .avatarloadimg {
        width: 80px !important;
        height: 80px !important;
        border-radius: 50%;
    }
</style>