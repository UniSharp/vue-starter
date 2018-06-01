<template lang="pug">
  header.text-uppercase
    nav#navbar.navbar.navbar-expand-md
      nuxt-link.navbar-brand(to="#")
        .logo
          img.white(src="~/assets/images/logo-white.svg")
          img.black(src="~/assets/images/logo-black.svg")
        span UniSharp
      button.navbar-toggler.collapsed(type="button", data-toggle="collapse", data-target="#navbar-content", aria-controls="navbar-content", aria-expanded="false", aria-label="Toggle navigation")
        span.navbar-toggler-icon
      #navbar-content.collapse.navbar-collapse
        ul.navbar-nav.ml-auto
          li.nav-item.active
            nuxt-link.nav-link(to="#", @click.native="hideCollapse")
              | Home
              span.sr-only (current)
          li.nav-item
            nuxt-link.nav-link(to="#features", @click.native="hideCollapse") Features
          li.nav-item
            nuxt-link.nav-link(to="#map", @click.native="hideCollapse") Map
          {{# i18n }}
          li.nav-item.dropdown
            a#navbar-dropdown.nav-link.dropdown-toggle(href="#", role="button", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false", v-text="locales[locale]")
              //- fa.ml-2(:icon="['fal', 'angle-down']", size="lg")
              //- fa.ml-2(:icon="['fas', 'angle-down']", size="lg")
            .dropdown-menu.dropdown-menu-right(aria-labelledby="navbar-dropdown")
              a.dropdown-item(href="#", @click.prevent="changeLocale(locale)", :key="locale", v-for="(text, locale) in locales", v-text="text")
          {{/ i18n }}
</template>

<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['locale', 'locales'])
    },
    methods: {
      hideCollapse () {
        $('#navbar-content').collapse('hide')
      {{# i18n }}
      },
      changeLocale (locale) {
        this.$router.push(this.$route.path.replace(/^\/[^/]+/, `/${locale}`))
      {{/ i18n }}
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/helpers";
  @import "~assets/scss/variables";

  @mixin navbar-collapse-style {
    &.navbar {
      .nav-link, .dropdown-item {
        padding: 1rem .5rem;
      }

      .dropdown-menu {
        border: none;
        margin: 0;
        padding: 0 1rem;
      }
    }

    header:not(.navbar-light) & {
      .navbar-collapse {
        @include border-radius;

        margin-top: 1rem;
        padding: .75rem 1.5rem;
        background-color: rgba($white, 1);

        .nav-link {
          color: $navbar-light-color;

          @include hover-focus {
            color: $navbar-light-hover-color;
          }

          &.disabled {
            color: $navbar-light-disabled-color;
          }
        }

        .show > .nav-link, .active > .nav-link, .nav-link.show, .nav-link.active {
          color: $navbar-light-active-color;
        }
      }
    }

    header.navbar-light & {
      .navbar-collapse {
        margin-top: .5rem;
      }

      .nav-item {
        border-top: 1px solid $gray-200;
      }
    }
  }

  header {
    padding: 1rem;
    background-color: rgba($white, 0);

    &, * {
      @include transition;
    }

    .navbar {
      padding: 0;

      .navbar-brand {
        font-size: 1.75rem;
        display: flex;
        align-items: center;

        .logo {
          margin-top: -.25rem;
          margin-left: .25rem;
          margin-right: .5rem;
          position: relative;
          width: 3.75rem;

          &, img {
            height: 2.25rem;
          }

          img {
            position: absolute;
            top: 0;
            left: 0;

            &.black {
              opacity: 0;
            }
          }
        }
      }

      .navbar-toggler {
        width: 1.75em;
        height: 1.75em;
        padding-left: 0;
        padding-right: 0;
        border: none;
        outline: none !important;
        display: flex;
        align-items: center;
        justify-content: center;

        .navbar-toggler-icon {
          position: relative;
          background-image: none;

          &, &:before, &:after {
            @include transition;
            @include border-radius(.25em);

            flex: 0 0 auto;
            width: 1.75em;
            height: .2em;
            background-color: $navbar-dark-color;
          }

          &:before, &:after {
            content: "";
            position: absolute;
            left: 0;
          }

          &:before {
            top: -.45em;
          }

          &:after {
            bottom: -.45em;
          }
        }

        &:hover .navbar-toggler-icon {
          &:before {
            top: -.55em;
          }

          &:after {
            bottom: -.55em;
          }
        }

        &:not(.collapsed) {
          .navbar-toggler-icon {
            width: 0;
            background-color: rgba($navbar-dark-color, 0);

            &:before, &:after {
              left: -.875em !important;
            }

            &:before {
              top: 0 !important;
              transform: rotate(45deg);
            }

            &:after {
              bottom: 0 !important;
              transform: rotate(-45deg);
            }
          }

          &:not(:hover) .navbar-toggler-icon {
            transform: scale(.9);
          }
        }
      }

      .dropdown-menu {
        min-width: auto;
      }

      // .dropdown-toggle:after {
      //   display: none;
      // }
    }

    &.navbar-light {
      background-color: rgba($white, 1);
      box-shadow: 0 .25rem .125rem 0 rgba($gray-900, .1);
      padding: .5rem 1rem;

      .navbar-brand {
        font-size: 1.5rem;

        .logo {
          width: 3rem;

          &, img {
            height: 1.75rem;
          }

          img {
            &.white {
              opacity: 0;
            }

            &.black {
              opacity: 1;
            }
          }
        }
      }

      .navbar-toggler {
        .navbar-toggler-icon {
          &, &:before, &:after {
            background-color: $navbar-light-color;
          }
        }

        &:not(.collapsed) .navbar-toggler-icon {
          background-color: rgba($navbar-light-color, 0);
        }
      }
    }
  }

  .navbar-expand-never {
    @include navbar-collapse-style;
  }

  .navbar-expand {
    @each $breakpoint in map-keys($grid-breakpoints) {
      $next: breakpoint-next($breakpoint, $grid-breakpoints);
      $infix: breakpoint-infix($next, $grid-breakpoints);

      &#{$infix} {
        @include media-breakpoint-down($breakpoint) {
          @include navbar-collapse-style;
        }

        @include media-breakpoint-up($next) {
          .navbar-toggler {
            display: none !important;
          }
        }
      }
    }
  }
</style>
