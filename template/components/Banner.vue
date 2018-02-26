<template lang="pug">
  section#banner.banner
    .banner-caption
      h1.text-uppercase.mb-3
        | Exquisite Experience
        br
        | Perfect Quality
      p.mb-5 We Build Great Digital Products.
      p.mb-0
        //- fa(:icon="['fal', 'arrow-circle-down']", size="3x", @click="scroll")
        fa.animated.pulse.infinite(:icon="['far', 'arrow-alt-circle-down']", size="3x", @click="scroll")
    .carousel.slide(data-ride="carousel")
      .carousel-inner
        .carousel-item(:class="{ active: i === 0 }", :key="i", v-for="(image, i) in images")
          .img(:style="`background-image: url(${image.url})`")
</template>

<script>
  import $ from 'jquery'

  export default {
    data () {
      return {
        images: [
          {
            url: 'https://picsum.photos/1920/1080?random=1',
            title: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://picsum.photos/1920/1080?random=2',
            title: 'Second slide label',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            url: 'https://picsum.photos/1920/1080?random=3',
            title: 'Third slide label',
            description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
          }
        ]
      }
    },
    methods: {
      scroll () {
        $('html, body').stop(true, true).animate({ scrollTop: $(window).height() - $('#navbar').height() })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/helpers";
  @import "~assets/scss/variables";

  .banner {
    position: relative;

    &, .carousel, .img {
      width: 100%;
      height: 100vh;
    }

    .banner-caption {
      position: absolute;
      top: 20%;
      right: 15%;
      bottom: 15%;
      left: 15%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: $white;
      text-align: center;

      h1 {
        font-size: 3rem;
        font-weight: 600;

        @include media-breakpoint-up(md) {
          font-size: 4.5rem;
        }
      }

      svg {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
      }
    }

    .carousel {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;

      .img {
        @include background;
        @include background-mask;

        position: relative;
      }
    }
  }
</style>
