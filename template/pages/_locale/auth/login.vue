<template lang="pug">
  .login
    u-banner Login
    .container.py-5
      form
        .form-group
          label(for="username") Username
          input#username.form-control
        .form-group
          label(for="password") Password
          input#password.form-control(type="password")
        .pb-2
        button.btn.btn-primary.d-block.ml-auto.text-uppercase(type="submit") Login
</template>

<script>
  import UBanner from '~/components/Banner'

  export default {
    components: { UBanner },
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
