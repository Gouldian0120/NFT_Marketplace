<template>
    <div>
        <div class="hero__upload">
            <div class="container">
                <div class="space-y-20">
                    <h2 class="title">Edit Profile</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box in__upload mb-120">
                <div class="row">
                    <div class="col-lg-6">
                        <div style="height:240px">
                            <p><span class="nameInput p-20">Avatar Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    type="image-circle"
                                    @updateImg="
                                    (img) => {
                                        newCollection.file = img;
                                    }
                                        "
                                    />
                            </div>
                        </div>
                        <div class="mt-70" style="height:465px">
                            <p><span class="nameInput p-20">Logo Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    type="image-regular"
                                    @updateImg="
                                        (img) => {
                                            newCollection.fileBanner = img;
                                        }
                                    "
                                    />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group space-y-20">
                            <div class="space-y-10">
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Name*</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.name"
                                            placeholder="Collection Name">
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Description </span>
                                    <textarea class="form-control" spellcheck="true" style="height:160px"
                                            v-model="newCollection.description"
                                            placeholder="Provide your description for your collection"/>
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Custom URL</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.website"
                                            placeholder="https://myproject.com">
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Your Email</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.email"
                                            placeholder="contact@project.com">
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Links</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.socials.discord"
                                            placeholder="https://discord.gg/xxx">
                                    <input type="text" class="form-control"
                                            v-model="newCollection.socials.twitter"
                                            placeholder="@myTwitter">
                                    <input type="text" class="form-control"
                                            v-model="newCollection.socials.telegram"
                                            placeholder="@myTelegram">
                                    <input type="text" class="form-control"
                                            v-model="newCollection.socials.medium"
                                            placeholder="https://medium.com/myProject">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="content justify-content-between mt-40 mb-20_reset" style="margin-left:44%">
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
</template>

<script>
    import FileUpload from "../components/file-upload";
    
    export default {
        components: {
            FileUpload,
        },
        computed: {
            listCategory() {
                return this.$store.state.category.categories;
            },
            userData() {
                return this.$store.state.user.information;
            },
            userWallet() {
                return this.$route.params.wallet;
                // return "0x2C4C168A2fE4CaB8E32d1B2A119d4Aa8BdA377e7"
            },
        },
        watch: {
            userWallet(newValue, oldValue) {
                this.reloadData();
            },
        },
        mounted() {
            if (!this.userData) {
 //               this.$router.push("/connect-wallet");
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
