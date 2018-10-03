// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store'

Vue.config.productionTip = false
// axios.defaults.baseURL = "http://139.199.206.151:3000/"
// axios.defaults.baseURL = "http://localhost:3000/"
Vue.use(axios)
Vue.prototype.http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
