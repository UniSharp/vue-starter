<template lang="pug">
  .register
    u-banner Register
    .container.py-5
      form
        .form-group
          label(for="username") Username
          input#username.form-control
        .form-group
          label(for="password") Password
          input#password.form-control(type="password")
        .form-group
          label(for="password_confirmation") Password Confirmation
          input#password_confirmation.form-control(type="password")
        .form-group
          label(for="name") Name
          input#name.form-control
        .form-group
          label(for="email") E-mail
          input#email.form-control(type="email")
        .pb-2
        button.btn.btn-primary.d-block.ml-auto.text-uppercase(type="submit") Register
</template>

<script>
  import UBanner from '~/components/Banner'

  export default {
    components: { UBanner },
    middleware: ['guest']
  }
</script>

<style lang="scss" scoped>
  .register {
    form {
      max-width: 25rem;
      margin: auto;
    }
  }
</style>
