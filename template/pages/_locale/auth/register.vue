<template lang="pug">
  .register
    u-banner Register
    .container.py-5
      form
        form-input(label="Name")
        form-input(label="E-mail", type="email")
        form-input(label="Password", type="password")
        form-input(label="Password Confirmation", type="password")
        .pb-2
        button.btn.btn-primary.d-block.ml-auto.text-uppercase(type="submit") Register
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
  .register {
    form {
      max-width: 25rem;
      margin: auto;
    }
  }
</style>
