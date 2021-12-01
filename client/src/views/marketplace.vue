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
                    <ul class="menu_categories space-x-20">
                        <li>
                            <a href="#" class="color_brand"
                            :class="'All' == filterName ? ' md-behance' : 'md-button-filter'"
                            @click="
                                () => {
                                filterName = 'All';
                                getItems();
                                }
                            ">
                                <button class="btn btn-sm" style="border:solid 1px #345a77"> All </button>
                            </a>
                        </li>
                        <li
                            v-for="(category, i) in listCategory"
                            :key="i"
                            href="javascript:void(0)"
                            :class="
                                category.name == filterName
                                ? ' md-behance'
                                : 'md-button-filter'
                            "
                            @click="
                                () => {
                                filterName = category.name;
                                categoryID = category._id;
                                getItems();
                                }
                            "
                            >
                            <button class="btn btn-sm" style="border:solid 1px #345a77">{{ category.name }}</button>
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
                                    <button class="btn btn-dark btn-sm dropdown-toggle"
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
                        </div>
                    </div>
                </div>
                <div v-if="this.collectionid != null">
                    <span class="color_text txt_sm" > COLLECTION : </span> 
                    <span class="collection_bar ml-20" >
                        <img width="25px" height="25px"
                            :src="this.collectionitem.image">
                        <span class="color_green p-10 txt_sm mr-20">{{this.collectionitem.name}}</span>
                        <img width="23px" height="23px" 
                            :src="require('@/assets/img/close1.svg')" 
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
                            :item-id="item._id"
                            :item-name="item.name"
                            :item-minBid="item.minBid"
                            :card-image="item.image"
                            :item-creator="item.creator"
                            :item-owner="item.owner"
                            :item-isputonmarket="item.isPutOnMarket"
                            :item-sellOrder="item.sellOrder"
                        >
                        </item-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemCard from "../components/item-card";
//  import CollectionCard from "../components/collection-card";
    
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
                    keySearch: null,
                },
                categoryID: null,
                sliders: {
                    rangeSlider: [101, 700],
                },
                filters: {},
                collectionitem: null
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
            newValue(e) {
                this.sliders.rangeSlider[0] = e[0];
                this.sliders.rangeSlider[1] = e[1];
            },
            async loadNextItems() {
                try {
                    this.filterData.keySearch = this.categoryID;
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
                        this.skip = 0;
                    }
                    }
                } catch (error) {
                    console.log(121212)
                }
            },
            async getItems() {

                if (this.collectionid)
                {
                    this.collectionitem = await this.getCollectionItem();
                    this.listItems = this.collectionitem.items;
                }
                else
                {
                    this.listItems = await this.$store.dispatch(
                        this.filterName == "All"
                                ? "item/getAllItems"
                                : "item/getItemsByCategory",
                        {
                            skip: 0,
                            limit: 16,
                            keySearch: this.categoryID,
                        }
                    );
                }

                if (this.listItems.length == this.filterData.limit) {
                    this.filterData.skip += this.listItems.length;
                } else {
                    this.skip = 0;
                }
            },
            async getCategories() {
                await this.$store.dispatch("category/getCategories");
            },
            async getCollectionItem() {
                return this.$store.dispatch("collection/getDetailCollection", { id: this.collectionid });
            },
            async getAll() {
                this.$loading(true);
                this.listItems = await this.$store.dispatch(
                    this.filterName == "All"
                            ? "item/getAllItems"
                            : "item/getItemsByCategory",
                    {
                        skip: 0,
                        limit: 16,
                        keySearch: this.categoryID,
                    }
                );
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
</style>