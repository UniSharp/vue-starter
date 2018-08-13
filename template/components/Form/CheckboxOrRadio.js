import Options from './Options'

export default {
  mixins: [Options],
  props: {
    inline: {
      type: Boolean
    }
  },
  render () {
    let staticClass = `custom-control custom-${this.type}`

    if (this.inline) {
      staticClass += ' custom-control-inline'
    }

    return this.buildFormGroup(this.$createElement('div', {
      staticClass: 'custom-controls'
    }, this.normalizedItems.map((item, index) => {
      let id = `${this.id}-${index}`

      return this.$createElement('div', { staticClass }, [
        this.$createElement('input', {
          staticClass: 'custom-control-input',
          class: this.buildInputClasses(),
          attrs: this.buildInputAttrs({ type: this.type }),
          domProps: this.buildInputDomProps({ id, value: item.value })
        }),
        this.$createElement('label', {
          staticClass: 'custom-control-label',
          attrs: { for: id }
        }, item.label)
      ])
    })))
  }
}
