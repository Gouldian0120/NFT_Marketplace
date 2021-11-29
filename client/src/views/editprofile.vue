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
                                    :inputValue="userData.avatar"
                                    type="image-circle"
                                    @updateImg="
                                    (img) => {
                                        userData.fileAvatar = img;
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
                                    :inputValue="userData.banner_img"
                                    @updateImg="
                                        (img) => {
                                            userData.fileBanner = img;
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
                                            v-model="userData.full_name"
                                            placeholder="Collection Name">
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Description </span>
                                    <textarea class="form-control" spellcheck="true" style="height:160px"
                                            v-model="userData.bio"
                                            placeholder="Provide your description for your collection"/>
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Custom URL</span>
                                    <input type="text" class="form-control"
                                            v-model="userData.custom_url"
                                            placeholder="https://myproject.com">
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Your Email</span>
                                    <input type="text" class="form-control"
                                            v-model="userData.email"
                                            placeholder="contact@project.com">
                                </div>
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">Links</span>
                                    <i class="fab fa-facebook" />
                                    <input type="text" class="form-control"
                                            v-model="userData.socials.facebook"
                                            placeholder="https://www.facebook.com/abcdef">
                                    <i class="fab fa-twitter" />
                                    <input type="text" class="form-control"
                                            v-model="userData.socials.twitter"
                                            placeholder="@myTwitter">
                                    <i class="fab fa-instagram" />
                                    <input type="text" class="form-control"
                                            v-model="userData.socials.instagram"
                                            placeholder="@YourInstagramHandle">
                                    <i class="fab fa-soundcloud" />
                                    <input type="text" class="form-control"
                                            v-model="userData.socials.medium"
                                            placeholder="https://medium.com/myProject">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="content justify-content-between mt-40 mb-20_reset" style="margin-left:44%">
                    <div class="mb-20">
                        <div class="btn btn-grad btn_create" @click="updateProfile"> 
                            Update Profile
                        </div>
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
            userData() {
                return this.$store.state.user.information;
            },
        },/*
        watch: {
            userWallet(newValue, oldValue) {
                this.reloadData();
            },
        },*/
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
            async updateProfile() {
                try {
                    this.$store.dispatch("user/editProfile", this.userData);
                    /*
                    await this.$successAlert({
                        text: "Update Profile Succesfully",
                    });
*/
                    this.$router.push("/profile/" + this.userData.wallet_address);
                } catch (error) {
                    /*
                    this.$loading(false);
                    this.$failAlert({
                        text: error,
                    });*/
                }
            },
            goTo(url) {
                this.$router.push("/" + url);
            },
        },
    };
</script>
