// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


Vue.config.productionTip = false
// axios.defaults.baseURL = "http://139.199.206.151:3000/"
// axios.defaults.baseURL = "http://localhost:3000/"
// Vue.use(axios)
Vue.use(ElementUI)
Vue.prototype.http = axios

// 捕获异常
Vue.config.errorHandler = function (error, vm, msg) {
  console.log('Have something wrong!!!');
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
