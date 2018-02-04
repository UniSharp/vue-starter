<template lang="pug">
  header.text-uppercase
    nav#navbar.navbar.navbar-expand-md
      a.navbar-brand(href="#") Navbar
      button.navbar-toggler(type="button", data-toggle="collapse", data-target="#navbar-content", aria-controls="navbar-content", aria-expanded="false", aria-label="Toggle navigation")
        span.navbar-toggler-icon
      #navbar-content.collapse.navbar-collapse
        ul.navbar-nav.ml-auto
          li.nav-item.active
            a.nav-link(href="#")
              | Home
              span.sr-only (current)
          li.nav-item
            a.nav-link(href="#") Link
          li.nav-item
            a.nav-link.disabled(href="#") Disabled
          li.nav-item.dropdown
            a#navbar-dropdown.nav-link.dropdown-toggle(href="#", role="button", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
              | Dropdown
              //- fa.ml-2(:icon="['fal', 'angle-down']", size="lg")
              //- fa.ml-2(:icon="['fas', 'angle-down']", size="lg")
            .dropdown-menu(aria-labelledby="navbar-dropdown")
              a.dropdown-item(href="#") Action
              a.dropdown-item(href="#") Another action
              .dropdown-divider
              a.dropdown-item(href="#") Something else here
</template>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/helpers";
  @import "~assets/scss/variables";

  header {
    padding: 1rem 1.5rem;
    background-color: rgba($white, 0);

    &, * {
      @include transition;
    }

    .navbar-toggler {
      outline: none !important;
    }

    // .dropdown-toggle:after {
    //   display: none;
    // }

    &.navbar-light {
      background-color: rgba($white, 1);
      box-shadow: 0 .25rem .125rem 0 rgba($gray-900, .1);
      padding: 0 1rem;
    }
  }
</style>
