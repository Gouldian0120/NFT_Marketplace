<template>
    <div>
        <div class="hero__upload">
            <div class="container">
                <div class="space-y-20">
                    <h2 class="title">Create single collectible</h2>
                </div>
            </div>
        </div>
        <div class="modal fade popup" id="popup_preview" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body space-y-20 p-0">
                        <div class="card__item three m-0 in__popup">
                            <div class="card_body space-y-10">
                                <!-- ???? =============== -->
                                <div class="card_head">
                                    <img :src="require('@/assets/img/items/item_4.png')"
                                         alt="">
                                    <a href="#" class="likes space-x-3">
                                        <i class="ri-heart-3-fill"></i>
                                        <span class="txt_sm">2.1k</span>
                                    </a>
                                    <div class="action">
                                        <a href="#" class="btn btn-primary btn-sm">
                                            <i class="ri-pie-chart-line color_white"></i>
                                            Place Your Bid
                                        </a>
                                    </div>
                                </div>
                                <!-- ???? =============== -->
                                <h6 class="card_title">
                                    Colorful Abstract Painting
                                </h6>
                                <div class="card_footer d-block space-y-10">
                                    <div class="d-flex justify-content-between">
                                        <div class="creators space-x-10">
                                            <div class="avatars -space-x-20">
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                        :src="require('@/assets/img/avatars/avatar_3.png')"
                                                        alt="Avatar" class="avatar avatar-sm">
                                                </router-link>
                                               <router-link :to="{name:'profile'}">
                                                    <img
                                                        :src="require('@/assets/img/avatars/avatar_2.png')"
                                                        alt="Avatar" class="avatar avatar-sm">
                                               </router-link>
                                            </div>
                                             <router-link :to="{name:'profile'}">
                                                <p class="avatars_name txt_sm">
                                                    @makinzi_jamy... </p>
                                             </router-link>
                                        </div>
                                        <a href="#" class="space-x-3">
                                            <p class="color_green txt_sm">0.001 ETH</p>
                                        </a>
                                    </div>
                                    <div class="hr"></div>
                                    <a href="#" class="d-flex align-items-center space-x-10">
                                        <i class="ri-vip-crown-line"></i>
                                        <p class="color_text txt_sm" style="width: auto;">Highest bid</p>
                                        <span class="color_black txt_sm">0.001 ETH</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box in__upload mb-120">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="left__part space-y-40 md:mb-20 upload_file">
                            <div class="space-y-20">
                                <img class="icon"
                                     :src="require('@/assets/img/icons/upload.svg')"
                                     alt="">
                                <h5>Drag and drop your file</h5>
                                <p class="color_text">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                            </div>
                            <div class="space-y-20">
                                <p class="color_text">or choose a file</p>
                                <a href="#" class="btn btn-white"> Browse files </a>
                                <input type="file">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group space-y-10">
                            <div class="space-y-20">
                                <div class="space-y-10">
                                    <span class="nameInput">Name*</span>
                                    <input type="text" class="form-control"
                                           placeholder="e. g. `raroin design art`">
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput">Description </span>
                                    <textarea class="form-control" spellcheck="true" style="height:120px"
                                           placeholder="e. g. `raroin design art`"/>
                                </div>
                                <div class="space-y-10">
                                    <span class="variationInput">Choose Category</span>
                                    <select 
                                        class="form-select custom-select"
                                        id="selectCategory"
                                        v-model="newCollection.category_id"
                                        name="selectCategory"
                                        placeholder="Select Category"
                                        aria-label="Default select example">
                                        <option style="font-size:15px"
                                            v-for="(item, i) in listCategory"
                                            :key="i"
                                            :value="item._id"
                                            >
                                            {{ item.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="space-y-10">
                                    <span class="variationInput">Choose collection</span>
                                    <div class="d-flex flex-column flex-md-row">
                                        <a href="" class="choose_collection mb-10 mb-md-0 mr-0 mr-md-3">
                                            <div class="icon">
                                                <i class="ri-add-line"></i>
                                            </div>
                                            New collection
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content justify-content-between mt-40 mb-20_reset">
                            <div class="mb-20">
                                <router-link :to="{name:'item-details'}">
                                    <div class="btn btn-grad btn_create"> 
                                        Create item
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//    import { FileUpload } from "../components";

    export default {
        components: {
    //        FileUpload,
        },
        computed: {
            listCategory() {
                console.log(this.$store.state.category.categories)
                return this.$store.state.category.categories;
            },
            userData() {
                return this.$store.state.user.information;
            },
        },
        mounted() {
            if (!this.userData) {
                this.$router.push("/connect-wallet");
            }
        },

        data() {
            return {
                newCollection: { socials: {} },
                image: require("@/assets/img/bg7.jpg"),
            };
        },
        methods: {
            async createCollection() {
                if (this.userData) {
                    this.$loading(true);
                    this.newCollection.wallet_address = this.userData.wallet_address;
                    try {
                        const result = await this.$store.dispatch(
                            "collection/createCollection",
                            this.newCollection
                        );

                        this.$loading(false);
                        if (result) {
                            await this.$successAlert({
                                text: "Create Collection Succesfully",
                            });

                            this.$router.push("/user-profile");
                        } else {
                            this.$failAlert({
                                text: "Create Collection Fail",
                            });
                        }
                    } 
                    catch (error) {
                        this.$loading(false);
                        this.$failAlert({
                            text: error,
                        });
                    }
                } else {
                    this.$router.push("/connect-wallet");
                }
            },
            goTo(url) {
                this.$router.push("/" + url);
            },
        },
    };
</script>
