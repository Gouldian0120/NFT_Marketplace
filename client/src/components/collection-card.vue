<template>
    <div class="collections space-y-10 mb-30" style="width:280px">
        <router-link :to="{name:'collections'}">
            <div class="collections_item">
                <div class="images-box space-y-10">
                    <div v-lazy-container="{ selector: 'img' }">
                        <img class="loadimg" :data-src="cardImage" :data-loading="loadimage"/>
                    </div>
                </div>
            </div>
        </router-link>
        <div class="collections_footer justify-content-between pl-2 pr-2">
            <h5 class="collection_title">
                <router-link :to="{name:'collections'}">
                    <span class="txt_sm" style="color:yellow">{{showShortName(this.itemName)}}</span>
                </router-link>
            </h5>
            <span class="txt_md" style="color:red"> {{this.item.items.length}} items</span>
        </div>
        <div class="creators space-x-10">
            <div class="avatars space-x-5">
                <router-link :to="'/profile/' + this.creator">
                    <img
                        :src="require('@/assets/img/avatars/avatar_2.png')"
                        alt="Avatar" class="avatar avatar-sm">
                </router-link>
            </div>
            <router-link :to="'/profile/' + this.creator">
                <p class="avatars_name txt_sm color_green">{{showShortName(this.creator)}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collection-card",
        props: {
            itemId: String,
            itemName: String,
            cardImage: String,
            cardBannerImage: String,
            creator: String,
            categoryId: String,
            userInfo: String
        },
        data() {
            return {
                loadimage: require("@/assets/img/loading.gif"),
                item: null,
            };
        },
        async mounted() {
           try {
                this.item = await this.getItem();
            } 
            catch (error) {
                console.log("error11")
            }
        },
        methods: {
            showShortName(name) {
                if (name.length < 25)
                    return name;
                else
                    return (
                        name.substring(0, 6) +
                        "..." +
                        name.substring(name.length - 8, name.length)
                    );
            },
            getItem() {
                return this.$store.dispatch("collection/getDetailCollection", { id: this.itemId });
            },
        },
    }
</script>

<style scoped>
    .loadimg {
        width: 100% !important;
        height: 178px !important;
        text-align: center;
        border-radius: 12px;
    }
</style>