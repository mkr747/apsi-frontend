import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUsers,
  faSignOutAlt,
  faSolarPanel
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUsers)
library.add(faSignOutAlt)
library.add(faSolarPanel)

Vue.component('font-awesome-icon', FontAwesomeIcon)
