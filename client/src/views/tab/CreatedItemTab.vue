<template>
  <div class="justify-content-center mb-30_reset">
    <div v-if="listItems && listItems.length > 0" class="row">
      <div
          v-for="(item, i) in listItems"
          :key="i"
          class="col-xl-4 col-lg-4 col-md-6 col-sm-6" style="width:295px"
      >
        <item-card
            text-center
            class="mt-3"
            card-plain
            :item-id="item._id"
            :item-name="item.name"
            :item-minBid="item.minBid"
            :card-image="item.image"
        >
        </item-card>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemCard from "../../components/item-card";

  export default {
    components: { ItemCard },
    props: { walletAddress: String },
    computed: {
    },
    watch: {
      async walletAddress(newValue, oldValue) {
        if (newValue) {
          this.loadFirst(newValue);
        } else {
          this.profileName = null;
          this.filterData.wallet_address = null;
          this.listItems = [];
        }
      },
    },
    async mounted() {
      if (this.walletAddress) {
        this.loadFirst(this.walletAddress);
      }
    },

    data() {
      return {
        listItems: [],
        carouselItems: [],
        filterData: {
          skip: 0,
          limit: 20,
        },
        isShowMore: true,
        profileName: "",
      };
    },
    methods: {
      async loadNextItems() {
        try {
          let newData = await this.$store.dispatch(
            "item/getItemCreated",
            this.filterData
          );

          if (newData && newData.length > 0) {
            if (newData.length == this.filterData.limit) {
              this.filterData.skip += newData.length;
            } else {
              this.isShowMore = false;
            }
            this.listItems.push.apply(this.listItems, newData);
          }
        } catch (error) {
          this.$failAlert({
            text: error,
          });
        }
      },
      async loadFirst(newValue) {
        this.$loading(true);
        try {
          this.profileName = newValue;
          this.filterData.skip = 0;
          this.filterData.limit = 20;
          this.filterData.wallet_address = newValue;
          this.listItems = await this.$store.dispatch(
            "item/getItemCreated",
            this.filterData
          );

          if (this.listItems.length != this.filterData.limit) {
            this.isShowMore = false;
          }

          for (let index = 0; index < this.listItems.length; index++) {
              let tmp = Math.floor(index / 3);
              if (this.carouselItems.length == tmp) {
                  this.carouselItems.push([]);
              }
              this.carouselItems[tmp].push(this.listItems[index]);
          }
        } catch (error) {
          this.$failAlert({
            text: error,
          });
        }
        this.$loading(false);
      },
    },
  };
</script>

<style scoped>
</style>
