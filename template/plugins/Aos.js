import Vue from 'vue'
import MobileDetect from 'mobile-detect'

if (process.browser && !new MobileDetect(window.navigator.userAgent).mobile()) {
  const AOS = require('aos')
  let initialized = false

  require('aos/dist/aos.css')

  Vue.mixin({
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$nextTick(() => {
          if (!initialized) {
            AOS.init({
              offset: 200,
              duration: 600,
              easing: 'ease-in-sine'
            })

            initialized = true
          } else {
            AOS.refreshHard()
          }
        })
      })
    }
  })
}
