import Vue from 'vue'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-free-regular'

FontAwesome.library.add(solid)
FontAwesome.library.add(brands)
FontAwesome.library.add(regular)

Vue.mixin({
  components: { fa: FontAwesomeIcon }
})
