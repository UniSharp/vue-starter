<template lang="pug">
  .banner
    .carousel.slide(:id="id", data-ride="carousel")
      ol.carousel-indicators
        li(:class="{ active: i === 0 }", :data-target="`#${id}`", :data-slide-to="i", :key="i", v-for="(image, i) in images")
      .carousel-inner
        .carousel-item(:class="{ active: i === 0 }", :key="i", v-for="(image, i) in images")
          img.d-block.w-100(:src="image.url")
          .carousel-caption
            h3 {{ image.title }}
            p.mb-0 {{ image.description }}
      a.carousel-control-prev(:href="`#${id}`", role="button", data-slide="prev")
        span.carousel-control-prev-icon(aria-hidden="true")
        span.sr-only Previous
      a.carousel-control-next(:href="`#${id}`", role="button", data-slide="next")
        span.carousel-control-next-icon(aria-hidden="true")
        span.sr-only Next
</template>

<script>
  export default {
    data () {
      return {
        id: null,
        images: [
          {
            url: 'https://picsum.photos/1920/822?random=1',
            title: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://picsum.photos/1920/822?random=2',
            title: 'Second slide label',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            url: 'https://picsum.photos/1920/822?random=3',
            title: 'Third slide label',
            description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
          }
        ]
      }
    },
    created () {
      this.id = `u-banner-${this._uid}`
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-caption {
    background-color: rgba(0, 0, 0, .15);
  }
</style>
