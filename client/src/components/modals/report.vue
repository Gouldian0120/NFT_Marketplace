<template>
    <div class="modal fade popup" id="popup_report" tabindex="-1" role="dialog"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body space-y-20 p-40">

                    <h3>Report this item</h3>
                    <div class="hr"></div>
                    <div class="form-group space-y-10">
                        <span class="variationInput">reason:</span>
                        <select class="form-select custom-select"
                                aria-label="Default select example">
                            <option> Select a reason</option>
                            <option>Purchase</option>
                            <option>Support</option>
                            <option>Technique</option>
                            <option>Service Request</option>
                        </select>
                    </div>
                    <div class="form-group space-y-10">
                        <span class="variationInput">Additional comments:</span>
                        <textarea name="..." cols="30" rows="10"
                                  placeholder="Explain why you are concerned about it."></textarea>
                    </div>
                    <a href="" class="btn btn-dark"> Report</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "report"
    }
</script>

<style scoped>

</style>