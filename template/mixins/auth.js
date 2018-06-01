export default {
  computed: {
    auth () {
      return {
        check: this.$store.state.auth.check,
        user: this.$store.state.auth.user
      }
    }
  }
}
