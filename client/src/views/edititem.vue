<template>
    <div>
        <div class="hero__upload">
            <div class="container">
                <div class="space-y-20">
                    <h2 class="title">Edit Item</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box in__upload mb-120">
                <div class="row">
                    <div class="col-lg-6">
                        <div>
                            <p><span class="nameInput p-20">Image</span></p>
                            <div class="left__part mt-10">
                               <img class="loadimg" v-if="item != null" 
                                    :src="changeImagePath(item.image)" />
                            </div>
                        </div>
                        <div class="space-y-5 mt-40">
                            <span class="nameInput pl-20">Put on Marketplace</span>
                            <div class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch5" v-model="item.is_on_market"/>
                                <label for="switch5"></label>
                            </div>
                        </div>
                        <div class="md-layout" v-if="item.is_on_market">
                            <div
                                class="layout-item size-45"
                                :class="
                                    item.is_market_option == 1
                                    ? 'is-choose'
                                    : 'is-not-choose'
                                "
                            >
                                <info-areas
                                    icon-color="info"
                                    icon="sell"
                                    text-center
                                    @click.native="item.is_market_option = 1"
                                >
                                    <h4 slot="title" class="info-title">
                                    Fixed Price
                                    </h4>
                                </info-areas>
                            </div>
                            <div
                                class="layout-item size-45"
                                :class="
                                    item.is_market_option == 2
                                    ? 'is-choose'
                                    : 'is-not-choose'
                                "
                            >
                                <info-areas
                                    icon-color="success"
                                    icon="access_time"
                                    text-center
                                    @click.native="item.is_market_option = 2"
                                >
                                    <h4 slot="title" class="info-title">
                                    Timed Auction
                                    </h4>
                                </info-areas>
                            </div>
                        </div>
                        <div class="mt-20 space-y-5">
                            <span class="nameInput pl-20">Price</span>
                            <input type="number" class="form-control"
                                    v-model="item.min_bid" min="0"
                                    placeholder="">
                            <p class="pl-20 pb-20">**Bids below this amount won’t be allowed.</p>
                        </div>
                        <div class="mt-20 space-y-10 row"  v-if="item.is_on_market">
                            <div class="col-xl-6">
                                <span class="pl-20">Starting Date</span>
                                <div>
                                    <datepicker  
                                        v-model="item.start_at" format="yyyy-MM-dd">
                                    </datepicker>
                                    <p class="pl-20">
                                        **Any bid placed in the last 10 minutes extends
                                        the auction by 10 minutes.
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-6 m-0">
                                <span class="pl-20">Expiration Date</span>
                                <div>
                                    <select
                                        id="selectExpiration"
                                        v-model="item.expires_at"
                                        name="selectExpiration"
                                        placeholder="Select Expiration"
                                    >
                                        <option :value="1"> 1 day </option>
                                        <option :value="2"> 2 days </option>
                                        <option :value="3"> 3 days </option>
                                        <option :value="4"> 4 days </option>
                                        <option :value="5"> 5 days </option>
                                        <option :value="6"> 6 days </option>
                                        <option :value="7"> 7 days </option>
                                        <option :value="8"> 8 days </option>
                                        <option :value="9"> 9 days </option>
                                        <option :value="10"> 10 days </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group space-y-10">
                            <div class="space-y-20">
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Name*</span>
                                    <input type="text" class="form-control"
                                            v-model="item.name"
                                            placeholder="your products name"
                                            readonly disabled>
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput pl-20">Description </span>
                                    <textarea class="form-control" spellcheck="true" style="height:160px"
                                            v-model="item.description"
                                            placeholder="Provide your description for your item"
                                            readonly disabled/>
                                </div>
                                <div class="space-y-5">
                                    <span class="variationInput p-20">Category</span>
                                    <input type="text" class="form-control"
                                            v-model="categoryName"
                                            placeholder="item category name"
                                            readonly disabled>
                                </div>
                                <div class="space-y-5">
                                    <span class="variationInput p-20">Collection</span>
                                    <input type="text" class="form-control"
                                            v-model="collectionName"
                                            placeholder="item collection name"
                                            readonly disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content justify-content-between mt-40 mb-20_reset" style="margin-left:44%">
                    <div class="mb-20">
                        <div class="btn btn-grad btn_create" @click="editItem"> 
                            Update Item
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoAreas from "../components/InfoAreas";
    import Datepicker from 'vuejs-datepicker';
    import { Web3Ultils } from "../utils/Web3Ultils";

    export default {
        components: {
            InfoAreas,
            Datepicker
        },
        data() {
            return {
                collectionItem: null,
                collectionName: '',
                categoryItem: null,
                categoryName: '',
                image: require("@/assets/img/bg7.jpg"),
                item: {
                    name: '',
                    image: '',
                    is_on_market: 0,
                    is_market_option: 0,
                    min_bid: 0,
                    start_at: '',
                    expires_at: '',
                    description: ''
                },
                status: null
            };
        },
        computed: {
            itemId() {
                return this.$route.params.id;
            },
            listCategory() {
                return this.$store.state.category.categories;
            },
            userData() {
                return this.$store.state.user.information;
            },
            wallet_address() {
                return this.userData?.address;
            },
        },
        watch: {
            async itemId(newValue, oldValue) {
                if (newValue && newValue.length > 0) {
                    this.item = await this.getItem();
                }
            },
        },
        async mounted() {
            this.$loading(true);
            try {
                this.item = await this.getItem();
                this.status = this.item.is_on_market;
            } catch (error) {
                this.$loading(false);
                this.$store.dispatch("global/showMessage",
                    { 
                        kind:'show_error',
                        content: error.message
                    }
                );
                this.$router.go(-1);
            }

            if (this.wallet_address) {
                this.collectionItem = await this.$store.dispatch(
                    "collection/getDetailCollection", 
                    {
                        keysearch: this.item.collection_id,
                    }
                );
                this.collectionName = this.collectionItem.name;

                this.categoryItem = await this.$store.dispatch(
                    "category/getCategoriesById", 
                    {
                        keysearch: this.collectionItem.category_id,
                    }
                );
                this.categoryName = this.categoryItem.name;
            } else {
                this.$router.push("/connect-wallet");
            }

            this.$loading(false);
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
            getItem() {
                return this.$store.dispatch("item/getDetailItem", { id: this.itemId });
            },
            async editItem() {
                if (this.userData) {
                    try {
                        this.$loading(true);

                        const isSellItem = await Web3Ultils.sellItem(this.item, 
                            this.collectionItem.address,
                            this.wallet_address
                        );
/*
                        if (isSellItem) {
                            this.$store.dispatch("global/showMessage",
                                {   kind:'show_success',
                                    content: 'Create auction Successfull'
                                }
                            );
                        }
*/
                        this.$loading(false);
                        this.$router.push("/profile/" + this.userData.address);
                    } catch (error) {
                        this.$loading(false);
                        this.$store.dispatch("global/showMessage",
                                { 
                                    kind:'show_error',
                                    content: error.message
                                }
                            );
                    }
                }
                else {
                    this.$router.push("/connect-wallet");
                }
            },
        },
    };
</script>

<style scoped>
    .loadimg {
        max-height: 500px;
        border-radius: 12px;
    }

    .layout-item.size-45 {
        min-width: 45%;
        max-width: 45%;
        flex: 0 1 45%;
    }

    .is-not-choose {
        border: 2px dashed #d0d3d7;
        border-radius: 12px;
        margin: 10px;
    }

    .is-choose {
        border: 2px dashed #2d81ff;
        border-radius: 12px;
        margin: 10px;
    }

    option{
        font-size:15px;
    }

    select {
        color: #fff !important;
    }

    .vdp-datepicker__calendar {
        position: absolute;
        z-index: 100;
        background: #18bc35 !important;
        width: 300px;
        border: 1px solid #ccc;
    }

</style>
