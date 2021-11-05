<template>
    <div>
        <div class="mb-100">
            <div class="hero__profile">
                <div class="cover">
                    <img
                            :src="require('@/assets/img/bg/prrofile.png')" alt="">
                </div>
                <div class="infos">
                    <div class="container">
                        <div class="row flex-wrap align-items-center
                    justify-content-between">
                            <div class="col-md-auto mr-20">
                                <div class="avatars d-flex space-x-20
                            align-items-center">
                                    <div class="avatar_wrap">
                                        <img class="avatar avatar-lg"
                                             :src="require('@/assets/img/avatars/avatar_4.png')"
                                             alt="avatar">
                                    </div>
                                    <h5>@ayoub fennouni</h5>
                                </div>
                            </div>
                            <div class="col-md-auto">
                                <div class="d-flex flex-wrap align-items-center
                            space-x-20 mb-20_reset">
                                    <div class="mb-20">
                                        <div class="copy">
                                    <span class="color_text"> 13b9ebda0178...
                                    </span>
                                            <a href="#">
                                                <i class="ri-file-copy-line color_text"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-wrap align-items-center
                                space-x-20">
                                        <div class="mb-20">
                                            <router-link :to="'btn'" class="btn btn-dark btn-sm">
                                                Follow
                                            </router-link>

                                        </div>
                                        <div class="mb-20">
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
                                        </div>
                                        <div class="mb-20">
                                            <div class="more">
                                                <div class="icon">
                                                    <a href="#"> <i
                                                            class="ri-more-fill"></i>
                                                    </a>
                                                </div>
                                                <div class="dropdown__popup">
                                                    <ul class="space-y-10">
                                                        <li>
                                                            <a href="#"
                                                               class="space-x-10
                                                        d-flex">
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

                                <div class="tab-content">
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
</template>

<script>

    import CollectionCard from "../components/collection-card";
    import JobCard from "../components/job-card";

    export default {
         data(){
          return{
              tab:1
          }
        },
        components: {JobCard, CollectionCard}
    }
</script>
