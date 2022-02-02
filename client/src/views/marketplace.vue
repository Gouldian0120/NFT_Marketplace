<template>
    <div>
        <div class="hero_marketplace bg_white">
            <div class="container">
                <h1 class="text-center">NFT Marketplace</h1>
            </div>
        </div>
        <div class="bg_white border-b py-20">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <ul class="menu_categories space-x-10">
                        <li class="btn btn-white btn-sm"
                            :class="'All' == filterName ? ' md-behance' : 'md-button-filter'"
                            @click="
                                () => {
                                filterName = 'All';
                                getItems();
                                }
                            ">
                                <i class="ri-file-search-line"></i>
                                <span>All</span>
                        </li>
                        <li class="btn btn-white btn-sm"
                            v-for="(category, i) in listCategory"
                            :key="i"
                            
                            :class="
                                category.name == filterName
                                ? ' md-behance'
                                : 'md-button-filter'
                            "
                            @click="
                                () => {
                                filterName = category.name;
                                categoryID = category.id;
                                getItems();
                                }
                            "
                            >
                                <i :class="iconlist[i]"></i>
                                <span>{{ category.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="seaction mt-20">
                <div class="section__head">
                    <h2 class="section__title mb-20"> Artworks</h2>
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-auto">
                            <div class="d-flex space-x-10 align-items-center">
                                <span class="color_text txt_sm" style="min-width:
                                    max-content;"> FILTER BY : </span>   
                                <ul class="menu_categories space-x-20">
                                    <li class="d-flex space-x-10 switch_item">
                                        <input type="checkbox" id="switch1"/><label
                                            for="switch1">Toggle</label>
                                        <span> Has list price </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">
                                        <input type="checkbox" id="switch2" checked/><label
                                            for="switch2">Toggle</label>
                                        <span> Has open offer </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch3"/><label
                                            for="switch3">Toggle</label>
                                        <span> Owned by creator </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch4"/><label
                                            for="switch4">Toggle</label>
                                        <span> Has sold </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-auto">
                            <div class="d-flex space-x-10 align-items-center sm:mt-20">
                                <span class="color_text txt_sm"> SORT BY : </span>
                                <div class="dropdown">
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
                        </div>
                    </div>
                </div>
                <div v-if="this.collectionid != null && this.collectionitem != null">
                    <span class="color_text txt_sm" > COLLECTION : </span> 
                    <span class="collection_bar ml-20" >
                        <img width="25px" height="25px"
                            :src="this.collectionitem.image">
                        <span class="color_green p-10 txt_sm mr-20">{{this.collectionitem.name}}</span>
                        <img width="23px" height="23px" 
                            :src="require('@/assets/img/close.svg')" 
                            @click="getAll()" class="cursor-pointer"
                            alt="">
                    </span>
                </div>
                <div v-if="listItems && listItems.length > 0" class="row mt-10 mb-30_reset">
                    <div
                        v-for="(item, i) in listItems"
                        :key="i"
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                    >
                        <item-card
                            text-center
                            class="mt-3"
                            card-plain
                            :item-id="item.id"
                            :item-name="item.name"
                            :item-minbid="item.min_bid"
                            :card-image="changeImagePath(item.image)"
                            :item-creator="item.created_by"
                            :item-owner="item.owner"
                            :item-isonmarket="item.is_on_market"
                            :item-collectionid="item.collection_id"
                            :item-tokenid="item.token_id"
                            :item-favoritecount="item.favorite_count"
                        >
                        </item-card>
                    </div>
                </div>
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
</template>

<script>
    import ItemCard from "../components/item-card";
    
    export default {
        name: "merketplace",
        components: {ItemCard},
        data() {
            return {
                listItems: [],
                filterName: "All",
                filterData: {
                    skip: 0,
                    limit: 16,
                    keysearch: null,
                },
                categoryID: null,
                filters: {},
                collectionitem: null,
                isShowMore: true,
                iconlist: [
                    "ri-brush-line",
                    "ri-camera-line",
                    "ri-gamepad-line",
                    "ri-global-line",
                    "ri-music-line",
                    "ri-emotion-laugh-line",
                    "ri-global-line",
                    "ri-run-line"
                ]
            };
        },
        async mounted() {
            this.$loading(true);
            try {
                await this.getCategories();
                await this.getItems();
            } catch (error) {/*
                this.$failAlert({
                    text: error,
                });*/
            }
            this.$loading(false);
        },
        computed: {
            listCategory() {
                return this.$store.state.category.categories;
            },
            collectionid() {
                return this.$route.params.collectionid;
            },
        },
        methods: {
            changeImagePath(name) {
                if (name.substring(0, 7) == "ipfs://") {
                    let url = "https://gateway.pinata.cloud/ipfs/" + name.substring(7, name.length);
                    return url;
                }
                else
                    return name;
            },
            async loadNextItems() {
                try {
                    this.filterData.keysearch = this.categoryID;

                    let newData = await this.$store.dispatch(
                        this.filterName == "All"
                            ? "item/getAllItems"
                            : "item/getItemsByCategory",
                        this.filterData
                    );
                    if (newData && newData.length > 0) {
                        this.listItems.push.apply(this.listItems, newData);

                        if (newData.length == this.filterData.limit) {
                            this.filterData.skip += newData.length;
                        } else {
                            this.isShowMore = false;
                        }
                    }
                    else
                        this.isShowMore = false;
                } catch (error) {
                    console.log(121212)
                }
            },
            async getItems() {
                this.isShowMore = true;
                if (this.collectionid)
                {
                    this.collectionitem = await this.getCollectionItem();

                    this.listItems = await this.$store.dispatch("item/getItemsByCollection",
                        {
                            skip: 0,
                            limit: this.filterData.limit,
                            keysearch: this.collectionid,
                        }
                    );
                }
                else
                {
                    this.listItems = await this.$store.dispatch(
                        this.filterName == "All"
                                ? "item/getAllItems"
                                : "item/getItemsByCategory",
                        {
                            skip: 0,
                            limit: this.filterData.limit,
                            keysearch: this.categoryID,
                        }
                    );
                }

                if (this.listItems.length == this.filterData.limit) {
                    this.filterData.skip += this.listItems.length;
                } else {
                    this.isShowMore = false;
                }
            },
            async getCategories() {
                await this.$store.dispatch("category/getCategories");
            },
            async getCollectionItem() {
                return this.$store.dispatch("collection/getDetailCollection", 
                    { keysearch: this.collectionid }
                );
            },
            async getAll() {
                this.$loading(true);
                this.isShowMore = true;
                this.listItems = await this.$store.dispatch(
                    "item/getAllItems",
                    {
                        skip: 0,
                        limit: this.filterData.limit,
                        keysearch: this.categoryID,
                    }
                );

                if (this.listItems.length == this.filterData.limit) {
                    this.filterData.skip += this.listItems.length;
                } else {
                    this.isShowMore = false;
                }

                this.$loading(false);
                this.$router.push("/marketplace");
            }
        },
    }
</script>

<style scoped>
    .collection_bar {
        border:1px solid #fff; 
        border-radius:5px; 
        padding:10px
    }

    .category {
        border:solid 1px #345a77; 
        font-size:12px;
    }
</style>