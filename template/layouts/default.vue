<template lang="pug">
  div
    u-header.fixed-top(:class="`navbar-${isVeryTop ? 'dark' : 'light'}`")
    main
      nuxt
    u-footer(:class="{ 'show-gotop': !isVeryTop }")
</template>

<script>
  import $ from 'jquery'
  import UHeader from '~/components/Header.vue'
  import UFooter from '~/components/Footer.vue'

  export default {
    components: { UHeader, UFooter },
    data () {
      return {
        isVeryTop: true
      }
    },
    mounted () {
      if (process.browser) {
        this.$nextTick(() => {
          $(window).scroll(() => {
            this.isVeryTop = !($(window).scrollTop() > ($(window).height() - $('#navbar').height()) * 0.5)
          }).scroll()
        })
      }
    }
  }
</script>

<style lang="scss">
  #__nuxt {
    min-height: 100vh;
    position: relative;
  }
</style>

<style lang="scss" scoped>
  $footer-height: 6rem;

  main {
    padding-bottom: $footer-height;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: $footer-height;
  }
</style>
