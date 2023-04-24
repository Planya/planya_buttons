import Vue from 'vue'
import App from './App.vue'
import router from './router'
import feather from 'vue-icon'
import { VLazyImagePlugin } from 'v-lazy-image'
import EventBus from 'vue-bus-ts'
import Ripple from 'vue-ripple-directive'
import utils from '@/lib/utils'

Ripple.color = 'rgba(255, 255, 255, 0.2)'
Ripple.zIndex = 55

import '@/assets/css/main.scss'
import i18n from '@/i18n'

Vue.use(VLazyImagePlugin)
Vue.use(feather, 'v-icon')
Vue.directive('ripple', Ripple)
Vue.use(EventBus)
Vue.config.productionTip = false
Vue.prototype.$utils = utils

const bus = new EventBus.Bus()
new Vue({
  bus,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
