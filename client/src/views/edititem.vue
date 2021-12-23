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
                               <img :src="item.image" />
                            </div>
                        </div>
                        <div class="space-y-5 mt-40">
                            <span class="nameInput pl-20">Put on Marketplace</span>
                            <div class="d-flex space-x-10 switch_item">
                                <input type="checkbox" id="switch5" v-model="item.isPutOnMarket"/>
                                <label for="switch5"></label>
                            </div>
                        </div>
                        <div class="md-layout" v-if="item.isPutOnMarket">
                            <div
                                class="layout-item size-45"
                                :class="
                                    sigleItem.isMarketOption == 1
                                    ? 'is-choose'
                                    : 'is-not-choose'
                                "
                            >
                                <info-areas
                                    icon-color="info"
                                    icon="sell"
                                    text-center
                                    @click.native="sigleItem.isMarketOption = 1"
                                >
                                    <h4 slot="title" class="info-title">
                                    Fixed Price
                                    </h4>
                                </info-areas>
                            </div>
                            <div
                                class="layout-item size-45"
                                :class="
                                    sigleItem.isMarketOption == 2
                                    ? 'is-choose'
                                    : 'is-not-choose'
                                "
                            >
                                <info-areas
                                    icon-color="success"
                                    icon="access_time"
                                    text-center
                                    @click.native="sigleItem.isMarketOption = 2"
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
                                    v-model="item.minBid" min="0"
                                    placeholder="">
                            <p>**Bids below this amount won’t be allowed.</p>
                        </div>
                        <div class="mt-20 space-y-10 row">
                            <div class="col-xl-6">
                                <span class="pl-20">Starting Date</span>
                                <div>
                                    <datepicker  
                                        v-model="customDate" format="yyyy-MM-dd"></datepicker>
                                    <p>
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
                                        v-model="item.expireBid"
                                        name="selectExpiration"
                                        placeholder="Select Expiration"
                                    >
                                        <option :value="1"> 1 day </option>
                                        <option :value="2"> 2 days </option>
                                        <option :value="3"> 3 days </option>
                                        <option :value="4"> 4 days </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group space-y-20">
                            <div class="space-y-20">
                                <div class="space-y-5">
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
                                    <span class="variationInput p-20">Choose Category</span>
                                    <select 
                                        class="form-select custom-select"
                                        id="selectCategory"
                                        v-model="item.category_id"
                                        name="selectCategory"
                                        placeholder="Select Category"
                                        aria-label="Default select example"
                                        readonly disabled>
                                        <option style="font-size:15px"
                                            v-for="(item, i) in listCategory"
                                            :key="i"
                                            :value="item.id"
                                            >
                                            {{ item.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="space-y-5">
                                    <span class="variationInput p-20">Choose Collection</span>
                                    <select 
                                        class="form-select custom-select"
                                        id="selectCollection"
                                        v-model="item.collection_id"
                                        name="selectCategory"
                                        placeholder="Select Category"
                                        aria-label="Default select example"
                                        readonly disabled>
                                        <option style="font-size:15px"
                                            v-for="(item, i) in listCollections"
                                            :key="i"
                                            :value="item.id"
                                            >
                                            {{ item.name }}
                                        </option>
                                    </select>
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

    export default {
        components: {
            InfoAreas,
            Datepicker
        },
        computed: {
            itemId() {
                return "6195a326b7eeac0f3a685b06"; //this.$route.params.id;
            },
            listCategory() {
                return this.$store.state.category.categories;
            },
            userData() {
                return this.$store.state.user.information;
            },
            wallet_address() {
                return "0x2C4C168A2fE4CaB8E32d1B2A119d4Aa8BdA377e7"; //this.userData?.wallet_address;
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

                this.sigleItem.isMarketOption = this.item.isMarketOption;
            } catch (error) {
                this.$loading(false);
                this.$failAlert({
                    text: error,
                });
                this.$router.go(-1);
            }

            if (this.wallet_address) {
                try {
                    this.listCollections = await this.$store.dispatch(
                        "collection/getCollectionForUser",
                        { wallet_address: this.wallet_address }
                    );
                } catch (error) {
                        this.$failAlert({
                        text: error,
                    });
                }
            } else {
                this.$router.push("/connect-wallet");
            }

            this.$loading(false);
        },
        data() {
            return {
                listCollections: [],
                image: require("@/assets/img/bg7.jpg"),
                item: null,
                customDate: new Date(),
                sigleItem: {
                    isMarketOption: 0,
                    isPutOnMarket: false,
                    category_id: "",
                    startBid: new Date(),
                    expireBid: 1,
                    minBid: 1,
                    total_quantity: 1,
                    royalties: 10,
                    traits: [],
                },
            };
        },
        methods: {
            getItem() {
                return this.$store.dispatch("item/getDetailItem", { id: this.itemId });
            },
            async editItem() {
                if (this.userData) {
                    this.item.id = this.item._id;
                    this.item.wallet_address = this.userData.wallet_address;
                    this.item.total_quantity = Number(this.item.total_quantity);
                    this.item.minBid = Number(this.item.minBid);
                    try {
                        await this.$store.dispatch("item/editItem", this.item);
                        this.$loading(false);

                        await this.$successAlert({
                            text: "Create Collection Succesfully",
                        });

                        this.$router.push("/profile/" + this.userData.wallet_address);
                    } catch (error) {
                        this.$loading(false);
                        this.$failAlert({
                            text: error,
                        });
                    }
                } else {
                    this.$router.push("/connect-wallet");
                }
            },
        },
    };
</script>

<style scoped>
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
