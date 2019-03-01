import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import globalColor from '@/components/api/globalColor.js'

Vue.config.productionTip = false
Vue.prototype.globalColor = globalColor

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
