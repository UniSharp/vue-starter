<template lang="pug">
  .container.d-flex.flex-column.align-items-center.justify-content-center
    logo
    .caption.my-3.text-center
      h1.display-3.text-dark {{ name }}
      h2.display-4.text-muted {{ description }}
    .links
      a.btn.btn-lg.btn-outline-success.px-4.mr-3(href="https://nuxtjs.org/", target="_blank") Documentation
      a.btn.btn-lg.btn-outline-dark.px-4(href="https://github.com/nuxt/nuxt.js", target="_blank") GitHub
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
  }
</style>
