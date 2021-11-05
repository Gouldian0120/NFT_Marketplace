<template>
    <div class="modal fade popup" id="popup_bid" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body space-y-20 p-40">
                        <h3>Place a Bid</h3>
                        <p>You must bid at least <span class="color_black">15 ETH</span>
                        </p>

                        <input type="text" class="form-control"
                               placeholder="00.00 ETH">
                        <div class="hr"></div>
                        <div class="d-flex justify-content-between">
                            <p> You must bid at least:</p>
                            <p class="text-right color_black txt _bold"> 67,000 ETH </p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p> service free:</p>
                            <p class="text-right color_black txt _bold"> 0,901 ETH </p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p> Total bid amount:</p>
                            <p class="text-right color_black txt _bold"> 56,031 ETH </p>
                        </div>
                        <a href="" class="btn btn-primary w-full"
                           data-toggle="modal"
                           data-target="#popup_bid_success"
                           data-dismiss="modal"
                           aria-label="Close"> Place a bid</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "bid"
    }
</script>

<style scoped>

</style>