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
                        <div style="height:280px">
                            <p><span class="nameInput p-20">Avatar Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    :inputValue="userData.avatar"
                                    id="avatar"
                                    type="image-circle"
                                    @updateImg="
                                    (img) => {
                                        userData.fileAvatar = img;
                                    }
                                    "
                                    />
                            </div>
                        </div>
                        <div class="mt-70" style="height:505px">
                            <p><span class="nameInput p-20">Logo Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    type="image-regular"
                                    id="banner"
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
                            <div class="space-y-20">
                                <div class="space-y-10">
                                    <span class="nameInput pl-20">First Name*</span>
                                    <input type="text" class="form-control"
                                            v-model="userData.first_name"
                                            placeholder="Collection Name">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput pl-20">Last Name*</span>
                                    <input type="text" class="form-control"
                                            v-model="userData.last_name"
                                            placeholder="Collection Name">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput pl-20">Description </span>
                                    <textarea class="form-control" spellcheck="true" style="height:160px"
                                            v-model="userData.description"
                                            placeholder="Provide your description for your collection"/>
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput pl-20">Custom URL</span>
                                    <input type="text" class="form-control"
                                            v-model="userData.custom_url"
                                            placeholder="https://myproject.com">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput pl-20">Your Email</span>
                                    <input type="text" class="form-control"
                                            v-model="userData.email"
                                            placeholder="contact@project.com">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput pl-20">Links</span>
                                    <i class="fab fa-facebook" />
                                    <input type="text" class="form-control"
                                            v-model="userData.social_link1"
                                            placeholder="https://www.facebook.com/abcdef">
                                    <i class="fab fa-twitter" />
                                    <input type="text" class="form-control"
                                            v-model="userData.social_link2"
                                            placeholder="@myTwitter">
                                    <i class="fab fa-instagram" />
                                    <input type="text" class="form-control"
                                            v-model="userData.social_link3"
                                            placeholder="@YourInstagramHandle">
                                    <i class="fab fa-soundcloud" />
                                    <input type="text" class="form-control"
                                            v-model="userData.social_link4"
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
            FileUpload
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
        async mounted() {
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
                    this.$loading(true);
                    this.$store.dispatch("user/editProfile", this.userData);
                    this.$loading(false);
                    this.$router.push("/profile/" + this.userData.address);
                } catch (error) {
                    this.$loading(false);
                    console.log(444)
                }
            },
            goTo(url) {
                this.$router.push("/" + url);
            },
        },
    };
</script>

<style>
    .uploading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #221423c4;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dot-fire {
        position: relative;
        left: -9999px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #FFFFFF;
        color: #FFFFFF;
        box-shadow: 9999px 22.5px 0 -5px #FFFFFF;
        animation: dot-fire 1.5s infinite linear;
        animation-delay: -.85s;
    }
    .dot-fire::before, .dot-fire::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #FFFFFF;
        color: #FFFFFF;
    }
    .dot-fire::before {
        box-shadow: 9999px 22.5px 0 -5px #FFFFFF;
        animation: dot-fire 1.5s infinite linear;
        animation-delay: -1.85s;
    }
    .dot-fire::after {
        box-shadow: 9999px 22.5px 0 -5px #FFFFFF;
        animation: dot-fire 1.5s infinite linear;
        animation-delay: -2.85s;
    }
    @keyframes dot-fire {
        1% { box-shadow: 9999px 22.5px 0 -5px #FFFFFF; }
        50% { box-shadow: 9999px -5.625px 0 2px #FFFFFF; }
        100% { box-shadow: 9999px -22.5px 0 -5px #FFFFFF; }
    }
</style>