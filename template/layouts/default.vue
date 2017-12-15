<template lang="pug">
  div
    u-header.fixed-top
    main
      nuxt
    u-footer
</template>

<script>
  import UHeader from '~/components/Header.vue'
  import UFooter from '~/components/Footer.vue'

  export default {
    components: { UHeader, UFooter }
  }
</script>

<style lang="scss">
  #__nuxt {
    min-height: 100vh;
    position: relative;
  }
</style>

<style lang="scss" scoped>
  $header-height: 3.5rem;
  $footer-height: 4rem;

  main {
    padding-top: $header-height;
    padding-bottom: $footer-height;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: $footer-height;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
