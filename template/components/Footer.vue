<template lang="pug">
  footer.bg-dark
    .container
      span.mr-auto
        | &copy; 2013 - 2017&nbsp;
        a(href="https://unisharp.com", target="_blank") UniSharp
        | &nbsp;All rights reserved.
      a(href="https://github.com/UniSharp", target="_blank")
        fa(:icon="['fab', 'github-square']")
      a(href="https://www.facebook.com/UniSharpTech", target="_blank")
        fa(:icon="['fab', 'facebook-square']")
    a.gotop.bg-white.text-dark(href="#", @click.prevent="scroll")
      //- fa(:icon="['fas', 'arrow-alt-up']")
      fa(:icon="['fas', 'arrow-up']")
</template>

<script>
  import $ from 'jquery'

  export default {
    methods: {
      scroll () {
        $('html, body').stop(true, true).animate({ scrollTop: 0 })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";

  footer {
    font-size: .75rem;

    .gotop {
      @include transition;

      position: fixed;
      right: 1rem;
      bottom: 1rem;
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }

    &:not(.show-gotop) .gotop {
      transform: translateY(5rem);
    }

    .container {
      height: 100%;
      display: flex;
      align-items: center;

      * {
        color: $text-muted;
      }

      a {
        + a {
          margin-left: 1rem;
        }

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
</style>
