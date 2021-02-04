import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserTag,
  faTrashAlt,
  faEdit,
  faPlus,
  faUser,
  faUsers,
  faBuilding,
  faSitemap,
  faBriefcase,
  faFile,
  faFileAlt,
  faLayerGroup,
  faIdBadge,
  faCalendarTimes,
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
library.add(faBuilding)
library.add(faSitemap)
library.add(faBriefcase)
library.add(faFile)
library.add(faFileAlt)
library.add(faLayerGroup)
library.add(faIdBadge)
library.add(faCalendarTimes)
library.add(faSignOutAlt)
library.add(faSolarPanel)

Vue.component('font-awesome-icon', FontAwesomeIcon)
