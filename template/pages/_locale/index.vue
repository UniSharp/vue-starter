<template lang="pug">
  .index
    u-banner
    u-features
    u-map
</template>

<script>
  import UMap from '~/components/Map'
  import UBanner from '~/components/Banner'
  import UFeatures from '~/components/Features'

  export default {
    components: { UBanner, UFeatures, UMap }
  }
</script>

<style lang="scss" scoped>
  .index {
    //
  }
</style>
