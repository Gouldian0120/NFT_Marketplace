<template>
  <slide-y-up-transition :duration="300">
    <div class="modal-wrapper">
      <div
        v-click-outside="closeModal"
        class="modal-container"
        :class="type"
      >
        <template v-if="!modalWithCard">
          <div class="modal-header">
            <slot name="header" />
          </div>
          <div
            v-if="$slots.body"
            class="modal-body text-center"
          >
            <slot name="body" />
          </div>

          <div
            v-if="$slots.footer"
            class="modal-footer"
          >
            <slot name="footer" />
          </div>
        </template>

        <template v-else>
          <md-card :class="cardClasses">
            <div
              v-if="$slots.header"
              class="modal-header"
            >
              <slot name="header" />
            </div>

            <div
              v-if="$slots.body"
              class="modal-body"
            >
              <md-card-content>
                <slot name="body" />
              </md-card-content>
            </div>

            <div
              v-if="$slots.footer"
              class="modal-footer"
            >
              <md-card-actions>
                <slot name="footer" />
              </md-card-actions>
            </div>
          </md-card>
        </template>
      </div>
    </div>
  </slide-y-up-transition><!--
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
    </div>-->
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "Modal",
  components: {
    SlideYUpTransition
  },
  props: {
    type: String,
    cardClasses: String,
    modalWithCard: Boolean
  },
  methods: {
    closeModal: function() {
      this.$emit("close");
    }
  }
};
</script>
