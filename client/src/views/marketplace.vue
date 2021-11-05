<template>
    <div>
        <div class="hero_marketplace bg_white">
            <div class="container">
                <h1 class="text-center">NFT Marketplace</h1>
            </div>
        </div>
        <div class="bg_white border-b py-20">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <ul class="menu_categories space-x-20">
                        <li>
                            <a href="#" class="color_brand">

                                <span> All </span>
                            </a>
                        </li>
                        <li><a href="#">
                            <i class="ri-gamepad-line"></i> <span> Games </span>
                        </a>

                        </li>
                        <li><a href="#">
                            <i class="ri-brush-line"></i> <span> Art </span>
                        </a>

                        </li>
                        <li><a href="#">
                            <i class="ri-stock-line"></i> <span> Trading Cards </span>
                        </a>

                        </li>
                        <li><a href="#">
                            <i class="ri-music-line"></i> <span> Music </span>
                        </a>

                        </li>
                        <li><a href="#">
                            <i class="ri-global-line"></i> <span> Domain Names </span>
                        </a>

                        </li>
                        <li><a href="#">
                            <i class="ri-emotion-laugh-line"></i> <span> Memes </span>
                        </a>

                        </li>
                        <li><a href="#">
                            <i class="ri-layout-4-line"></i> <span> Collectibles </span>
                        </a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="seaction mt-20">
                <div class="section__head">
                    <h2 class="section__title mb-20"> Artworks</h2>
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-auto">
                            <div class="d-flex space-x-10 align-items-center">
                        <span class="color_text txt_sm" style="min-width:
                            max-content;"> FILTER BY: </span>
                                <ul class="menu_categories space-x-20">
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch1"/><label
                                            for="switch1">Toggle</label>
                                        <span> Has list price </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch2" checked/><label
                                            for="switch2">Toggle</label>
                                        <span> Has open offer </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch3"/><label
                                            for="switch3">Toggle</label>
                                        <span> Owned by creator </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch4"/><label
                                            for="switch4">Toggle</label>
                                        <span> Has sold </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-auto">
                            <div class="d-flex space-x-10 align-items-center sm:mt-20">
                                <span class="color_text txt_sm"> SORT BY: </span>
                                <div class="dropdown">
                                    <button class="btn btn-dark btn-sm dropdown-toggle"
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
                </div>
                <div class="row mb-30_reset">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" v-for="n in 8" :key="n">
                        <item-card></item-card>
                    </div>
                </div>
            </div>
            <div class="seaction mt-20">
                <div class="section__head">
                    <h2 class="section__title mb-20"> Collections</h2>
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-auto">
                            <div class="d-flex align-items-center space-x-10">
                        <span class="color_text txt_sm" style="min-width:
                            max-content;"> FILTER BY: </span>
                                <ul class="menu_categories space-x-20">
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch7"
                                        /><label
                                            for="switch7">Toggle</label>
                                        <span> Has list price </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch8"
                                               checked/><label
                                            for="switch8">Toggle</label>
                                        <span> Has open offer </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch9"
                                        /><label
                                            for="switch9">Toggle</label>
                                        <span> Owned by creator </span>
                                    </li>
                                    <li class="d-flex space-x-10 switch_item">

                                        <input type="checkbox" id="switch10"
                                        /><label
                                            for="switch10">Toggle</label>
                                        <span> Has sold </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-auto">
                            <div class="d-flex space-x-10 align-items-center sm:mt-20">
                                <span class="color_text txt_sm"> SORT BY: </span>
                                <div class="dropdown">
                                    <button class="btn btn-dark btn-sm dropdown-toggle"
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
                </div>

                <div class="row justify-content-center mb-30_reset">
                    <div class="col-lg-4 col-md-6 col-sm-8" v-for="n in 3" :key="n">
                        <collection-card></collection-card>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import ItemCard from "../components/item-card";
    import CollectionCard from "../components/collection-card";

    export default {
        name: "merketplace",
        components: {CollectionCard, ItemCard}
    }
</script>

<style scoped>

</style>