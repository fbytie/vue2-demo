import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'tachyons'
import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCamera, faKiwiBird, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCamera, faKiwiBird, faPaintBrush)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
