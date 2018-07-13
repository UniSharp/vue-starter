import Base from './Base'

export default {
  mixins: [Base],
  render () {
    return this.buildFormGroup(this.$createElement('div', {
      staticClass: 'custom-file'
    }, [
      this.$createElement('input', {
        staticClass: 'custom-file-input',
        class: this.buildInputClasses(),
        props: this.buildInputDomProps(),
        attrs: { type: 'file' }
      }),
      this.$createElement('label', {
        staticClass: 'custom-file-label',
        attrs: {
          for: this.id
        }
      }, this.placeholder)
    ]))
  }
}
