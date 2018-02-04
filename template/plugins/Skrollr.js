import Vue from 'vue'

if (process.browser) {
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
