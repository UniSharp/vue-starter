export default {
  props: ['value'],
  methods: {
    handleInput (e) {
      return this.$emit('input', e.target.value)
    }
  }
}
