<template>
    <div>
        <div class="hero__upload">
            <div class="container">
                <div class="space-y-20">
                    <h2 class="title">Create Collection</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box in__upload mb-120">
                <div class="row">
                    <div class="col-lg-6">
                        <div style="height:280px">
                            <p><span class="nameInput p-20">Logo Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    type="image-circle"
                                    @updateImg="
                                    (img) => {
                                        newCollection.fileAvatar = img;
                                    }
                                        "
                                    />
                            </div>
                        </div>      
                        <div class="mt-70" style="height:505px">
                            <p><span class="nameInput p-20">Banner Image*</span></p>
                            <div class="left__part mt-10">
                                <file-upload
                                    type="image-regular"
                                    @updateImg="
                                        (img) => {
                                            newCollection.fileBanner = img;
                                        }
                                    "
                                    >
                                </file-upload>
                            </div>
                        </div>
                        <div class="space-y-10 mt-100">
                            <span class="nameInput p-20">Links</span>
                            <input type="text" class="form-control"
                                    v-model="newCollection.socials.facebook"
                                    placeholder="https://www.facebook.com/abcdef">
                            <input type="text" class="form-control"
                                    v-model="newCollection.socials.twitter"
                                    placeholder="@YourTwitterHandle">
                            <input type="text" class="form-control"
                                    v-model="newCollection.socials.instagram"
                                    placeholder="@YourInstagramHandle">
                            <input type="text" class="form-control"
                                    v-model="newCollection.socials.medium"
                                    placeholder="@YourMediumHandle">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group space-y-10">
                            <div class="space-y-20">
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Name*</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.name"
                                            placeholder="Collection Name">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Description </span>
                                    <textarea class="form-control" spellcheck="true" style="height:190px"
                                            v-model="newCollection.description"
                                            placeholder="Provide your description for your collection"/>
                                </div>
                                <div class="space-y-5">
                                    <span class="variationInput p-20">Choose Category</span>
                                    <select 
                                        class="form-select custom-select"
                                        id="selectCategory"
                                        v-model="newCollection.category_id"
                                        name="selectCategory"
                                        placeholder="Select Category"
                                        aria-label="Default select example">
                                        <option style="font-size:15px"
                                            v-for="(item, i) in listCategory"
                                            :key="i"
                                            :value="item.id"
                                            >
                                            {{ item.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Royalty*</span>
                                    <input type="number" class="form-control"
                                            v-model="newCollection.royalty"
                                            placeholder="" value="0">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Fee Recipient*</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.recipient"
                                            placeholder="Fee Recipient">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Contract address*</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.contractAddress"
                                            placeholder="0x...">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Project Website</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.short_url"
                                            placeholder="https://myproject.com">
                                </div>
                                <div class="space-y-5">
                                    <span class="nameInput p-20">Your Email</span>
                                    <input type="text" class="form-control"
                                            v-model="newCollection.creator_email"
                                            placeholder="contact@project.com">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="content justify-content-between mt-40 mb-20_reset" style="margin-left:44%">
                    <div class="mb-20">
                        <router-link :to="{name:'collections'}">
                            <div class="btn btn-grad btn_create" @click="createCollection"> 
                                Create Cellection
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FileUpload from "../components/file-upload";
    
    export default {
        components: {
            FileUpload
        },
        data() {
            return {
                newCollection: { socials: {} },
                image: require("@/assets/img/bg7.jpg"),
            };
        },
        computed: {
            listCategory() {
                return this.$store.state.category.categories;
            },
            userData() {
                return this.$store.state.user.information;
            },
        },
        async mounted() {
            if (!this.userData) {
              this.$router.push("/connect-wallet");
            }
        },
        methods: {
            async createCollection() {
                if (this.userData) {
                    this.$loading(true);
                    this.newCollection.created_by = this.userData.address;
                    try {
                        const result = await this.$store.dispatch(
                            "collection/createCollection",
                            this.newCollection
                        );

                        this.$loading(false);
                    } 
                    catch (error) {
                        this.$loading(false);
                        this.$failAlert({
                            text: error,
                        });
                    }
                } else {
                    this.$router.push("/connect-wallet");
                }
            },
        },
    };
</script>

<style scoped>
.upload {
  cursor: pointer;
  background-color:transparent;
  width:100%;
  box-sizing: border-box;
  border-radius:15px;
  border: 1px dashed #fff;
  transform: scale(1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.or {
  text-transform: uppercase;
  font-weight: 700;
  color: #936d96;
  margin: 10px 0;
}
.browse {
  background: #ccc;
  padding: 10px 45px;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
}

</style>