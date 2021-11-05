<template>
    <div>
        <div class="hero__creators">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-6">
                        <div class="space-y-20">
                            <h1>Popular Creators</h1>
                            <p class="hero__text">
                                I make art with the simple goal of giving you something
                                pleasing to
                                look at for a few seconds.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-auto">
                        <router-link class="btn btn-dark" :to="{name:'connect-wallet'}"> be
                            one of our creators
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3" v-for="(n,index) in 4" :key="index">
                    <creator-card :index="index"></creator-card>
                </div>
            </div>
        </div>

        <div class="section__creators mt-100">
            <div class="container">
                <div class="space-y-30">
                    <div class="section_head">
                        <h2 class="section__title text-center">Popular Creators</h2>
                    </div>
                    <div class="section__body space-y-20">
                        <div class="d-flex space-x-10 justify-content-center
                    creators_anim1">
                            <div class="creator_item creator_card space-x-10" v-for="n in 10" :key="n">
                                <creator-avatar-card></creator-avatar-card>
                            </div>
                        </div>
                        <div class="-ml-70 creators_anim2">
                            <div class="d-flex space-x-10 justify-content-center">
                                <div class="creator_item creator_card space-x-10" v-for="n in 10" :key="n">
                                    <creator-avatar-card></creator-avatar-card>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex space-x-10 justify-content-center creators_anim3">
                            <div class="creator_item creator_card space-x-10" v-for="n in 10" :key="n">
                                <creator-avatar-card></creator-avatar-card>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="section__creators mt-100">
            <div class="container">
                <div class="space-y-30">
                    <div class="section_head">
                        <div class="row justify-content-between
                    align-items-center">
                            <div class="col-lg-auto">
                                <h2 class="section__title">Discover all Creators</h2>
                            </div>
                            <div class="col-lg-4">
                                <div class="search">
                                    <input type="text" placeholder="Search"
                                           class="bg_white" style="background:white
                                !important">
                                    <button class="result">
                                        <i class="ri-search-line"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="col-lg-auto">
                                <div class="dropdown">
                                    <button class="btn btn-primary btn-sm
                                dropdown-toggle"
                                            type="button"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                        Recent Active
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else
                                            here</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="section__body space-y-20">
                        <div class="row mb-20_reset">
                            <div class="col-lg-4" v-for="n in 6" :key="n">
                                <div class="creator_item creator_card space-y-20 mb-20">
                                    <div class="avatars flex-column space-y-10">
                                        <div class="cover">
                                            <img
                                                    :src="require('@/assets/img/items/cover_1.png')"
                                                    alt="Avatar" class="img-fluid">
                                        </div>
                                        <div class="media">
                                            <router-link :to="{name:'profile'}">
                                                <img
                                                        :src="require('@/assets/img/avatars/avatar_5.png')"
                                                        alt="Avatar" class="avatar
                                            avatar-md">
                                            </router-link>
                                        </div>
                                        <div class="details text-center">
                                            <div>
                                                <p class="color_black txt_lg">191
                                                    <span
                                                            class="txt_sm">ETH</span></p>
                                                <p class="color_black txt_sm">Sold</p>
                                            </div>
                                            <div>
                                                <p class="color_black txt_lg">345</p>
                                                <p class="color_black txt_sm">Collections</p>
                                            </div>
                                            <div>
                                                <p class="color_black txt_lg">17,005</p>
                                                <p class="color_black txt_sm">Views</p>
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
    import CreatorCard from "../components/creator-card";
    import CreatorAvatarCard from "../components/creator-avatar-card";

    export default {
        name: "creators",
        components: {CreatorAvatarCard, CreatorCard}
    }
</script>

<style scoped>

</style>