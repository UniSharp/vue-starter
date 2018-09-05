import Options from './Options'

export default {
  mixins: [Options],
  methods: {
    isSelected (value) {
      return value === this.value
    }
  },
  render () {
    let options = this.normalizedItems.map(item => this.$createElement('option', {
      domProps: { value: item.value, selected: this.isSelected(item.value) }
    }, item.label))

    if (this.placeholder) {
      options.unshift(this.$createElement('option', this.placeholder))
    }

    return this.buildFormGroup(this.$createElement('select', {
      staticClass: 'custom-select',
      class: this.buildInputClasses(),
      attrs: this.buildInputAttrs(),
      domProps: this.buildInputDomProps(),
      on: { change: this.handleChange }
    }, options))
  }
}
