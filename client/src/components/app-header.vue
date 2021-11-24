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
                            </li>
                            <li>
                                <router-link :to="{name:'creators'}" class="color_black"> Creators</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'activity'}" class="color_black"> Activity</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="header__search">
                        <input type="text" placeholder="Search"/>
                        <button class="header__result">
                            <i class="ri-search-line"></i>
                        </button>
                    </div>
                    <div class="d-flex align-items-center space-x-20" 
                            v-if="isMetaMaskInstalled && isMetaMaskConnected">
                        <div class="header__notifications">
                            <div class="js-notifications-icon">
                                <i class="ri-notification-3-line"></i>
                            </div>
                            <div class="notifications_popup space-y-20">
                                <div class="d-flex justify-content-between">
                                    <h5> Notifications</h5>
                                    <router-link to="/activity" class="badge color_white">
                                        View all
                                    </router-link>
                                </div>
                                <div class="item space-x-20 d-flex justify-content-between align-items-center">
                                    <img class="thumb"
                                         :src="require('@/assets/img/notifications/1.png')"
                                         alt="..."
                                    />
                                    <div class="details">
                                        <router-link to="/activity">
                                            <h6>Money revieved</h6>
                                        </router-link>
                                        <p>0.6 ETH</p>
                                    </div>
                                    <span class="circle"></span>
                                </div>
                            </div>
                        </div>
                        <div class="header__avatar">
                            <!--
                            <div class="price">
                                <span>2.45 <strong>ETH</strong></span>
                            </div>
                            -->
                            <img
                                class="avatar"
                                :src="require('@/assets/img/avatars/avatar_2.png')"
                                alt="avatar"
                            />
                            <div class="avatar_popup space-y-20">
                                <div class="d-flex align-items-center justify-content-between">
                                    <span> 13b9ebda035r178... </span>
                                    <a href="/" class="ml-2">
                                        <i class="ri-file-copy-line"></i>
                                    </a>
                                </div><!--
                                <div class="d-flex align-items-center space-x-10">
                                    <img
                                        class="coin"
                                        :src="require('@/assets/img/logos/coin.svg')"
                                        alt="/"
                                    />
                                    <div class="info">
                                        <p class="text-sm font-book text-gray-400">Balance</p>
                                        <p class="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                                    </div>
                                </div>-->
                                <div class="hr"></div>
                                <div class="links space-y-10">
                                    <a href="#">
                                        <i class="ri-landscape-line"></i> 
                                        <span> My items</span>
                                    </a>
                                    <a href="#">
                                        <i class="ri-pencil-line"></i> 
                                        <span> Edit Profile</span>
                                    </a>
                                    <a href="#">
                                        <i class="ri-logout-circle-line"></i> 
                                        <span> Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="header__btns">
                            <router-link class="btn btn-primary btn-sm" to="/registercollection">
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
            isMetaMaskInstalled() {
                const {ethereum} = window;
                return Boolean(ethereum && ethereum.isMetaMask)
            },
            isMetaMaskConnected() {
                return this.$store.state.user.account != null;
            },
        },
        methods: {
            logout() {
                this.$store.dispatch("user/logoutUser");
                this.$router.push("/");
            },
        },
    }
</script>

<style scoped>

</style>