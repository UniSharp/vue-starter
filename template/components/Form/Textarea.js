import InputOrTextarea from './InputOrTextarea'

export default {
  mixins: [InputOrTextarea],
  render () {
    return this.buildFormGroup(this.$createElement('textarea', this.buildDomDataObject()))
  }
}
