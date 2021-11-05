<template>
    <div>
        <div class="container pb-5">
            <a href="/" class="btn btn-white btn-sm my-40">
                Back to home
            </a>
            <div class="item_details">
                <div class="row sm:space-y-20">
                    <div class="col-md-6">
                        <div :style="{ backgroundImage: 'url(' + require('@/assets/img/items/item_2.png') + ')' }"
                             class="img-box item_img"></div>
                        <div class="my-3">
                            <div id="accordion" class="my-accordion">
                                <div class="card">
                                    <div class="px-3 py-2" id="headingOne">
                                        <h5 class="mb-0">
                                            <a class="collapsed cursor-pointer" data-toggle="collapse"
                                               data-target="#collapseOne" aria-expanded="true"
                                               aria-controls="collapseOne">
                                                About Items
                                            </a>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse show"
                                         aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia
                                            aute, non cupidatat skateboard dolor brunch. Food truck
                                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                            sunt aliqua put a bird on it squid single-origin coffee
                                            nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="px-3 py-2" id="headingTwo">
                                        <h5 class="mb-0">
                                            <a class="collapsed  cursor-pointer"
                                               data-toggle="collapse" data-target="#collapseTwo"
                                               aria-expanded="false" aria-controls="collapseTwo">
                                                Chain Info
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia
                                            aute, non cupidatat skateboard dolor brunch. Food truck
                                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="px-3 py-2" id="headingThree">
                                        <h5 class="mb-0">
                                            <a class="collapsed  cursor-pointer"
                                               data-toggle="collapse" data-target="#collapseThree"
                                               aria-expanded="false" aria-controls="collapseThree">
                                                Royality
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse"
                                         aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia
                                            aute, non cupidatat skateboard dolor brunch. Food truck
                                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                            sunt aliqua put a bird on it squid single-origin coffee
                                            nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt
                                            sapiente ea proident.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="space-y-20">
                            <div class="d-flex justify-content-between flex-wrap">
                                <h3>Creative girl illustration</h3>
                                <div class="space-x-10 d-flex align-items-center">
                                    <p>1 of 1</p>
                                    <a href="#" class="likes space-x-3">
                                        <i class="ri-heart-3-fill"></i>
                                        <span class="txt_sm">2.1k</span>
                                    </a>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between flex-wrap">
                                <div class="d-flex space-x-20">
                                <a href="" class="btn btn-primary btn-lg" data-toggle="modal"
                                   data-target="#popup_buy"> Buy Now</a>
                                <a href="" class="btn btn-grad btn-lg" data-toggle="modal"
                                   data-target="#popup_bid"> Place bid</a>
                            </div>
                                <div class="space-x-10 d-flex align-items-center">
                                    <div class="share">
                                        <div class="icon">
                                            <a href="#"> <i class="ri-share-line"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown__popup">
                                            <ul class="space-y-10">
                                                <li><a href=""> <i
                                                        class="ri-facebook-line"></i>
                                                </a>
                                                </li>
                                                <li><a href=""> <i
                                                        class="ri-messenger-line"></i>
                                                </a>
                                                </li>
                                                <li><a href=""> <i
                                                        class="ri-whatsapp-line"></i>
                                                </a>
                                                </li>
                                                <li><a href=""> <i
                                                        class="ri-youtube-line"></i>
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="more">
                                        <div class="icon">
                                            <a href="#"> <i class="ri-more-fill"></i>
                                            </a>
                                        </div>
                                        <div class="dropdown__popup">
                                            <ul class="space-y-10">
                                                <li>
                                                    <a href="#" class="space-x-10
                                                d-flex"
                                                       data-toggle="modal"
                                                       data-target="#popup_report">
                                                        <i class="ri-flag-line"></i>
                                                        <span> Report
                                                </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="numbers">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="space-y-5">
                                            <p class="color_text">Minimum bid</p>
                                            <h4>2.4000 <span class="txt_sm color_text">
                                            ETH/ $4769.88</span></h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="space-y-5">
                                            <p class="color_text">countdown</p>
                                            <div class="d-flex countdown_item
                                        align-items-center">
                                                <div class="item">
                                                    <div class="number hours">22<span></span></div>
                                                </div>
                                                <div class="dots">:</div>
                                                <div class="item">
                                                    <div class="number minutes">04<span></span></div>
                                                </div>
                                                <div class="dots">:</div>
                                                <div class="item">
                                                    <div class="number seconds">35<span></span></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <div class="space-y-20">
                                    <div class="d-flex justify-content-between
                                mb-30_reset">
                                        <ul class="nav nav-tabs d-flex space-x-10 mb-30"
                                            role="tablist">
                                            <li class="nav-item">
                                                <a
                                                        class="btn btn-white btn-sm active"
                                                        data-toggle="tab"
                                                        href="#tabs-1"
                                                        role="tab">
                                                    Details</a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                        class="btn btn-white btn-sm"
                                                        data-toggle="tab"
                                                        href="#tabs-2"
                                                        role="tab">
                                                    Bids</a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                        class="btn btn-white btn-sm"
                                                        data-toggle="tab"
                                                        href="#tabs-3"
                                                        role="tab">
                                                    History</a>
                                            </li>
                                        </ul>
                                        <!-- Tab panes -->
                                        <div class="dropdown d-none d-sm-block">
                                            <button
                                                    class="btn btn-white btn-sm
                                        dropdown-toggle"
                                                    type="button"

                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                Recent Active
                                            </button>
                                            <div
                                                    class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another
                                                    action</a>
                                                <a class="dropdown-item" href="#">Something
                                                    else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hr"></div>
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tabs-1"
                                             role="tabpanel">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia
                                            aute, non cupidatat skateboard dolor brunch. Food truck
                                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                            sunt aliqua put a bird on it squid single-origin coffee
                                            nulla assumenda shoreditch et.
                                        </div>
                                        <div class="tab-pane" id="tabs-2"
                                             role="tabpanel">
                                            <p>No active bids yet. Be the first to make
                                                a bid!</p>
                                        </div>
                                        <div class="tab-pane space-y-20" id="tabs-3"
                                             role="tabpanel">
                                            <div class="creator_item creator_card
                                        space-x-10">
                                                <div class="avatars space-x-10">
                                                    <div class="media">
                                                        <div class="badge">
                                                            <img
                                                                    :src="require('@/assets/img/icons/Badge.svg')"
                                                                    alt="">
                                                        </div>
                                                        <router-link :to="{name:'profile'}">
                                                            <img
                                                                    :src="require('@/assets/img/avatars/avatar_1.png')"
                                                                    alt="Avatar"
                                                                    class="avatar
                                                        avatar-md">
                                                        </router-link>
                                                    </div>
                                                    <div>
                                                        <p class="color_black">Bid
                                                            accepted <span
                                                                    class="color_brand">1
                                                        ETH</span> by
                                                            <router-link
                                                                    class="color_black txt
                                                        _bold"
                                                                    :to="{name:'profile'}">ayoub
                                                            </router-link>
                                                        </p>
                                                        <span class="date color_text">28/06/2021,
                                                    12:08</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="creator_item creator_card
                                        space-x-10">
                                                <div class="avatars space-x-10">
                                                    <div class="media">
                                                        <div class="badge">
                                                            <img
                                                                    :src="require('@/assets/img/icons/Badge.svg')"
                                                                    alt="">
                                                        </div>
                                                        <router-link :to="{name:'profile'}">
                                                            <img
                                                                    :src="require('@/assets/img/avatars/avatar_2.png')"
                                                                    alt="Avatar"
                                                                    class="avatar
                                                        avatar-md">
                                                        </router-link>
                                                    </div>
                                                    <div>
                                                        <p class="color_black">Bid
                                                            accepted <span
                                                                    class="color_brand">3
                                                        ETH</span> by
                                                            <router-link
                                                                    class="color_black txt
                                                        _bold"
                                                                    :to="{name:'profile'}">monir
                                                            </router-link>
                                                        </p>
                                                        <span class="date color_text">22/05/2021,
                                                    12:08</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="hr2"></div>
                            <div class="creators">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="avatars space-x-5">
                                            <div>Owner</div>
                                            <div class="media">
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                            :src="require('@/assets/img/avatars/avatar_3.png')"
                                                            alt="Avatar" class="avatar
                                                avatar-sm">
                                                </router-link>
                                            </div>
                                            <div>
                                                <router-link :to="{name:'profile'}">
                                                    <p class="avatars_name color_black">@ayoub_fouzi...</p>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="avatars space-x-5">
                                            <div>Creator</div>
                                            <div class="media">
                                                <div class="badge">
                                                    <img class="badge"
                                                         :src="require('@/assets/img/icons/Badge.svg')"
                                                         alt="">
                                                </div>
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                            :src="require('@/assets/img/avatars/avatar_2.png')"
                                                            alt="Avatar" class="avatar
                                                avatar-sm">
                                                </router-link>
                                            </div>
                                            <div>

                                                <router-link :to="{name:'profile'}">
                                                    <p class="avatars_name color_black">@makinzi_jamy...</p>
                                                </router-link>
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
<!--        <div class="py-1 bg_white">-->

<!--        </div>-->
        <div>
            <div class="container pt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-7 order-md-0 order-1">
                        <div class="profile__sidebar">
                            <div class="space-y-40">
                                <div class="space-y-10">
                                    <h5>About me</h5>
                                    <div class="box space-y-20">
                                        <p>
                                            I make art with the simple goal of giving you
                                            something
                                            pleasing to look at for a few seconds.
                                        </p>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="txt_sm color_text">Collections</span>
                                                <h4>105</h4>
                                            </div>
                                            <div class="col-6">
                                                <span class="txt_sm color_text">Creations</span>
                                                <h4>406</h4>
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
                                                    <span class="color_text">facebook/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-messenger-line"></i>
                                                    <span class="color_text"> messenger/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-whatsapp-line"></i>
                                                    <span class="color_text"> whatsapp/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="ri-youtube-line"></i>
                                                    <span class="color_text">youtube/</span>
                                                    @creabik
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p class="text-center txt_sm mt-20 color_text">Since 2021</p>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12 order-md-1 order-0">
                        <div class="profile__content">
                            <div class="d-flex justify-content-between">
                                <div class="space-x-10">
                                    <div class="d-flex justify-content-between">
                                        <ul class="nav nav-tabs d-flex space-x-10 mb-30">
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
                                        <!-- Tab panes -->
                                        <div class="dropdown d-none d-sm-block">
                                            <button
                                                    class="btn btn-white btn-sm dropdown-toggle"
                                                    type="button"

                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                Recent Active
                                            </button>
                                            <div
                                                    class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another
                                                    action</a>
                                                <a class="dropdown-item" href="#">Something
                                                    else here</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div :class="{'active':tab===1}" v-if="tab===1">
                                            <div class="row mb-30_reset">
                                                <div class="col-xl-4 col-lg-6 col-md-6" v-for="n in 6" :key="n">
                                                    <job-card></job-card>
                                                </div>

                                            </div>
                                        </div>
                                        <div v-if="tab===2" :class="{'active':tab===2}">
                                            <div class="row justify-content-center mb-30_reset">
                                                <div class="col-lg-6 col-md-6 col-sm-8" v-for="n in 6" :key="n">
                                                    <collection-card></collection-card>
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
    </div>
</template>

<script>

    import JobCard from "../components/job-card";
    import CollectionCard from "../components/collection-card";

    export default {
        data() {
            return {
                tab: 1
            }
        },
        mounted() {
            let box = this.$el.querySelectorAll('.img-box');
            box.forEach(el => {
                el.style.height = el.offsetWidth * 0.75 + 'px'
            })

        },
        components: {CollectionCard, JobCard},

    }
</script>
