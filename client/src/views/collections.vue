<template>
    <div>
        <div class="hero__collections">
            <div class="container">
                <h1>Artwork Collections</h1>
            </div>
        </div>
        <div class="seaction mt-100">
            <div class="container">
                <div class="justify-content-center mb-30_reset">
                    <div v-if="listItems && listItems.length > 0" class="row mb-30_reset">
                        <div
                            v-for="(item, i) in listItems"
                            :key="i"
                            class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
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
                            >
                            </collection-card>
                        </div>
                    </div>
                </div> 
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

import CollectionCard from "../components/collection-card";
export default {
    components: {CollectionCard},
    data() {
        return {
            listItems: [],
            filterName: "All",
            filterData: {
                skip: 0,
                limit: 12,
                keysearch: null,
            },
            isShowMore: true,
        };
    },
    async mounted() {
        this.$loading(true);
        try {
            await this.getItems();
        } catch (error) {
            this.$store.dispatch("global/showMessage",
                {   
                    kind:'show_error',
                    content: error.message
                }
            );
        }
        this.$loading(false);
    },
    computed: {
    },
    methods: {
        async getItems() {
            this.listItems = await this.$store.dispatch("collection/getAllCollections",
                this.filterData
            );

            if (this.listItems.length == this.filterData.limit) {
                this.filterData.skip += this.listItems.length;
            } else {
                this.isShowMore = false;
            }
        },
        async loadNextItems() {
            try {
                let newData = await this.$store.dispatch(
                    "collection/getAllCollections",
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
                else
                    this.isShowMore = false;
            } catch (error) {
                console.log(1212)
            }
        },
    },
}
</script>