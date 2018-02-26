<template lang="pug">
  header.text-uppercase
    nav#navbar.navbar.navbar-expand-md
      nuxt-link.navbar-brand(to="#") Navbar
      button.navbar-toggler(type="button", data-toggle="collapse", data-target="#navbar-content", aria-controls="navbar-content", aria-expanded="false", aria-label="Toggle navigation")
        span.navbar-toggler-icon
      #navbar-content.collapse.navbar-collapse
        ul.navbar-nav.ml-auto
          li.nav-item.active
            nuxt-link.nav-link(to="#", @click.native="hideCollapse")
              | Home
              span.sr-only (current)
          li.nav-item
            nuxt-link.nav-link(to="#", @click.native="hideCollapse") Link
          li.nav-item
            nuxt-link.nav-link.disabled(to="#") Disabled
          li.nav-item.dropdown
            a#navbar-dropdown.nav-link.dropdown-toggle(href="#", role="button", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false", v-text="locales[locale]")
              //- fa.ml-2(:icon="['fal', 'angle-down']", size="lg")
              //- fa.ml-2(:icon="['fas', 'angle-down']", size="lg")
            .dropdown-menu.dropdown-menu-right(aria-labelledby="navbar-dropdown")
              a.dropdown-item(href="#", @click.prevent="changeLocale(locale)", :key="locale", v-for="(text, locale) in locales", v-text="text")
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
      },
      changeLocale (locale) {
        this.$router.push(this.$route.path.replace(/^\/[^/]+/, `/${locale}`))
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/helpers";
  @import "~assets/scss/variables";

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
      }

      .navbar-toggler {
        padding-left: 0;
        padding-right: 0;
        border: none;
        outline: none !important;

        .navbar-toggler-icon {
          width: 1.75em;
          height: 1.75em;
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
      }
    }

    @include media-breakpoint-down(sm) {
      .navbar {
        .nav-link, .dropdown-item {
          padding: 1rem .5rem;
        }

        .dropdown-menu {
          border: none;
          margin: 0;
          padding: 0 1rem;
        }
      }

      &:not(.navbar-light) {
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

      &.navbar-light {
        .navbar-collapse {
          margin-top: .5rem;
        }

        .nav-item {
          border-top: 1px solid $gray-200;
        }
      }
    }
  }
</style>
