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
            :item-id="item.id"
            :item-name="item.name"
            :item-minBid="item.min_bid"
            :card-image="changeImagePath(item.image)"
            :item-owner="item.owner"
            :item-isonmarket="item.is_on_market"
            :item-favoritecount="item.favorite_count"
        >
        </item-card>
      </div>
    </div>
    <div class="section__head mt-5 text-align:center">
        <div 
            class="btn btn-white btn-sm d-flex align-items-center mx-auto"
            @click="loadNextItems"
            v-if="this.isShowMore"
        >
            Show More
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
          limit: 12,
        },
        isShowMore: true,
        profileName: "",
      };
    },
    methods: {
      changeImagePath(name) {
          if (name.substring(0, 7) == "ipfs://") {
              let url = "https://gateway.pinata.cloud/ipfs/" + name.substring(7, name.length);
              return url;
          }
          else
              return name;
      },
      async loadNextItems() {
        try {
          let newData = await this.$store.dispatch(
            "item/getItemForCreator",
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
          this.filterData.keysearch = newValue;
          this.listItems = await this.$store.dispatch(
            "item/getItemForCreator",
            this.filterData
          );

          if (this.listItems.length == this.filterData.limit) {
              this.filterData.skip += this.listItems.length;
          } else
              this.isShowMore = false;

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
