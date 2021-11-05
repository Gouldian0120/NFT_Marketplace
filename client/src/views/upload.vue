<template>
    <div>
        <div class="hero__upload">
            <div class="container">
                <div class="space-y-20">
                    <router-link :to="{name:'upload-type'}" class="btn btn-white btn-sm
                switch">
                        Switch
                        to Multiple</router-link>
                    <h2 class="title">Create single collectible</h2>

                </div>
            </div>
        </div>
        <div class="modal fade popup" id="popup_preview" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body space-y-20 p-0">
                        <div class="card__item three m-0 in__popup">
                            <div class="card_body space-y-10">
                                <!-- ???? =============== -->
                                <div class="card_head">
                                    <img :src="require('@/assets/img/items/item_4.png')"
                                         alt="">
                                    <a href="#" class="likes space-x-3">
                                        <i class="ri-heart-3-fill"></i>
                                        <span class="txt_sm">2.1k</span>
                                    </a>
                                    <div class="action">
                                        <a href="#" class="btn btn-primary btn-sm">
                                            <i class="ri-pie-chart-line color_white"></i>
                                            Place Your Bid
                                        </a>
                                    </div>
                                </div>
                                <!-- ???? =============== -->
                                <h6 class="card_title">
                                    Colorful Abstract Painting
                                </h6>
                                <div class="card_footer d-block space-y-10">
                                    <div class="d-flex justify-content-between">
                                        <div class="creators space-x-10">
                                            <div class="avatars -space-x-20">
                                                <router-link :to="{name:'profile'}">
                                                    <img
                                                            :src="require('@/assets/img/avatars/avatar_3.png')"
                                                            alt="Avatar" class="avatar
                                                avatar-sm">
                                                </router-link>
                                               <router-link :to="{name:'profile'}">
                                                    <img
                                                            :src="require('@/assets/img/avatars/avatar_2.png')"
                                                            alt="Avatar" class="avatar
                                                avatar-sm">
                                               </router-link>
                                            </div>
                                             <router-link :to="{name:'profile'}">
                                                <p class="avatars_name txt_sm">
                                                    @makinzi_jamy... </p>
                                             </router-link>
                                        </div>
                                        <a href="#" class="space-x-3">
                                            <p class="color_green txt_sm">0.001 ETH</p>
                                        </a>
                                    </div>
                                    <div class="hr"></div>
                                    <a href="#" class="d-flex align-items-center
                                space-x-10">
                                        <i class="ri-vip-crown-line"></i>
                                        <p class="color_text txt_sm" style="width:
                                    auto;">Highest bid</p>
                                        <span class="color_black txt_sm">0.001 ETH</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box in__upload mb-120">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="left__part space-y-40 md:mb-20 upload_file">
                            <div class="space-y-20">
                                <img class="icon"
                                     :src="require('@/assets/img/icons/upload.svg')"
                                     alt="">
                                <h5>Drag and drop your file</h5>
                                <p class="color_text">PNG, GIF, WEBP, MP4 or MP3. Max
                                    100mb.</p>
                            </div>
                            <div class="space-y-20">
                                <p class="color_text">or choose a file</p>
                                <a href="#" class="btn btn-white"> Browse files </a>
                                <input type="file">

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group space-y-10">
                            <div class="space-y-20">
                                <div class="space-y-10">
                                    <span class="nameInput">Title</span>
                                    <input type="text" class="form-control"
                                           placeholder="e. g. `raroin design art`">
                                </div>
                                <div class="space-y-10">
                            <span class="nameInput">Description <span
                                    class="color_text">
                                    (optional) </span></span>
                                    <input type="text" class="form-control"
                                           placeholder="e. g. `raroin design art`">
                                </div>
                                <div class="space-y-10">
                                    <span class="variationInput">Price</span>
                                    <select class="form-select custom-select"
                                            aria-label="Default select example">
                                        <option> 00.00 ETH</option>
                                        <option>01.00 ETH</option>
                                        <option>02.00 ETH</option>
                                        <option>10.00 ETH</option>
                                        <option>20.00 ETH</option>
                                    </select>
                                </div>
                                <div class="space-y-10">
                                    <span class="variationInput">Choose collection</span>
                                    <div class="d-flex flex-column flex-md-row">
                                        <a href="" class="choose_collection mb-10
                                    mb-md-0 mr-0 mr-md-3">
                                            <div class="icon">

                                                <i class="ri-add-line"></i>
                                            </div>
                                            New collection</a>
                                        <a href="" class="choose_collection is_brand">
                                            <img
                                                    :src="require('@/assets/img/icons/raroin_icon.svg')"
                                                    alt="">
                                            Raroin Collection </a>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <p class="color_black">
                            <span class="color_text text-bold"> Service fee : </span>
                            2.5%
                        </p>
                        <p class="color_black">
                    <span class="color_text text-bold"> You will receive :
                    </span>
                            22.425 ETH $41,637.78
                        </p>
                        <p>


                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed_row bottom-0 left-0 right-0">
            <div class="container">
                <div class="row content justify-content-between mb-20_reset">
                    <div class="col-md-auto col-12 mb-20">
                        <div class="space-x-10">
                            <router-link :to="{name:'upload'}"> class="btn btn-white
                              others_btn"> Cancel</router-link>
                            <a href="#" class="btn btn-dark others_btn"
                               data-toggle="modal"
                               data-target="#popup_preview"> Preview</a>

                        </div>
                    </div>
                    <div class="col-md-auto col-12 mb-20">
                        <router-link :to="{name:'item-details'}"> class="btn btn-grad
                    btn_create"> Create
                          item</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {}
</script>
