export default {
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default () {
        return String.random()
      }
    },
    name: {
      type: String,
      default () {
        return String.random()
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    hint: {
      type: String
    },
    required: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    error: {
      type: String
    }
  },
  methods: {
    hasHintOrError () {
      return !!this.hint || !!this.error
    },
    hasError () {
      return !!this.error
    },
    buildFormGroup (input) {
      if (!Array.isArray(input)) {
        input = [input]
      }

      let children = [
        this.buildLabel(),
        ...input
      ]

      if (this.hasHintOrError()) {
        children.push(this.buildHintOrError())
      }

      return this.$createElement('div', {
        staticClass: 'form-group'
      }, children)
    },
    buildLabel () {
      let children = [this.label]

      if (this.required) {
        children.push(this.$createElement('span', {
          staticClass: 'u-required'
        }, '*'))
      }

      return this.$createElement('label', {
        attrs: {
          for: this.id
        }
      }, children)
    },
    buildHintOrError () {
      return this.hasError() ? this.buildError() : this.buildHint()
    },
    buildHint () {
      return this.$createElement('small', {
        staticClass: 'form-text text-muted'
      }, this.hint)
    },
    buildError () {
      return this.$createElement('small', {
        staticClass: 'invalid-feedback'
      }, this.error)
    },
    buildInputAttrs (attrs = {}) {
      return {
        readonly: this.readonly,
        ...attrs
      }
    },
    buildInputDomProps (props = {}) {
      return {
        id: this.id,
        name: this.name,
        required: this.required,
        disabled: this.disabled,
        readonly: this.readonly,
        ...props
      }
    },
    buildInputClasses (classes = {}) {
      return {
        'is-invalid': this.hasError(),
        ...classes
      }
    }
  }
}
