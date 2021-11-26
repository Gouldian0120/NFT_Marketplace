<template>
    <div>
        <header class="header__1 js-header">
            <div class="container">
                <div class="wrapper js-header-wrapper">
                    <div class="header__logo">
                        <router-link :to="'/'">
                            <img class="header__logo"
                                 :src="$root.darkMode?require('@/assets/img/logos/Logo_white.svg'):require('@/assets/img/logos/Logo.svg')"
                                 alt="logo"/>
                        </router-link>
                    </div>
                    <div class="header__menu">
                        <ul class="d-flex space-x-20">
                            <li>
                                <router-link :to="{name:'home'}" class="color_black"> Home</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'marketplace'}" class="color_black"> Marketplace</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'collections'}" class="color_black"> Collections</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'profile'}" class="color_black"> Profile</router-link>
                            </li><!--
                            <li>
                                <router-link :to="{name:'editprofile'}" class="color_black"> editprofile</router-link>
                            </li>-->
                            <li>
                                <router-link :to="{name:'creators'}" class="color_black"> Creators</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'activity'}" class="color_black"> Activity</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="header__search ml-10 mr-10">
                        <input type="text" placeholder="Search"/>
                        <button class="header__result">
                            <i class="ri-search-line"></i>
                        </button>
                    </div>
                    <div class="d-flex align-items-center space-x-20" 
                            v-if="metaMaskAddress && metaMaskAddress.length > 0">
                        <div class="header__notifications">
                            <div class="dropdown">
                                <div class="dropdown-toggle"
                                        type="button"
                                        data-toggle="dropdown" >
                                    <i class="ri-notification-3-line"></i>
                                </div>
                                <div class="dropdown-menu space-y-10  pl-2 pr-2">
                                    <div class="d-flex justify-content-between">
                                        <h5> Notifications</h5>
                                        <router-link to="/activity" class="badge color_white">
                                            View all
                                        </router-link>
                                    </div>
                                    <div class="item space-x-10 d-flex justify-content-between align-items-center">
                                        <img class="thumb"
                                            :src="require('@/assets/img/notifications/1.png')"
                                            alt="..."
                                        />
                                        <div class="" style="width:180px; word-wrap:break-word">
                                            <router-link to="/activity">
                                                <div>Money revieved ...</div>
                                            </router-link>
                                            <p>0.6 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header__avatar">
                            <div class="dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown">
                                <img
                                    class="avatarimg"
                                    :src="require('@/assets/img/avatars/avatar.png')"
                                    alt="avatar"
                                />
                            </div>
                            <div class="dropdown-menu space-y-10">
                                <div class="d-flex align-items-center justify-content-between ml-10 mr-10">
                                    <span>
                                        {{showWalletSeller(this.$store.state.user.account)}}
                                    </span>
                                    <a href="/" class="ml-2">
                                        <i class="ri-file-copy-line"></i>
                                    </a>
                                </div>
                                <div class="hr"></div>
                                <div class="links ml-10 mr-10">
                                    
                                    <router-link :to="'/profile/' + this.$store.state.user.account">
                                        <a href="">
                                            <i class="ri-landscape-line"></i> 
                                            <span> My Items</span>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="links ml-10 mr-10">
                                    <router-link :to="'/editprofile/' + this.$store.state.user.account">
                                        <a href="">
                                            <i class="ri-pencil-line"></i> 
                                            <span> Edit Profile</span>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="links ml-10 mr-10">
                                    <a href="#" @click="logout">
                                        <i class="ri-logout-circle-line"></i> 
                                        <span> Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="header__btns">
                            <router-link class="btn btn-primary btn-sm" to="/createcollection">
                                Create
                            </router-link>
                        </div>
                    </div>
                    <div class="header__btns" v-else>
                        <router-link :to="{name:'connect-wallet'}" class="btn btn-primary btn-sm">
                            Connect wallet
                        </router-link>
                    </div>
                    <div class="d-flex space-x-10 switch_item">
                        <input type="checkbox" id="switch1" v-model="$root.darkMode"/>
                        <label for="switch1"></label>
                    </div>
                    <div class="header__burger js-header-burger"></div>
                    <div class="header__mobile js-header-mobile">
                        <div class="header__mobile__menu space-y-40">
                            <ul class="d-flex space-y-20">
                                <li>
                                    <router-link class="color_black" :to="{name:'marketplace'}"> Marketplace
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="color_black" :to="{name:'collections'}"> Collections
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="color_black" :to="{name:'profile'}"> Profile</router-link>
                                </li>
                                <li>
                                    <router-link class="color_black" :to="{name:'creators'}"> Creators</router-link>
                                </li>
                                <li>
                                    <router-link class="color_black" :to="{name:'activity'}"> Activity</router-link>
                                </li>
                            </ul>
                            <div class="space-y-20">
                                <div class="header__search in_mobile w-full">
                                    <input type="text" placeholder="Search"/>
                                    <button class="header__result">
                                        <i class="ri-search-line"></i>
                                    </button>
                                </div>
                                <router-link class="btn btn-grad btn-sm" :to="{name:'connect-wallet'}">
                                    Connect wallet
                                </router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        data() {
            return {
                connected: true
            }
        },
        async mounted() {
//            document.addEventListener("scroll", this.scrollListener);
//            var localAddress = localStorage.getItem("metaMaskAddress");

            try {
/*              if (localAddress && localAddress.length > 0) {
                    await this.$store.dispatch("user/loginMetamask", localAddress);
                } else {
                    this.$store.dispatch("user/logoutUser");
                }*/
                await this.$store.dispatch("category/getCategories");
            } catch (error) {
                this.$failAlert({
                    text: error,
                });
                return;
            }
        },
        computed: {
            metaMaskAddress() {
                return this.$store.state.user.information?.wallet_address;
            },
        },
        methods: {
            logout() {
                this.$store.dispatch("user/logoutUser");
                this.$router.push("/");
            },
            showWalletSeller(wallet) {
                return (
                    wallet.substring(0, 5) +
                    "..." +
                    wallet.substring(wallet.length - 5, wallet.length)
                );
            },
        },
    }
</script>

<style scoped>
    .avatarimg {
        max-width:100px;
        height:25px;
        width:25px;
        border-radius: 50%;
    }

    .thumb {
        width:35px;
        height:35px;
    }
</style>