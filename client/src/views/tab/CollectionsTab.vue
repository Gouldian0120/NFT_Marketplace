<template>
  <div class="justify-content-center mb-30_reset">
    <div v-if="listItems && listItems.length > 0" class="row mb-30_reset">
      <div
          v-for="(item, i) in listItems"
          :key="i"
          class="col-xl-4 col-lg-4 col-md-6 col-sm-6" style="width:295px"
      >
        <collection-card
            text-center
            class="mt-3"
            card-plain
            :item-id="item.id"
            :item-name="item.name"
            :card-image="item.image"
            :card-bannerimage="item.banner_image"
            :creator="item.created_by"
            :category-id="item.category_id"
            :item-count="item.count_items"
            :editable="true"
        >
        </collection-card>
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
          limit: 12,
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
      async loadFirst(newValue) {
        this.$loading(true);
        try {
          this.profileName = newValue;
          this.filterData.keysearch = newValue;
          this.listItems = await this.$store.dispatch(
            "collection/getCollectionForUser",
            this.filterData
          );

          if (this.listItems.length == this.filterData.limit) {
              this.filterData.skip += this.listItems.length;
          } else {
              this.isShowMore = false;
          }

        } catch (error) {
          this.$failAlert({
            text: error,
          });
        }
        this.$loading(false);
      },
      viewCollection(collectionId) {
        this.$router.push(`/collection/${collectionId}`);
      },
    },
  };
</script>

<style scoped>
</style>
