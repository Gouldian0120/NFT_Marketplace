<template>
  <div class="info text-center">
    <div class="icon mb-3" :class="infoColor"
    >
      <img v-if="icon == 'sell'" :src="require('@/assets/img/price.png')" alt="">
      <img v-if="icon == 'access_time'" :src="require('@/assets/img/watch.png')" alt="">
    </div>
    <template v-if="!infoHorizontal">
      <slot name="title" />
      <slot name="content" />
    </template>
    <template v-else>
      <div class="description">
        <slot name="title" />
        <slot name="content" />
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "InfoAreas",
    props: {
      textCenter: Boolean,
      textRight: Boolean,
      textLeft: Boolean,
      infoHorizontal: Boolean,
      iconColor: String,
      icon: String
    },
    computed: {
      infoColor() {
        return this.iconColor ? `icon-${this.iconColor}` : "";
      }
    }
};
</script>

<style lang="scss">
  .info{
      max-width: 360px;
      margin: 0 auto;
      padding: 30px 0 30px;
  }

</style>

<style>
</style>
