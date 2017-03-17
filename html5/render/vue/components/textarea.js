import { extend, mapFormEvents } from '../utils'
// import { validateStyles } from '../validator'

export default {
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    }
  },

  render (createElement) {
    /* istanbul ignore next */
    // if (process.env.NODE_ENV === 'development') {
    //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:textarea', {
      attrs: {
        'weex-type': 'textarea',
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        rows: this.rows
      },
      domProps: {
        value: this.value
      },
      on: extend(this._createEventMap(), mapFormEvents(this)),
      staticClass: 'weex-textarea weex-el',
      staticStyle: this._normalizeInlineStyles(this.$vnode.data)
    }, this.value)
  }
}
