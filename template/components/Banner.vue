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
    @include background-with-mask("https://picsum.photos/1920/1080");

    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      color: $white;
      font-size: 3rem;
    }
  }
</style>
