<template>
    <div>
        <div class="hero__3">
            <div class="container">
                <div class="row align-items-center mb-50 md:space-y-20">
                    <div class="col-lg-6">
                        <h1 class="hero__title">
                            <span class="color_brand">Discover</span> rare digital art
                            and collect NFTs
                        </h1>
                    </div>
                    <div class="col-lg-6">
                        <p class="hero__text color_black">raroin is a shared liquidity
                            NFT
                            market smart contract
                            which
                            is used by multiple websites to provide the users the
                            best
                            possible experience.</p>
                    </div>

                </div>
                <div class="wrapper">
                    <div class="row">
                        <div class="col-lg-4" v-for="n in 2" :key="n">
                            <div class="card__item two">
                                <div class="card_body space-y-10">
                                    <!-- ???? =============== -->
                                    <div class="card_head h-auto">
                                        <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_5.png') + ')' }"
                                             class="img-box zoom-box">
                                        </div>
                                        <!--                                        <img-->
                                        <!--                                                :src="require('@/assets/img/items/item_2.png')"-->
                                        <!--                                                alt="">-->
                                        <div class="block_timer">
                                            <div class="d-flex justify-content-center
                                        align-items-center">
                                                <div class="item">
                                                    <div class="number txt hours">46<span></span></div>
                                                </div>
                                                <div class="dots">:</div>
                                                <div class="item">
                                                    <div class="number txt minutes">35<span></span></div>
                                                </div>
                                                <div class="dots">:</div>
                                                <div class="item">
                                                    <div class="number txt seconds">03<span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="details d-flex justify-content-between">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style="width:
                                            80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ???? =============== -->
                                    <h6 class="card_title">
                                        <router-link :to="'item-details'" class="color_black">
                                            Colorful Abstract Painting
                                        </router-link>
                                    </h6>
                                    <div class="hr"></div>
                                    <div class="card_footer justify-content-between">
                                        <router-link :to="{name:'profile'}" class="creators space-x-10">
                                            <div class="avatars -space-x-20">
                                                <img
                                                        :src="require('@/assets/img/avatars/avatar_1.png')"
                                                        alt="Avatar" class="avatar
                                            avatar-sm">
                                                <img
                                                        :src="require('@/assets/img/avatars/avatar_2.png')"
                                                        alt="Avatar" class="avatar
                                            avatar-sm">
                                            </div>
                                            <p class="avatars_name txt_sm">
                                                @xander_hall...
                                            </p>
                                        </router-link>
                                        <router-link :to="{name:'home'}" class="space-x-3">
                                            <p class="color_green txt_sm">0,054 ETH</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card__item five" v-for="n in 2" :key="n">
                                <div class="card_body space-y-10 space-x-10 d-flex">
                                    <!-- ???? =============== -->
                                    <div class="card_head h-auto align-center">
                                        <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_5.png') + ')' }"
                                             class="img-box zoom-box">
                                        </div>

                                        <div class="details d-flex
                                    justify-content-between">
                                            <div class="progress">
                                                <div class="progress-bar"
                                                     role="progressbar" style="width:80%" aria-valuenow="80"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ???? =============== -->
                                    <div class="d-flex flex-column
                                justify-content-center w-100 space-y-10">
                                        <h6>
                                            <router-link class="color_black"
                                                         to="/item-details">
                                                Synthwave Modern Painting
                                            </router-link>
                                        </h6>
                                        <div class="hr"></div>
                                        <div class="card_footer d-block space-y-10">
                                            <router-link :to="{name:'profile'}"
                                                         class="creators space-x-10">
                                                <div class="avatars">
                                                    <img
                                                            :src="require('@/assets/img/avatars/avatar_6.png')"
                                                            alt="Avatar" class="avatar
                                                avatar-sm">

                                                </div>
                                                <p class="avatars_name txt_sm">
                                                    @makinzi_beck... </p>
                                            </router-link>
                                            <div class="d-flex
                                        align-items-center space-x-10
                                        justify-content-between">
                                                <a class="btn btn-sm btn-primary"
                                                   href="#" data-toggle="modal"
                                                   data-target="#popup_bid">Place Bid</a>
                                                <span class="color_green txt_sm
                                            text-right">3,003 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex justify-content-center mb-30">
                                <router-link :to="{name:'marketplace'}" class="btn btn-md btn-dark"> View all
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__artists">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 space-y-30">
                        <div class="section_head d-flex justify-content-between align-items-center">
                            <h2 class="section__title">Hot Sellers</h2>
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
                                    class="col-lg-6 creator_item space-x-10"
                                    v-for="(item, i) in listUsers.slice(0,8)"
                                    :key="i"
                                >
                                    <div class="avatars space-x-10">
                                        <div class="media">
                                            <router-link :to="'/user-profile/$' + item.wallet_address">
                                                <div class="media" style="width:89px; height:89px; border-radius: 50%;">
                                                        <div v-lazy-container="{ selector: 'img' }">
                                                            <img width="80px" height="80px" style="border-radius: 50%;"
                                                                :data-src="item.avatar || loadimage"
                                                                :data-loading="loadimage"
                                                            />
                                                        </div>
                                                    <div class="has_number">
                                                        {{i + 1}}
                                                    </div>
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
                                                    item.full_name || showWalletSeller(item.wallet_address)
                                                    }}
                                                </h4>
                                            </a>
                                            <p>{{ item.bio }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 space-y-30">
                        <div class="section_head d-flex justify-content-between align-items-center">
                            <h3 class="section__title">Hot Buyers</h3>
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
                                    <a class="dropdown-item" href="#">Something else
                                        here</a>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="space-y-10">
                                        <div class="creator_item space-x-10" v-for="(n,index) in 4" :key="n">
                                            <div class="avatars space-x-10">
                                                <div class="media">
                                                    <router-link :to="{name:'profile'}">
                                                        <img
                                                                :src="require('@/assets/img/avatars/avatar_9.png')"
                                                                alt="Avatar"
                                                                class="avatar
                                                    avatar-md">
                                                    </router-link>
                                                    <div class="has_number">
                                                        {{index+1}}
                                                    </div>
                                                </div>
                                                <div>
                                                    <router-link :to="{name:'profile'}">
                                                        <p class="avatars_name
                                                    color_black">@joel_reese...</p>
                                                    </router-link>
                                                    <span class="price color_green">12.22
                                                ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="space-y-10">
                                        <div class="creator_item space-x-10" v-for="(n,index) in 4" :key="n">
                                            <div class="avatars space-x-10">
                                                <div class="media">
                                                    <router-link :to="{name:'profile'}">
                                                        <img
                                                                :src="require('@/assets/img/avatars/avatar_9.png')"
                                                                alt="Avatar"
                                                                class="avatar
                                                    avatar-md">
                                                    </router-link>
                                                    <div class="has_number">
                                                        {{index + 4 + 1}}
                                                    </div>
                                                </div>
                                                <div>
                                                    <router-link :to="{name:'profile'}">
                                                        <p class="avatars_name
                                                    color_black">@cannon_stark...</p>
                                                    </router-link>
                                                    <span class="price color_green">12.03
                                                ETH</span>
                                                </div>
                                            </div>
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
                        <h2 class="section__title"> Recently Listed</h2>
                        <router-link :to="{name:'marketplace'}" class="btn btn-dark btn-sm">
                            View All
                        </router-link>
                    </div>
                    <div class="d-flex space-x-10">
                        <span class="color_text txt_sm" style="min-width: max-content;">
                            FILTER BY: </span>
                        <ul class="menu_categories space-x-20">
                            <li class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch1" checked=""><label
                                    for="switch1">Toggle</label>
                                <span> Has list price </span>
                            </li>
                            <li class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch2"><label
                                    for="switch2">Toggle</label>
                                <span> Has open offer </span>
                            </li>
                            <li class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch3"><label
                                    for="switch3">Toggle</label>
                                <span> Has sold </span>
                            </li>
                        </ul>
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
                                        :item-id="item._id"
                                        :item-name="item.name"
                                        :itemMinBid="item.minBid"
                                        :card-image="item.image"
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

        <div class="mt-50">
            <div class="container">
                <div class="section__head">
                    <div
                        class="d-flex
                            flex-md-wrap
                            justify-content-between
                            align-items-center
                            mb-20">
                        <h2 class="section__title">Top artworks</h2><!--
                        <div class="dropdown">
                            <button
                                    class="btn btn-dark btn-sm dropdown-toggle"
                                    type="button"

                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                Recent Active
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>-->
                    </div><!--
                    <div class="d-flex align-items-center space-x-10">
                        <span class="color_text txt_sm" style="min-width: max-content">
                            FILTER BY:
                        </span>
                        <ul class="menu_categories space-x-20">
                            <li class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch5"
                                /><label
                                    for="switch5">Toggle</label>
                                <span> Has list price </span>
                            </li>
                            <li class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch6" checked
                                /><label
                                    for="switch6">Toggle</label>
                                <span> Has open offer </span>
                            </li>
                            <li class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch7"
                                /><label
                                    for="switch7">Toggle</label>
                                <span> Owned by creator </span>
                            </li>
                            <li class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch8"
                                /><label
                                    for="switch8">Toggle</label>
                                <span> Has sold </span>
                            </li>
                        </ul>
                    </div>-->
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card__item three">
                            <div class="card_body space-y-10">
                                <!-- =============== -->
                                <div class="card_head h-auto">
                                    <router-link :to="'item-details'">
                                        <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_2.png') + ')' }"
                                             class="img-box zoom-box">
                                        </div>
                                        <!--                                        <img :src="require('@/assets/img/items/item_4.png')"-->
                                        <!--                                             alt="..."-->
                                        <!--                                        />-->
                                    </router-link>

                                    <a href="#" class="likes space-x-3">
                                        <i class="ri-heart-3-fill"></i>
                                        <span class="txt_sm">23.1k</span>
                                    </a>
                                    <div class="action">
                                        <a
                                                href="#"
                                                class="btn btn-primary btn_card"
                                                data-toggle="modal"
                                                data-target="#popup_bid">
                                            <i class="ri-pie-chart-line color_white"></i>
                                            Place Your Bid
                                        </a>
                                    </div>
                                </div>
                                <!-- =============== -->
                                <h6 class="card_title">
                                    <router-link :to="'item-details'" class="color_black">
                                        Colorful Abstract Painting
                                    </router-link>
                                </h6>

                                <div class="card_footer d-block space-y-10">
                                    <div class="d-flex justify-content-between">
                                        <div class="creators space-x-10">
                                            <div class="avatars -space-x-20">
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                            :src="require('@/assets/img/avatars/avatar_3.png')"
                                                            alt="Avatar"
                                                            class="avatar avatar-sm"
                                                    />
                                                </router-link>
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                            :src="require('@/assets/img/avatars/avatar_2.png')"
                                                            alt="Avatar"
                                                            class="avatar avatar-sm"
                                                    />
                                                </router-link>
                                            </div>
                                            <router-link :to="{name:'profile'}">
                                                <p class="avatars_name txt_sm">@makinzi_jamy...</p>
                                            </router-link>
                                        </div>
                                        <a href="#" class="space-x-3">
                                            <span class="color_green txt_sm">0.001 ETH</span>
                                        </a>
                                    </div>
                                    <div class="hr"></div>
                                    <a href="#" class="d-flex align-items-center
                                space-x-10">
                                        <i class="ri-vip-crown-line"></i>
                                        <p class="color_text txt_sm" style="width:
                                    auto">Highest bid</p>
                                        <span class="color_black txt_sm">0.0022 ETH</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-6" v-for="n in 6 " :key="n">
                                <artwork-card></artwork-card>
                            </div>

                        </div>

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
    import ArtworkCard from "../components/artwork-card";

    export default {
        components: {ArtworkCard, ItemCard},
        async mounted() {
            let box = document.querySelectorAll('.img-box');
            box.forEach(el=>{
                el.style.height=el.offsetWidth*0.75+'px'
            })

            try {
                await this.getItemsOnSale();

                await this.getListCollections();

                this.listUsers = await this.$store.dispatch("user/getAllUsers");
            } catch (error) {/*
                this.$failAlert({
                    text: error,
                });*/
            }
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                carouselItems: [],
                listItemsOnSale: [],
                listColllections: [],
                listUsers: [],
                subscribe: null,
                filterName: "All",
                carousel: [],
            };
        },
        computed: {
        },
        methods: {
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
                        limit: 12,
                        sortBy: "updated_at"
                    }
                );

                const saleItemsSigned = this.listItemsOnSale.filter(
                    (x) => x.isPutOnMarket && x.sellOrder
                );

                for (let index = 0; index < saleItemsSigned.length; index++) {
                    let tmp = Math.floor(index / 4);
                    if (this.carouselItems.length == tmp) {
                        this.carouselItems.push([]);
                    }
                    this.carouselItems[tmp].push(saleItemsSigned[index]);
                }
            },
            async getListCollections() {
                this.listColllections = await this.$store.dispatch(
                    "collection/getAllCollections"
                );

                console.log(this.listColllections.length)
                
                for (let index = 0; index < this.listColllections.length; index++) {
                    let tmp = Math.floor(index / 2);
                    if (this.carousel.length == tmp) {
                        this.carousel.push([]);
                    }
                    this.carousel[tmp].push(this.listColllections[index]);
                }
            },
        },
    }
</script>
