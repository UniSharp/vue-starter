import CheckboxOrRadio from './CheckboxOrRadio'

export default {
  mixins: [CheckboxOrRadio],
  data () {
    return {
      type: 'checkbox'
    }
  },
  methods: {
    isChecked (value) {
      return this.value.contains(value)
    },
    handleChange (e) {
      let value = e.target.value
      let payload = e.target.checked ? [...this.value, value] : this.value.reject(other => other === value)

      return this.$emit('change', payload)
    }
  }
}
