import CheckboxOrRadio from './CheckboxOrRadio'

export default {
  mixins: [CheckboxOrRadio],
  data () {
    return {
      type: 'radio'
    }
  },
  methods: {
    isChecked (value) {
      return value === this.value
    }
  }
}
