import Vue from 'vue'
import { fab } from '@fortawesome/free-brands-svg-icons'
{{# travis }}
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
{{ else }}
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
{{/ travis }}
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

{{# travis }}
library.add(fab, fas, far)
{{ else }}
library.add(fab, fal, fas, far)
{{/ travis }}

Vue.mixin({
  components: { fa: FontAwesomeIcon }
})
