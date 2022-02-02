<template>
    <div class="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog"
             aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body space-y-20 p-40">
                    <h3 class="text-center">Your Bidding
                        Successfuly Added</h3>
                    <p class="text-center">your bid <span class="color_text txt
                    _bold">(16ETH) </span> has been listing
                        to our database</p>
                    <a href="" class="btn-white w-full"> Watch the listings</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bidSuccess"
    }
</script>

<style scoped>

</style>