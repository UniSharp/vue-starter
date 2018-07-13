import InputOrTextarea from './InputOrTextarea'

export default {
  mixins: [InputOrTextarea],
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  render () {
    return this.buildFormGroup(this.$createElement('input', this.buildDomDataObject({
      attrs: this.buildInputAttrs({ type: this.type })
    })))
  }
}
