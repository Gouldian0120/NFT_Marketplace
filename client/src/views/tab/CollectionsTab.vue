<template>
  <div class="justify-content-center mb-30_reset">
    <div v-if="listItems && listItems.length > 0" class="row mb-30_reset">
      <div
          v-for="(item, i) in listItems"
          :key="i"
          class="col-xl-4"
      >
        <collection-card
            text-center
            class="mt-3"
            card-plain
            :item-id="item._id"
            :item-name="item.name"
            :card-image="item.image"
            :card-bannerimage="item.banner_img"
            :creator="item.creator"
            :category-id="item.category_id"
            :user-info="item.user_info"
        >
        </collection-card>
      </div>
    </div>
  </div>
</template>

<script>
  import CollectionCard from "../../components/collection-card";

  export default {
    components: { CollectionCard },
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
            "collection/getCollectionForUser",
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
      viewCollection(collectionId) {
        this.$router.push(`/collection/${collectionId}`);
      },
      async loadFirst(newValue) {
        this.$loading(true);
        try {
          this.profileName = newValue;
          this.filterData.skip = 0;
          this.filterData.limit = 20;
          this.filterData.wallet_address = newValue;
          this.listItems = await this.$store.dispatch(
            "collection/getCollectionForUser",
            this.filterData
          );

          if (this.listItems.length != this.filterData.limit) {
            this.isShowMore = false;
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
