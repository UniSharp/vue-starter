<template lang="pug">
  header
    nav.navbar.navbar-expand-md.navbar-light.bg-light
      a.navbar-brand(href="#") Navbar
      button.navbar-toggler(type="button", data-toggle="collapse", data-target="#navbar-content", aria-controls="navbar-content", aria-expanded="false", aria-label="Toggle navigation")
        span.navbar-toggler-icon
      #navbar-content.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          li.nav-item.active
            a.nav-link(href="#")
              | Home
              span.sr-only (current)
          li.nav-item
            a.nav-link(href="#") Link
          li.nav-item.dropdown
            a#navbar-dropdown.nav-link.dropdown-toggle(href="#", role="button", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
              | Dropdown
            .dropdown-menu(aria-labelledby="navbar-dropdown")
              a.dropdown-item(href="#") Action
              a.dropdown-item(href="#") Another action
              .dropdown-divider
              a.dropdown-item(href="#") Something else here
          li.nav-item
            a.nav-link.disabled(href="#") Disabled
        span.navbar-text Navbar text with an inline element
</template>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>
  .navbar-toggler {
    outline: none !important;
  }
</style>
