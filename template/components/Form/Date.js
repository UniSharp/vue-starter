import Datepicker from 'vuejs-datepicker'
import InputOrTextarea from './InputOrTextarea'

export default {
  mixins: [InputOrTextarea],
  components: { Datepicker },
  props: {
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    }
  },
  methods: {
    handleInput (date) {
      return this.$emit('input', date)
    }
  },
  render () {
    return this.buildFormGroup(this.$createElement('datepicker', this.buildDomDataObject({
      staticClass: '',
      attrs: this.buildInputAttrs({
        format: this.format,
        bootstrapStyling: true
      })
    })))
  }
}
