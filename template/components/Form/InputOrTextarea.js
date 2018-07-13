import Base from './Base'
import TwoWayBinding from './TwoWayBinding'

export default {
  mixins: [Base, TwoWayBinding],
  methods: {
    buildDomDataObject (data = {}) {
      return {
        staticClass: 'form-control',
        class: this.buildInputClasses(),
        attrs: this.buildInputAttrs(),
        domProps: this.buildInputDomProps({
          value: this.value,
          placeholder: this.placeholder
        }),
        on: { input: this.handleInput },
        ...data
      }
    }
  }
}
