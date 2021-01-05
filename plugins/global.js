import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserTag,
  faTrashAlt,
  faEdit,
  faPlus,
  faUser,
  faUsers,
  faSignOutAlt,
  faSolarPanel
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserTag)
library.add(faTrashAlt)
library.add(faEdit)
library.add(faPlus)
library.add(faUser)
library.add(faUsers)
library.add(faSignOutAlt)
library.add(faSolarPanel)

Vue.component('font-awesome-icon', FontAwesomeIcon)
