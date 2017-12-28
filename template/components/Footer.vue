<template lang="pug">
  footer.bg-light
    .container
      span.mr-auto
        | &copy; 2013 - 2017&nbsp;
        a(href="https://unisharp.com", target="_blank") UniSharp
        | &nbsp;All rights reserved.
      a(href="https://github.com/UniSharp", target="_blank")
        fa(:icon="['fab', 'github-square']")
      a(href="https://www.facebook.com/UniSharpTech", target="_blank")
        fa(:icon="['fab', 'facebook-square']")
</template>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/variables";

  footer {
    font-size: .75rem;

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
