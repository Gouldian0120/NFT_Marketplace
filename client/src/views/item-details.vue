<template>
    <div>
        <div class="container pb-5">
            <a href="/" class="btn btn-white btn-sm my-40">
                Back to home
            </a>
            <div class="item_details">
                <div class="row sm:space-y-20">
                    <div class="col-md-6">
                        <div v-lazy-container="{ selector: 'img' }" class="img-box item_img">
                            <img class="img"
                                :data-src="item.image"
                                :data-loading="loadimage"
                            />
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
                                                <span class="row-right">{{ item.collection[0].name }}</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Network</span>
                                                <span class="row-right">Ropsten Testnet</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Chain ID</span>
                                                <span class="row-right">4</span>
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
                                                <span class="row-right">{{ item.royalties / 100 }}%</span>
                                            </div>
                                            <div class="row-detail">
                                                <span class="row-left">Recipient</span>
                                                <span class="row-right">0xA9a12a373Ac3ddcF4Ab52b7c9bFb9107f4AfA91e</span>
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
                                <h3>{{ item.name }}</h3>
                                <div class="space-x-10 d-flex align-items-center">
                                    <p>1 of {{ item.total_quantity }}</p>
                                    <a href="#" class="likes space-x-3">
                                        <i class="ri-heart-3-fill"></i>
                                        <span class="txt_sm">2.1k</span>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between flex-wrap">
                                <div class="d-flex space-x-20">
                                <a href="" class="btn btn-primary btn-lg" data-toggle="modal"
                                   data-target="#popup_buy"> Buy Now</a>
                                <a href="" class="btn btn-grad btn-lg" data-toggle="modal"
                                   data-target="#popup_bid"> Place bid</a>
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
                                                    <a href=""> <i
                                                        class="ri-facebook-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href=""> <i
                                                        class="ri-messenger-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href=""> <i
                                                        class="ri-whatsapp-line"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href=""> <i
                                                        class="ri-youtube-line"></i>
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
                                            <h4>{{ item.minBid || 0 }}<span class="txt_sm color_text">
                                            ETH/ ($ {{ convertToUSD(item.minBid) }})</span></h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="space-y-5">
                                            <p class="color_text">countdown</p>
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
                                                    class="btn btn-white btn-sm active"
                                                    @click="tab=1"
                                                    >
                                                Details</a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    :class="{'active':tab===2}"
                                                    class="btn btn-white btn-sm"
                                                    @click="tab=2"
                                                    >
                                                Bids</a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    :class="{'active':tab===3}"
                                                    class="btn btn-white btn-sm"
                                                    @click="tab=3"
                                                    >
                                                History</a>
                                            </li>
                                        </ul>
                                       
                                        <div class="dropdown d-none d-sm-block">
                                            <button class="btn btn-white btn-sm dropdown-toggle" type="button"
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
                                        </div>
                                    </div>
                                    <div class="hr"></div>
                                    <div class="tab-content">
                                        <div :class="{'active':tab===1}" v-if="tab===1" class="tab-pane active" id="tabs-1" role="tabpanel">
                                            <div class="row-detail">
                                                <span class="row-left">Contract Address</span>
                                                <span class="row-right">{{ item._id }}</span>
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
                                            <div>Owner</div>
                                            <div class="media">
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                        :src="require('@/assets/img/avatars/avatar_3.png')"
                                                        alt="Avatar" class="avatar avatar-sm">
                                                </router-link>
                                            </div>
                                            <div>
                                                <router-link :to="{name:'profile'}">
                                                    <p class="avatars_name color_black">{{ showShortName(item.owner) }}</p>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="avatars space-x-5">
                                            <div>Creator</div>
                                            <div class="media">
                                                <div class="badge">
                                                    <img class="badge"
                                                        :src="require('@/assets/img/icons/Badge.svg')"
                                                        alt="">
                                                </div>
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                        :src="require('@/assets/img/avatars/avatar_2.png')"
                                                        alt="Avatar" class="avatar avatar-sm">
                                                </router-link>
                                            </div>
                                            <div>
                                                <router-link :to="{name:'profile'}">
                                                    <p class="avatars_name color_black">{{ showShortName(item.creator) }}</p>
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
        </div>
        <div>
            <div class="container pt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-7 order-md-0 order-1">
                        <div class="profile__sidebar">
                            <div class="space-y-40">
                                <div class="space-y-10">
                                    <h5>About me</h5>
                                    <div class="box space-y-20">
                                        <p>
                                            I make art with the simple goal of giving you
                                            something
                                            pleasing to look at for a few seconds.
                                        </p>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="txt_sm color_text">Collections</span>
                                                <h4>105</h4>
                                            </div>
                                            <div class="col-6">
                                                <span class="txt_sm color_text">Creations</span>
                                                <h4>406</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-10">
                                    <h5>Follow me</h5>
                                    <div class="box">
                                        <ul class="social_profile space-y-10 overflow-hidden">
                                            <li>
                                                <a href="#">
                                                    <i class="ri-facebook-line"></i>
                                                    <span class="color_text">facebook/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-messenger-line"></i>
                                                    <span class="color_text"> messenger/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-whatsapp-line"></i>
                                                    <span class="color_text"> whatsapp/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-youtube-line"></i>
                                                    <span class="color_text">youtube/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p class="text-center txt_sm mt-20 color_text">Since 2021</p>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12 order-md-1 order-0">
                        <div class="profile__content">
                            <div class="d-flex justify-content-between">
                                <div class="space-x-10">
                                    <div class="d-flex justify-content-between">
                                        <ul class="nav nav-tabs d-flex space-x-10 mb-30">
                                            <li class="nav-item">
                                                <a :class="{'active':tab===1}"
                                                   class="btn btn-white btn-sm"
                                                   @click="tab=1">
                                                   Creations
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a :class="{'active':tab===2}"
                                                   class="btn btn-white btn-sm"
                                                   @click="tab=2">
                                                   Collections
                                                </a>
                                            </li>
                                        </ul>
                                        <!-- Tab panes -->
                                        <div class="dropdown d-none d-sm-block">
                                            <button
                                                class="btn btn-white btn-sm dropdown-toggle"
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
                                        </div>
                                    </div>
                                    <div>
                                        <div :class="{'active':tab===1}" v-if="tab===1">
                                            <div class="row mb-30_reset">
                                                <div class="col-xl-4 col-lg-6 col-md-6" v-for="n in 6" :key="n">
                                                    <job-card></job-card>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="tab===2" :class="{'active':tab===2}">
                                            <div class="row justify-content-center mb-30_reset">
                                                <div class="col-lg-6 col-md-6 col-sm-8" v-for="n in 6" :key="n">
                                                    <collection-card></collection-card>
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
    </div>
</template>

<script>

    import JobCard from "../components/job-card";
    import CollectionCard from "../components/collection-card";

    export default {
        data() {
            return {
                tab: 1,
                loadimage: require("@/assets/img/loading.gif"),
                item: null,
                carouselItems: [],
                listItems: [],
                selectColor: "rose",
                selectSize: "small",/*
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
            let box = document.querySelectorAll('.img-box');
            box.forEach(el => {
                el.style.height = el.offsetWidth * 0.75 + 'px'
            })

            try {
                this.item = await this.getItem();
            } 
            catch (error) {
                console.log("error11")
            }
            
            try {
                this.listItems = await this.$store.dispatch("item/getAllItems", {
                    skip: Math.floor(Math.random() * 100),
                    limit: 12,
                });
                for (let index = 0; index < this.listItems.length; index++) {
                    let tmp = Math.floor(index / 4);
                    if (this.carouselItems.length == tmp) {
                        this.carouselItems.push([]);
                    }
                    this.carouselItems[tmp].push(this.listItems[index]);
                }
            } catch (error) {
                console.log("error22")
            }

            await this.$store.dispatch("user/getETHRate");
        },
        components: {CollectionCard, JobCard},
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
                return this.userData?.wallet_address;
            },
        },
        watch: {
            async itemId(newValue, oldValue) {
            if (newValue && newValue.length > 0) {
                this.item = await this.getItem();
            }
            },
        },
        methods: {
            showShortName(name) {
                return (
                name.substring(0, 6) +
                "..." +
                name.substring(name.length - 8, name.length)
                );
            },
            shadowImageBlog(image) {
                return {
                backgroundImage: `url(${image})`,
                opacity: 1,
                };
            },
            getItem() {
                return this.$store.dispatch("item/getDetailItem", { id: this.itemId });
            },
            async sellItem() {
                await this.$store.dispatch("global/setLoadingTitle", "Sell Item");
                this.$loadingModal(true);

                try {
                    const result = await this.$store.dispatch(
                        "item/requestMintSignature",
                        this.item.token_id
                    );
    /*
                    const isSellItem = await Web3Ultils.sellItem(
                        result,
                        this.item,
                        this.metaMaskAddress
                    );
                    if (isSellItem) {
                        this.$successAlert({
                        text: "Sell Item Successfull",
                        });
                        this.$router.push("/user-profile");
                    }*/
                } catch (error) {/*
                    this.$failAlert({
                        text: error,
                    });*/
                }

                this.$loadingModal(false);
            },
            convertToUSD(value) {
                let eth = value || 0;
                return eth * this.ETHRate;
            },

            editItem() {
                this.$router.push("/editItem/" + this.itemId);
            },
            async buyItem() {
                await this.$store.dispatch("global/setLoadingTitle", "Buy Item");
                this.$loadingModal(true);
                try {
                    const result = await this.$store.dispatch(
                        "item/requestBuyAsset",
                        this.item.token_id
                    );
    /*
                    const isBuyItem = await Web3Ultils.buyAsset(
                        result,
                        this.item,
                        this.metaMaskAddress
                    );

                    if (isBuyItem) {
                        this.$successAlert({
                        text: "Buy Item Successfull",
                        });
                        this.$router.push("/user-profile");
                    }*/
                } 
                catch (error) {/*
                    this.$failAlert({
                        text: error,
                    });*/
                }

                this.$loadingModal(false);
            },
        },
    }
</script>

<style scoped>
    .img {
        width: 100% !important;
        height: 100% !important;
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
</style>
