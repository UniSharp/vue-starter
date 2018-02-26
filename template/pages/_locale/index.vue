<template lang="pug">
  .index
    u-banner
    u-features
    u-map
</template>

<script>
  import UBanner from '~/components/Banner.vue'
  import UFeatures from '~/components/Features.vue'
  import UMap from '~/components/Map.vue'

  export default {
    components: { UBanner, UFeatures, UMap }
  }
</script>

<style lang="scss" scoped>
  .index {
    //
  }
</style>
