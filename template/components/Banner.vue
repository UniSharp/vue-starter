<template lang="pug">
  .banner
    .background
    h2.text-uppercase.m-0
      slot
</template>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/helpers";
  @import "~assets/scss/variables";

  .banner {
    position: relative;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .background {
      @include background("https://picsum.photos/1920/1080");
      @include background-mask;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }

    h2 {
      color: $white;
      font-size: 3rem;
    }
  }
</style>
