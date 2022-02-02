<template>
    <div>
        <div class="container pb-5">
            <div class="item_details pt-80">
                <div class="row sm:space-y-20">
                    <div class="col-md-6">
                        <div style="background-color:#fff"
                             class="item_img p-1">
                             <div v-lazy-container="{ selector: 'img' }">
                                <img class="img"
                                    :data-src="changeImagePath(item.image)"
                                    :data-loading="loadimage"
                                />
                            </div>
                        </div>
                        <div class="my-3">
                            <div id="accordion" class="my-accordion">
                                <div class="card">
                                    <div class="px-3 py-2" id="headingOne">
                                        <h5 class="mb-0">
                                            <a class="collapsed cursor-pointer" data-toggle="collapse"
                                               data-target="#collapseOne" aria-expanded="true"
                                               aria-controls="collapseOne">
                                                About Items
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show"
                                         aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            {{ item.description }}
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="px-3 py-2" id="headingTwo">
                                        <h5 class="mb-0">
                                            <a class="collapsed cursor-pointer"
                                               data-toggle="collapse" data-target="#collapseTwo"
                                               aria-expanded="false" aria-controls="collapseTwo">
                                                Chain Info
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordion">
                                        <div class="card-body">
                                            <div class="row-detail">
                                                <span class="row-left">Collection</span>
                                                <span class="row-right">{{ collectionItems.name }}</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Network</span>
                                                <span class="row-right">Rinkeby Testnet</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Chain ID</span>
                                                <span class="row-right">3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="px-3 py-2" id="headingThree">
                                        <h5 class="mb-0">
                                            <a class="collapsed  cursor-pointer"
                                               data-toggle="collapse" data-target="#collapseThree"
                                               aria-expanded="false" aria-controls="collapseThree">
                                                Royality
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse"
                                         aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            <div class="row-detail">
                                                <span class="row-left">Royalty</span>
                                                <span class="row-right">{{ collectionItems.royalty }} %</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Recipient</span>
                                                <span class="row-right">{{ collectionItems.fee_recipient }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="space-y-20">
                            <div class="d-flex justify-content-between flex-wrap">
                                <h3><span style="color:#f8f810">{{ item.name }}</span></h3>
                                <div class="space-x-10 d-flex align-items-center">
                                    <!--<p>1 of {{ item.total_quantity }}</p>-->
                                    <a href="#" @click="setFavorite" class="likes space-x-3">
                                        <i title="UnFavorite" v-if="this.isfavorited" class="ri-heart-3-fill red"></i>
                                        <i  title="Favorite" v-if="!this.isfavorited" class="ri-heart-3-fill"></i>
                                        <span class="txt_sm">{{ totalfavoriteCount }}</span>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between flex-wrap">
                                <div class="d-flex space-x-20">
                                    <a href="" v-if="item.owner == metaMaskAddress && item.is_on_market == 0" 
                                        class="btn btn-primary btn-lg" 
                                        data-toggle="modal"
                                        data-target="#popup_buy"
                                        @click="sellItem" > Sell</a>
                                    <a href="" v-else-if="item.owner == metaMaskAddress && item.is_on_market == 1"
                                        class="btn btn-primary btn-lg" 
                                        data-toggle="modal"
                                        data-target="#popup_buy"
                                        @click="editItem"> Edit Item</a>
                                    <a href="" v-else-if="item.is_on_market && item.is_market_option == 1"
                                        class="btn btn-primary btn-lg" 
                                        data-toggle="modal"
                                        data-target="#popup_buy"
                                        @click="buyItem"> Buy Now</a>
                                    <a href="" v-else-if="item.is_on_market && !item.is_market_option == 2"
                                        class="btn btn-grad btn-lg" 
                                        data-toggle="modal"
                                        data-target="#popup_bid"
                                        > Place a bid</a>
                                </div>
                                <div class="space-x-10 d-flex align-items-center">
                                    <div class="share">
                                        <div class="icon">
                                            <a href="#"> <i class="ri-share-line"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown__popup">
                                            <ul class="space-y-10">
                                                <li>
                                                    <a href=""> 
                                                        <i class="ri-facebook-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href=""> 
                                                        <i class="ri-messenger-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href=""> 
                                                        <i class="ri-whatsapp-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href=""> 
                                                        <i class="ri-youtube-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="more">
                                        <div class="icon">
                                            <a href="#"> <i class="ri-more-fill"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown__popup">
                                            <ul class="space-y-10">
                                                <li>
                                                    <a href="#" class="space-x-10 d-flex"
                                                       data-toggle="modal"
                                                       data-target="#popup_report">
                                                        <i class="ri-flag-line"></i>
                                                        <span> Report</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="numbers">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="space-y-5">
                                            <p class="color_text">Minimum bid</p>
                                            <h4>{{ item.min_bid || 0 }}
                                                <span class="txt_sm color_text">
                                                    ETH / ($ {{ convertToUSD(item.min_bid) }}
                                                    )
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="space-y-5">
                                            <p class="color_text">Countdown</p>
                                            <div class="d-flex countdown_item align-items-center">
                                                <div class="item">
                                                    <div class="number hours">22</div>
                                                </div>
                                                <div class="dots">:</div>
                                                <div class="item">
                                                    <div class="number minutes">04</div>
                                                </div>
                                                <div class="dots">:</div>
                                                <div class="item">
                                                    <div class="number seconds">35</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <div class="space-y-20">
                                    <div class="d-flex justify-content-between mb-30_reset">
                                        <ul class="nav nav-tabs d-flex space-x-10 mb-30" role="tablist">
                                            <li class="nav-item">
                                                <a
                                                    :class="{'active':tab===1}"
                                                    class="btn btn-black btn-sm"
                                                    @click="tab=1"
                                                    >
                                                Details</a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    :class="{'active':tab===2}"
                                                    class="btn btn-black btn-sm"
                                                    @click="tab=2"
                                                    >
                                                Bids</a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    :class="{'active':tab===3}"
                                                    class="btn btn-black btn-sm"
                                                    @click="tab=3"
                                                    >
                                                History</a>
                                            </li>
                                        </ul>
                                        <div class="dropdown d-none d-sm-block">
                                            <button class="btn-white btn-sm dropdown-toggle" type="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                Recent Active
                                            </button>
                                            <div class="dropdown-menu">
                                                <div class="links ml-10 mr-10">
                                                    <a href="">
                                                        <span class="p-2">Action</span>
                                                    </a>
                                                </div>
                                                <div class="links ml-10 mr-10">
                                                    <a href="">
                                                        <span class="p-2">Another action</span>
                                                    </a>
                                                </div>
                                                <div class="links ml-10 mr-10">
                                                    <a href="">
                                                        <span class="p-2">Something else</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hr"></div>
                                    <div class="tab-content">
                                        <div :class="{'active':tab===1}" v-if="tab===1" class="tab-pane active" id="tabs-1" role="tabpanel">
                                            <div class="row-detail">
                                                <span class="row-left">Contract Address</span>
                                                <span class="row-right">
                                                    <a href="#" @click="redirectURL" target="_blank">
                                                        {{this.collectionItems.address}}
                                                    </a>
                                                </span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Token ID</span>
                                                <span class="row-right">{{ item.token_id }}</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">img_back</span>
                                                <span class="row-right">{{ item.image }}</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Created</span>
                                                <span class="row-right">{{ item.created_at }}</span>
                                            </div>
                                        </div>
                                        <div :class="{'active':tab===2}" v-if="tab===2" class="tab-pane" id="tabs-2"
                                             role="tabpanel">
                                            <p>No active bids yet. Be the first to make a bid!</p>
                                        </div>
                                        <div :class="{'active':tab===3}" v-if="tab===3" class="tab-pane space-y-20" id="tabs-3"
                                             role="tabpanel">
                                            <div class="creator_item creator_card space-x-10">
                                                <div class="avatars space-x-10">
                                                    <div class="media">
                                                        <div class="badge">
                                                            <img
                                                                :src="require('@/assets/img/icons/Badge.svg')"
                                                                alt="">
                                                        </div>
                                                        <router-link :to="{name:'profile'}">
                                                            <img
                                                                :src="require('@/assets/img/avatars/avatar_1.png')"
                                                                alt="Avatar"
                                                                class="avatar avatar-md">
                                                        </router-link>
                                                    </div>
                                                    <div>
                                                        <p class="color_black">Bid accepted 
                                                            <span class="color_brand">1 ETH</span> by
                                                            <router-link class="color_black txt _bold" :to="{name:'profile'}">
                                                                ayoub
                                                            </router-link>
                                                        </p>
                                                        <span class="date color_text">28/06/2021, 12:08</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="creator_item creator_card space-x-10">
                                                <div class="avatars space-x-10">
                                                    <div class="media">
                                                        <div class="badge">
                                                            <img
                                                                :src="require('@/assets/img/icons/Badge.svg')"
                                                                alt="">
                                                        </div>
                                                        <router-link :to="{name:'profile'}">
                                                            <img
                                                                :src="require('@/assets/img/avatars/avatar_2.png')"
                                                                alt="Avatar"
                                                                class="avatar avatar-md">
                                                        </router-link>
                                                    </div>
                                                    <div>
                                                        <p class="color_black">Bid accepted 
                                                            <span class="color_brand">3 ETH</span> by
                                                            <router-link class="color_black txt _bold" :to="{name:'profile'}">
                                                                monir
                                                            </router-link>
                                                        </p>
                                                        <span class="date color_text">22/05/2021,12:08</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hr2"></div>
                            <div class="creators">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="avatars space-x-5">
                                            <div><p>Owner</p></div>
                                            <div class="media">
                                                <router-link :to="'/profile/' + item.owner">
                                                    <div v-lazy-container="{ selector: 'img' }">
                                                        <img class="avatar avatar-sm" 
                                                            :data-src="viewOwner.avatar || avatarimage" 
                                                            :data-loading="loadimage"/>
                                                        <span class="avatars_name color_black ml-1">{{ showWalletSeller(item.owner) }}</span>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="avatars space-x-5">
                                            <div><p>Creator</p></div>
                                            <div class="media">
                                                <router-link :to="'/profile/' + item.created_by">
                                                    <div v-lazy-container="{ selector: 'img' }">
                                                        <img class="avatar avatar-sm" 
                                                            :data-src="viewCreator.avatar || avatarimage" 
                                                            :data-loading="loadimage"/>
                                                        <span class="avatars_name color_black ml-1">{{ showWalletSeller(item.created_by) }}</span>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-50">
                <div class="avatars space-x-5">
                    <h3>More from this collection &nbsp;&nbsp;&nbsp;</h3>
                    <div class="media">
                        <router-link :to="'/marketplace/' + this.item.collection_id">
                            <div v-lazy-container="{ selector: 'img' }">
                                <img class="loadimg avatar avatar-sm" :data-src="collectionItems.image" :data-loading="loadimage"/>
                                <span class="avatars_name color_green ml-1">{{ collectionItems.name }}</span>
                                <span class="color_green text-sm"> ( {{this.collectionItems.count_items - 1}} items )</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-if="listOtherItemsFiltered && listOtherItemsFiltered.length - 1 > 0" class="row mb-30_reset">
                <div
                    v-for="(item1, i) in listOtherItemsFiltered"
                    :key="i"
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                    <item-card
                        text-center
                        class="mt-3"
                        card-plain
                        :item-id="item1.id"
                        :item-name="item1.name"
                        :itemMinBid="item1.minBid"
                        :card-image="changeImagePath(item1.image)"
                        :item-favoritecount="item1.favorite_count"
                    >
                    </item-card>
                </div>
            </div>
            <div class="section__head mt-5 text-align:center">
                <div 
                    class="btn btn-white btn-sm d-flex align-items-center mx-auto" 
                    @click="loadNextItems"
                    v-if="this.isShowMore"
                    >
                        Show More
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ItemCard from "../components/item-card";
    import Web3 from "web3";
    import ExchangeV1 from "../assets/abis/ExchangeV1.json";
    import RaribleToken from "../assets/abis/RaribleToken.json";
    import Web3Ultils from "../utils/Web3Ultils";
    export default {
        components: {ItemCard},
        data() {
            return {
                tab: 1,
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_4.png"),
                item: {},
                listOtherItems: [],
                collectionItems: {},
                carouselItems: [],
                listItems: [],
                selectColor: "rose",
                selectSize: "small",
                viewCreator: {},
                viewOwner: {},
                filterData: {
                    skip: 0,
                    limit: 12,
                    keysearch: null,
                },
                isShowMore: true,
                favorite: false,
                favoriteCount: 0,
                isfavorited: false
                /*
                tableData: [
                    {
                    id: 1,
                    name: "Dakota Rice",
                    salary: "$36.738",
                    country: "Niger",
                    city: "Oud-Turnhout",
                    icon1: "person",
                    icon2: "edit",
                    icon3: "close",
                    },
                    {
                    id: 2,
                    name: "Minerva Hooper",
                    salary: "$23,789",
                    country: "Curaçao",
                    city: "Sinaai-Waas",
                    icon1: "person",
                    icon2: "edit",
                    icon3: "close",
                    },
                    {
                    id: 3,
                    name: "Sage Rodriguez",
                    salary: "$56,142",
                    country: "Netherlands",
                    city: "Baileux",
                    icon1: "person",
                    icon2: "edit",
                    icon3: "close",
                    },
                    {
                    id: 4,
                    name: "Philip Chaney",
                    salary: "$38,735",
                    country: "Korea, South",
                    city: "Overland Park",
                    icon1: "person",
                    icon2: "edit",
                    icon3: "close",
                    },
                    {
                    id: 5,
                    name: "Doris Greene",
                    salary: "$63,542",
                    country: "Malawi",
                    city: "Feldkirchen in Kärnten",
                    icon1: "person",
                    icon2: "edit",
                    icon3: "close",
                    },
                ],
                data: [
                    {
                    name: "Some Data",
                    chartType: "bar",
                    values: [25, 40, 30, 35, 8, 52, 17, -4],
                    },
                    {
                    name: "Another Set",
                    chartType: "bar",
                    values: [25, 50, -10, 15, 18, 32, 27, 14],
                    },
                    {
                    name: "Yet Another",
                    chartType: "line",
                    values: [15, 20, -3, -15, 58, 12, -17, 37],
                    },
                ],*/
            };
        },
        async mounted() {
            this.reload();
//            await this.$store.dispatch("user/getETHRate");
        },
        computed: {
            itemId() {
                return this.$route.params.id;
            },
            ETHRate() {
                return this.$store.state.user.ETHRate;
            },
            userData() {
                return this.$store.state.user?.information;
            },
            metaMaskAddress() {
                return this.userData?.address;
            },
            listOtherItemsFiltered() {
                return this.listOtherItems?.filter((token) => {
                    return token.id != this.itemId
                })
            },
            totalfavoriteCount() {
                return this.favoriteCount
            },
            favoriteStatus() {
                return this.isfavorited
            }
        },
        watch: {
            async itemId(newValue, oldValue) {
                if (newValue && newValue.length > 0) {
                    this.reload();
                    await this.$store.dispatch("user/getETHRate");
                }
            },
        },
        methods: {
            changeImagePath(name) {
                if (name == null)
                    return null;
                if (name.substring(0, 7) == "ipfs://") {
                    let url = "https://gateway.pinata.cloud/ipfs/" + name.substring(7, name.length);
                    return url;
                }
                else
                    return name;
            },
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
                        wallet.substring(0, 6) +
                        "..." +
                        wallet.substring(wallet.length - 8, wallet.length)
                    );
            },
            shadowImageBlog(image) {
                return {
                    backgroundImage: `url(${image})`,
                    opacity: 1,
                };
            },
            async reload() {
                this.$loading(true);
                try {
                    this.item = await this.getItem();
                    let creators;
                    creators = await this.$store.dispatch("user/getUserProfileByAddress",
                        { keysearch: this.item.created_by }
                    );

                    this.viewCreator = creators[0];

                    if (this.viewCreator == null)
                    {
                        this.viewCreator = {};
                    }

                    let owners = await this.$store.dispatch("user/getUserProfileByAddress",
                        { keysearch: this.item.owner }
                    );

                    this.viewOwner = owners[0];

                    if (this.viewOwner == null)
                        this.viewOwner = {};
                } 
                catch (error) {
                    this.$loading(false);
                    this.$store.dispatch("global/showMessage",
                        { 
                            kind:'show_error',
                            content: error
                        }
                    );
                }
            
                try {
                    this.listOtherItems = await this.$store.dispatch("item/getItemsByCollection",
                        {
                            skip: 0,
                            limit: this.filterData.limit,
                            keysearch: this.item.collection_id,
                        }
                    );

                    if (this.listOtherItems.length == this.filterData.limit) {
                        this.filterData.skip += this.listOtherItems.length;
                    } else {
                        this.isShowMore = false;
                    }

                    this.collectionItems = await this.$store.dispatch(
                        "collection/getDetailCollection", 
                        {
                            keysearch: this.item.collection_id,
                        }
                    );
                } catch (error) {
                    this.$loading(false);
                    this.$store.dispatch("global/showMessage",
                        { 
                            kind:'show_error',
                            content: error
                        }
                    );
                }

//               await this.getFavorite();

                this.$loading(false);
            },
            getItem() {
                return this.$store.dispatch("item/getDetailItem", 
                    { id: this.itemId }
                );
            },
            async getFavorite() {
                try {
                    this.favoriteCount = await this.$store.dispatch("activity/getFavoriteCount",
                        {
                            collection_id: this.item.collection_id,
                            token_id: this.item.token_id
                        }
                    );

                    let value = await this.$store.dispatch("activity/getFavoriteCount",
                        {
                            collection_id: this.item.collection_id,
                            token_id: this.item.token_id,
                            wallet_address: this.metaMaskAddress
                        }
                    );

                    if (value > 0)
                        this.isfavorited = true;
                    else
                        this.isfavorited = false;
                } catch (error) {
                    this.$store.dispatch("global/showMessage",
                        { 
                            kind:'show_error',
                            content: error
                        }
                    );
                }
            },
            async loadNextItems() {
                try {
                    this.filterData.keysearch = this.item.collection_id;

                    let newData = await this.$store.dispatch("item/getItemsByCollection",  
                        this.filterData
                    );

                    if (newData && newData.length > 0) {
                        this.listOtherItems.push.apply(this.listOtherItems, newData);

                        if (newData.length == this.filterData.limit) {
                            this.filterData.skip += newData.length;
                        } else {
                            this.isShowMore = false;
                        }
                    }
                    else
                        this.isShowMore = false;

                } catch (error) {
                    this.$store.dispatch("global/showMessage",
                        { 
                            kind:'show_error',
                            content: error
                        }
                    );
                }
            },
            async sellItem() {
                if (this.userData) {
                    this.$loading(true)
                    try {
                        await this.$store.dispatch("item/sellItem", {id:this.itemId,
                                                                     is_on_market: 1});
                        this.item.is_on_market = 1;
                        this.$loading(false);
                    } catch (error) {
                        this.$loading(false);
                        this.$store.dispatch("global/showMessage",
                            { 
                                kind:'show_error',
                                content: error
                            }
                        );
                    }
                } else {
                    this.$router.push("/connect-wallet");
                }
            },
            convertToUSD(value) {
                let eth = value || 0;
                let price = (eth * this.ETHRate).toString();

                if (price.length < 10)
                    return price
                else
                    return price.substr(0, 10);
            },
            editItem() {
                this.$router.push("/editItem/" + this.itemId);
            },
            async buyItem() {
                await this.$store.dispatch("global/setLoadingTitle", "Buy Item");
                this.$loadingModal(true);
                try {
                    const isBuyItem = await Web3Ultils.buyItem(
                        this.item,
                        this.metaMaskAddress
                    );

                    if (isBuyItem) {
                        this.$store.dispatch("global/showMessage",
                            {   kind:'show_success',
                                content: 'Buy Item Successfull'
                            }
                        );
 //                     this.$router.push("/user-profile");
                    }
                } 
                catch (error) {
                    this.$store.dispatch("global/showMessage",
                        { 
                            kind:'show_error',
                            content: error
                        }
                    );
                }

                this.$loadingModal(false);
            },
            redirectURL()
            {
                let url = "https://rinkeby.etherscan.io/address/" + this.collectionItems.address;
                window.open(url, '_blank');
            },
            setFavorite()
            {
                if (!this.metaMaskAddress)
                    return;

                if (this.isfavorited){
                    let value = this.$store.dispatch("activity/deleteFavorite",
                        {
                            collection_id: this.item.collection_id,
                            token_id: this.item.token_id,
                            wallet_address: this.metaMaskAddress
                        }
                    );

                    this.isfavorited = false;
                    this.favoriteCount--;
                }
                else {
                    this.$store.dispatch("activity/insertFavorite",
                        {
                            collection_id: this.item.collection_id,
                            token_id: this.item.token_id,
                            wallet_address: this.metaMaskAddress
                        }
                    );

                    this.isfavorited = true;
                    this.favoriteCount++;
                }
            }
        },
    }
</script>

<style scoped>

    .img {
        width:100% !important;
        max-height: 600px;
        text-align: center;
        border-radius: 12px;
    }

    .md-card-header {
        text-align-last: center;
    }

    .row-detail {
        width: 100%;
        display: flow-root;
        padding: 5px;
    }

    .row-left {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }

    .row-right {
        float: right;
        font-weight: 500;
        font-size: 14px;
        width: 350px;
        word-wrap: break-word;
    }

    i.red {
        color: #ff6871;
    }
</style>
