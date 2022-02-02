<template>
  <div>
    <template v-if="type === 'image-regular' || type === 'image-circle'">
      <div class="upload file-input" :class="type" @dragover.prevent @drop="onDrop">
        <div class="pb-10"><h4>Drag &amp; drop your files here...</h4></div>
        <div class="image-container">
          <img v-if="type === 'image-circle' && inputValue && !hasImage" :src="inputValue" class="avatarImage" />
          <img v-if="type === 'image-regular' && inputValue && !hasImage" :src="inputValue" class="bannerImage"
                style="" />
          <img v-else-if="type === 'image-regular'"
            :src="imageRegular" style="" class="bannerImage"
            title="" />
          <img v-else :src="imageCircle" title="" class="avatarImage"/>
        </div>
        <span v-if="type === 'image-circle'" style="text-align:left">
          We recommend an image of at least 400x400. Gifs work too.
        </span>
        <span v-if="type === 'image-regular'">
          This image will appear at the top of your page.<br>
          1400 x 400 recommended.
        </span>
        <div class="button-container">
          <button class="btn btn-white mt-3"
            v-if="hasImage"
            @click="removeImage"
            >
            <i class="icon-remove-sign"></i>
            Remove
          </button>
          <button class="btn btn-white mt-3 btn-fileinput">
            <template v-if="type === 'image-regular' && !hasImage">
              Select image  
            </template>
            <template v-else-if="type === 'image-circle' && !hasImage">
              Select photo
            </template>
            <template v-else>
              Change
            </template>
            <input type="file" :id="id" :name="type" @change="onFileChange" accept="image/*"/>
          </button>
        </div>
      </div>
    </template>

    <template v-else-if="type === 'input'">
      <template v-if="!withButton">
        <md-field class="form-file-upload form-file-simple">
          <md-input
            :id="inputName + 'Visible'"
            v-model="inputModel"
            :placeholder="placeholder"
            @click="triggerInputFileHidden(inputName + 'Hidden')"
          />
          <input
            :id="inputName + 'Hidden'"
            type="file"
            @change="newValue(inputName + 'Visible', inputName + 'Hidden')"
          />
        </md-field>
      </template>
      <template v-if="withButton">
        <div class="form-file-group">
          <md-field class="form-file-upload form-file-simple">
            <md-input
              :id="inputName + 'Visible'"
              v-model="inputModel"
              :multiple="multiple"
              :placeholder="placeholder"
              @click="triggerInputFileHidden(inputName + 'Hidden')"
            />
            <input
              v-if="!multiple"
              :id="inputName + 'Hidden'"
              type="file"
              @change="newValue(inputName + 'Visible', inputName + 'Hidden')"
            />
            <input
              v-else
              :id="inputName + 'Hidden'"
              type="file"
              :multiple="multiple"
              @change="newValueMultiple(inputName + 'Visible', inputName + 'Hidden')"
            />
          </md-field>
          <md-button
            class="md-success md-round md-just-icon"
            @click="triggerInputFileHidden(inputName + 'Hidden')"
          >
            <md-icon>{{ btnIcon }}</md-icon>
          </md-button>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "file-upload",
  props: {
    type: String,
    inputName: String,
    inputValue: String,
    placeholder: String,
    multiple: Boolean,
    btnIcon: String,
    withButton: Boolean,
    id:String
  },
  data() {
    return {
      inputModel: null,
      inputModel2: null,
      imageRegular: require("@/assets/img/image_placeholder.jpg"),
      imageCircle: require("@/assets/img/placeholder.jpg"),
      hasImage: false,
    };
  },
  methods: {
    onFileChange(e) {
      e.preventDefault();
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let file = files[0];
      let reader = new FileReader();
      let vm = this;

      this.$emit("updateImg", file);
      reader.onload = () => {
        if (this.type === "image-circle") {
          vm.imageCircle = reader.result;
        } else {
          vm.imageRegular = reader.result;
        }
      };
      reader.readAsDataURL(file);
      vm.hasImage = true;
    },
    removeImage: function () {
      if (this.type === "image-circle") {
        this.imageCircle = require("@/assets/img/placeholder.jpg");
      } else {
        this.imageRegular = require("@/assets/img/image_placeholder.jpg");
      }
      this.hasImage = false;
    },
    changeImg(url) {
      if (this.type === "image-circle") {
        this.imageCircle = url;
      } else {
        this.imageRegular = url;
      }
    },
    triggerInputFileHidden(hiddenID) {
      let element = document.getElementById(hiddenID);
      element.click();
    },
    newValue(visibleID, hiddenID) {
      let element = document.getElementById(hiddenID);
      let visibleElem = document.getElementById(visibleID);
      let elemValue = element.value;
      let filename = elemValue.replace(/C:\\fakepath\\/i, "");

      visibleElem.value = filename;
    },
    newValueMultiple(visibleID, hiddenID) {
      let element = document.getElementById(hiddenID);
      let visibleElem = document.getElementById(visibleID);
      let names = "";
      for (var i = 0; i < element.files.length; ++i) {
        if (i < element.files.length - 1) {
          names += element.files.item(i).name + ", ";
        } else {
          names += element.files.item(i).name;
        }
      }

      visibleElem.value = names;
    },
    onDrop (e) {
      e.stopPropagation();
      e.preventDefault();
      let files = e.dataTransfer.files
      let fileInput = document.getElementById(this.id)
      fileInput.files = files

      this.onFileChange(e);
    }
  },
};
</script>

<style lang="scss">
  .btn-fileinput {

    [type="file"] {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      font-size: 23px;
      cursor: pointer;
      opacity: 0;
    }
  }

.image-container {
  //@include shadow-big-image;
  // max-width: 250px;
  margin-bottom: 10px;

  .image-circle & {
    border-radius: 50%;
    max-width: 100px;
    max-height: 100px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .image-regular & {
    border-radius: 10px;
    max-width: 480px;
    max-height: 300px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  &,
  img {
    border-radius: 4px;
  }
}

.image-container:hover {
  border:2px solid #183b56;
}

.avatarImage {
  width:100px;
  height:100px !important;
}

.bannerImage {
  width:480px;
  height:300px !important;
}
</style>
