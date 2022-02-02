<template>
    <div>
        <div class="hero__upload">
            <div class="container">
                <div class="space-y-20">
                    <h2 class="title">Edit Collection</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box in__upload mb-120">
                <div class="row">
                    <div class="col-lg-6">
                        <div style="height:280px">
                            <p><span class="nameInput p-20">Logo Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    :inputValue="currentCollection.image"
                                    type="image-circle"
                                    @updateImg="
                                    (img) => {
                                        currentCollection.fileAvatar = img;
                                    }
                                        "
                                    />
                            </div>
                        </div>
                        <div class="mt-70" style="height:505px">
                            <p><span class="nameInput p-20">Banner Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    :inputValue="currentCollection.banner_image"
                                    type="image-regular"
                                    @updateImg="
                                        (img) => {
                                            currentCollection.fileBanner = img;
                                        }
                                    "
                                    >
                                </file-upload>
                            </div>
                        </div>
                        <div class="space-y-10 mt-100">
                            <span class="nameInput p-20">Links</span>
                            <input type="text" class="form-control"
                                    v-model="currentCollection.social_link1"
                                    placeholder="https://www.facebook.com/abcdef">
                            <input type="text" class="form-control"
                                    v-model="currentCollection.social_link2"
                                    placeholder="@YourTwitterHandle">
                            <input type="text" class="form-control"
                                    v-model="currentCollection.social_link3"
                                    placeholder="@YourInstagramHandle">
                            <input type="text" class="form-control"
                                    v-model="currentCollection.social_link4"
                                    placeholder="@YourMediumHandle">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group space-y-10">
                            <div class="space-y-20">
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Name*</span>
                                    <input type="text" class="form-control"
                                            v-model="currentCollection.name"
                                            placeholder="Collection Name">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Description </span>
                                    <textarea class="form-control" spellcheck="true" style="height:190px"
                                            v-model="currentCollection.description"
                                            placeholder="Provide your description for your collection"/>
                                </div>
                                <div class="space-y-5">
                                    <span class="variationInput p-20">Choose Category</span>
                                    <select 
                                        class="form-select custom-select"
                                        id="selectCategory"
                                        v-model="currentCollection.category_id"
                                        name="selectCategory"
                                        placeholder="Select Category"
                                        aria-label="Default select example">
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
                                    <span class="nameInput p-20">Royalty*</span>
                                    <input type="number" class="form-control"
                                            v-model="currentCollection.royalty"
                                            placeholder="" value="0">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Fee Recipient</span>
                                    <input type="text" class="form-control"
                                            v-model="currentCollection.fee_recipient"
                                            placeholder="Fee Recipient">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Contract address*</span>
                                    <input type="text" class="form-control" style="color:#6c757d "
                                            v-model="currentCollection.address"
                                            placeholder="0x..."
                                            readonly disabled>
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Project Website</span>
                                    <input type="text" class="form-control"
                                            v-model="currentCollection.short_url"
                                            placeholder="https://myproject.com">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Your Email</span>
                                    <input type="text" class="form-control"
                                            v-model="currentCollection.creator_email"
                                            placeholder="contact@project.com">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="content justify-content-between mt-40 mb-20_reset" style="margin-left:44%">
                    <div class="mb-20">
                        <router-link :to="{name:'collections'}">
                            <div class="btn btn-grad btn_create" @click="editCollection"> 
                                Update Collection
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FileUpload from "../components/file-upload";
    
    export default {
        components: {
            FileUpload
        },
        computed: {
            userCollection() {
                return this.$route.params.collectionid;
            },
            userData() {
                return this.$store.state.user.information;
            },
            listCategory() {
                return this.$store.state.category.categories;
            },
        },
        watch: {
            userCollection(newValue, oldValue) {
                this.reloadData();
            },
            userData(newValue, oldValue) {
                this.reloadData();
            },
        },
        mounted() {
            if (!this.userData) {
                this.$router.push("/connect-wallet");
            }
            else {
                this.reloadData();
            }
        },
        data() {
            return {
                currentCollection: null,
                image: require("@/assets/img/bg7.jpg"),
            };
        },
        methods: {
            async editCollection() {
                if (this.userData) {
                    this.$loading(true);
                    try {
                        const result = await this.$store.dispatch(
                            "collection/editCollection",
                            this.currentCollection
                        );

                        this.$loading(false);
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
            async reloadData() {
                this.$loading(true);
                
                try {
                    if (this.userCollection && this.userCollection.length > 0) {

                        this.currentCollection = await this.$store.dispatch(
                            "collection/getDetailCollection", 
                            {
                                keysearch: 2
                            }
                        );
                    }
                    else
                        return;

                } catch (error) {
                    this.$failAlert({
                    text: error,
                    });
                }
                this.$loading(false);
            }
        },
    };
</script>
