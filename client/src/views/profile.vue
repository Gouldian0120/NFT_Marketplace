<template>
    <div>
        <div class="mb-100">
            <div class="hero__profile">
                <div class="cover">
                    <div v-lazy-container="{ selector: 'img' }">
                        <img class="bannerloadimg"
                            :data-src="viewUser.banner_img || bannerimage" />
                    </div>
                </div>
                <div class="infos">
                    <div class="container">
                        <div class="row flex-wrap align-items-center justify-content-between">
                            <div class="col-md-auto mr-20">
                                <div class="avatars d-flex space-x-20 align-items-center">
                                    <div class="media has_border">
                                        <div v-lazy-container="{ selector: 'img' }">
                                            <img class="avatarloadimg" 
                                                :data-src="viewUser.avatar || avatarimage" 
                                                :data-loading="loadimage"/>
                                        </div>
                                    </div>
                                    <h5>{{viewUser.first_name + " " + viewUser.last_name}}</h5>
                                </div>
                            </div>
                            <div class="col-md-auto">
                                <div class="d-flex flex-wrap align-items-center space-x-20 mb-20_reset">
                                    <div class="mb-20">
                                        <div class="copy">
                                            <span class="color_text">
                                                {{showWalletSeller(viewUser.address)}}
                                            </span>
                                            <i  @click="copyToClipboard"
                                                class="ri-file-copy-line color_text cursor-pointer" 
                                                title="Copy to clipboard"
                                                ></i>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-wrap align-items-center space-x-20">
                                        <div class="mb-20">
                                            <router-link :to="'btn'" class="btn-white btn-sm">
                                                Follow
                                            </router-link>
                                        </div>
                                        <div class="mb-20">
                                            <div class="share">
                                                <div class="icon">
                                                    <a href="#">
                                                        <i class="ri-share-line"></i>
                                                    </a>
                                                </div>
                                                <div class="dropdown__popup">
                                                    <ul class="space-y-10">
                                                        <li>
                                                            <a href="">
                                                                <i class="ri-facebook-line"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href=""> 
                                                                <i class="ri-messenger-line"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href=""> 
                                                                <i class="ri-whatsapp-line"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href=""> 
                                                                <i class="ri-youtube-line"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-20">
                                            <div class="more">
                                                <div class="icon">
                                                    <a href="#"> 
                                                        <i class="ri-more-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="dropdown__popup">
                                                    <ul class="space-y-10">
                                                        <li>
                                                            <a href="#" class="space-x-10 d-flex">
                                                                <i class="ri-flag-line"></i>
                                                                <span> Report </span>
                                                            </a>
                                                        </li>
                                                    </ul>
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
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-7 order-md-0 order-1">
                    <div class="profile__sidebar">
                        <div class="space-y-40">
                            <div class="space-y-10">
                                <h5>About me</h5>
                                <div class="box space-y-20">
                                    <p>
                                        <!--{{viewUser.bio}}-->
                                    </p>
                                    <div class="row">
                                        <div class="col-6 text-center">
                                            <span class="txt_sm color_green">Collections</span>
                                            <h4>{{this.collectionCount}}</h4>
                                        </div>
                                        <div class="col-6 text-center">
                                            <span class="txt_sm color_green">Creations</span>
                                            <h4>{{this.itemCount}}</h4>
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
                                                <span class="color_text">{{viewUser.social_link1}}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="ri-instagram-line"></i>
                                                <span class="color_text">{{viewUser.social_link3}}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="ri-medium-line"></i>
                                                <span class="color_text">{{viewUser.social_link4}}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="ri-twitter-line"></i>
                                                <span class="color_text">{{viewUser.social_link2}}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p 
                            v-if="viewUser.created_at != null"
                            class="text-center txt_sm mt-20 color_text">Since : {{viewUser.created_at.substring(0,10)}}</p>
                    </div>
                </div>
                <div class="col-lg-9 col-md-12 order-md-1 order-0">
                    <div class="profile__content">
                        <div class="d-flex justify-content-between">
                            <div class="space-x-10">
                                <div class="d-flex justify-content-between">
                                    <ul class="nav nav-tabs d-flex space-x-10 mb-30"
                                        role="tablist">
                                        <li class="nav-item">
                                            <a :class="{'active':tab===1}"
                                               class="btn btn-white btn-sm"
                                               @click="tab=1">
                                                Creations</a>
                                        </li>
                                        <li class="nav-item">
                                            <a :class="{'active':tab===2}"
                                               class="btn btn-white btn-sm"
                                               @click="tab=2">
                                                Collections</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content">
                                    <div :class="{'active':tab===1}" v-if="tab===1">
                                         <created-item-tab
                                            :walletAddress="viewUser.address || ''"
                                        />
                                    </div>
                                    <div v-if="tab===2" :class="{'active':tab===2}">
                                        <collections-tab
                                            :walletAddress="viewUser.address || ''"
                                        />
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

    import CreatedItemTab from "./tab/CreatedItemTab.vue";
    import CollectionsTab from "./tab/CollectionsTab.vue";

    export default {
        components: {
            CreatedItemTab, CollectionsTab
        },
        computed: {
            userWallet() {
                return this.$route.params.wallet;
            },
            userData() {
                return this.$store.state.user?.information;
            },
        },
        watch: {
            userWallet(newValue, oldValue) {
                this.reloadData();
            },
            userData(newValue, oldValue) {
                this.reloadData();
            },
        },
        async mounted() {
            this.reloadData();
        },

        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                avatarimage: require("@/assets/img/avatars/avatar_4.png"),
                bannerimage: require('@/assets/img/bg/prrofile.png'),
                tab:1,
                profileName: "",
                viewUser: {},
                itemCount: 0,
                collectionCount: 0
            };
        },
        methods: {
            copyToClipboard() {
                if (!navigator.clipboard){
                    var input = document.createElement("input");
                    input.setAttribute("value", this.profileName);
                    document.body.appendChild(input);
                    input.select();
                    var result = document.execCommand("copy");
                    document.body.removeChild(input);

                    this.$store.dispatch("global/showMessage",
                        {   
                            kind:'show_success',
                            content: 'Copy to clipboard successfull'
                        }
                    )
                } else{
                    navigator.clipboard.writeText(this.profileName).then(
                        this.$store.dispatch("global/showMessage",
                            {   
                                kind:'show_success',
                                content: 'Copy to clipboard successfull'
                            }
                        )
                    )
                }  
            },
            async reloadData() {
                this.$loading(true);
                try {
                    if (this.userWallet && this.userWallet.length > 0) {
                        let user;
                        user = await this.$store.dispatch(
                            "user/getUserProfileByAddress", 
                            {
                                keysearch: this.userWallet
                            }
                        );

                        this.viewUser = user[0];
                        this.profileName = this.viewUser.address;

                        let Items = await this.$store.dispatch(
                            "collection/getCollectionForUser",
                            {
                                skip:0,
                                limit:16,
                                keysearch: this.userWallet
                            }
                        );

                        this.collectionCount = Items.length

                        Items = await this.$store.dispatch(
                            "item/getItemForCreator",
                            {
                                skip:0,
                                limit:16,
                                keysearch: this.userWallet
                            }
                        );

                        this.itemCount = Items.length
                    } else {
                        this.viewUser = this.userData;
                    }

                } catch (error) {
                    this.$store.dispatch("global/showMessage",
                        { 
                            kind:'show_error',
                            content: error.message
                        }
                    );
                }
                this.$loading(false);
            },
            showShortName(name) {
                if (name) {
                    return (
                        name.substring(0, 6) +
                        "..." +
                        name.substring(name.length - 8, name.length)
                    );
                }
                return "";
            },
            showWalletSeller(wallet) {
                if (wallet == null)
                    return null;
                else
                    return (
                        wallet.substring(0, 8) +
                        "..." +
                        wallet.substring(wallet.length - 8, wallet.length)
                    );
            },
        },
    };

</script>

<style scoped>
    .avatarloadimg {
        width: 80px !important;
        height: 80px !important;
        border-radius: 50%;
    }

    .bannerloadimg {
        width: 100% !important;
        height: 270px !important;
    }

</style>
