<template lang="pug">
  .index
    u-cover
    u-features
    u-map
</template>

<script>
  import UMap from '~/components/Map'
  import UCover from '~/components/Cover'
  import UFeatures from '~/components/Features'

  export default {
    components: { UCover, UFeatures, UMap }
  }
</script>

<style lang="scss" scoped>
  .index {
    //
  }
</style>
