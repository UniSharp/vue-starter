import Options from './Options'

export default {
  mixins: [Options],
  render () {
    let options = this.normalizedItems.map(item => this.$createElement('option', {
      domProps: { value: item.value }
    }, item.label))

    if (this.placeholder) {
      options.unshift(this.$createElement('option', {
        attrs: { selected: true }
      }, this.placeholder))
    }

    return this.buildFormGroup(this.$createElement('select', {
      staticClass: 'custom-select',
      class: this.buildInputClasses(),
      attrs: this.buildInputAttrs(),
      domProps: this.buildInputDomProps()
    }, options))
  }
}
