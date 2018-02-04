<template lang="pug">
  section#features
    .background(
      data-top-bottom="background-position: 50% -100px;",
      data-bottom-top="background-position: 50% 100px;",
      data-anchor-target="#features")
    .container.text-white.text-center
      h2.text-uppercase Features
      .row
        .col-sm-6.col-md-4(:key="i", v-for="(feature, i) in features")
          fa.mb-3(:icon="feature.icon", size="5x")
          p.mb-0(v-text="feature.text")
</template>

<script>
  export default {
    data () {
      return {
        features: [
          { icon: ['fab', 'aws'], text: 'AWS' },
          { icon: ['fab', 'digital-ocean'], text: 'DigitalOcean' },
          { icon: ['fab', 'linode'], text: 'Linode' },
          { icon: ['fab', 'docker'], text: 'Docker' },
          { icon: ['fab', 'php'], text: 'PHP' },
          { icon: ['fab', 'github'], text: 'GitHub' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/helpers";
  @import "~assets/scss/variables";

  #features {
    @include parallax-background("https://picsum.photos/1920/1080?random=4") {
      @include background-mask;
    }

    padding-top: 10rem;
    padding-bottom: 5rem;

    h2, .row > * {
      margin-bottom: 5rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
</style>
