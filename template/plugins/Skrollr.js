import Vue from 'vue'
import MobileDetect from 'mobile-detect'

if (process.browser && !new MobileDetect(window.navigator.userAgent).mobile()) {
  let skrollr

  Vue.mixin({
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$nextTick(() => {
          if (!skrollr) {
            skrollr = require('skrollr').init({ forceHeight: false })
          } else {
            skrollr.refresh()
          }
        })
      })
    }
  })
}
