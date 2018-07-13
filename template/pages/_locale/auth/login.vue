<template lang="pug">
  .login
    u-banner Login
    .container.py-5
      form
        form-input(label="E-mail", type="email")
        form-input(label="Password", type="password")
        .pb-2
        .d-flex.align-items-center
          nuxt-link.text-muted.text-uppercase(:to="$i18n.path('/auth/register')") Register
          button.btn.btn-primary.d-block.ml-auto.text-uppercase(type="submit") Login
</template>

<script>
  import UBanner from '~/components/Banner'
  import FormInput from '~/components/Form/Input'

  export default {
    components: { UBanner, FormInput },
    middleware: ['guest']
  }
</script>

<style lang="scss" scoped>
  .login {
    form {
      max-width: 25rem;
      margin: auto;
    }
  }
</style>
