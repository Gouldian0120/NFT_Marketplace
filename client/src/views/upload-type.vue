<template>
    <div>
        <div class="hero__upload">
            <div class="container">
                <div class="space-y-20">
                    <h2 class="text-center">Create single collectible</h2>
                    <p class="hero__text">Choose “Single” if you want your collectible
                        to
                        be one of a kind or “Multiple” if you want to sell one
                        collectible
                        multiple times</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="box text-center">
                                <img class="icon mb-20"
                                     :src="require('@/assets/img/icons/single.svg')"
                                     alt="">
                                <div class="space-y-10">
                                    <h5>Sell One Time</h5>
                                    <p class="color_text">your collectible want to be
                                        one of
                                        a kind</p>
                                    <div class="hr"></div>
                                    <router-link class="btn btn-grad btn" :to="{name:'upload'}">
                                        create single
                                    </router-link>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="box text-center">
                                <img class="icon mb-20"
                                     :src="require('@/assets/img/icons/multiple.svg')"
                                     alt="">
                                <div class="space-y-10">
                                    <h5> Sell Multiple Time</h5>
                                    <p class="color_text">your collectible want to be
                                        one of
                                        a kind</p>
                                    <div class="hr"></div>
                                    <router-link class="btn btn-grad btn" :to="{name:'upload'}">
                                        create multiple
                                    </router-link>
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

    export default {}
</script>
