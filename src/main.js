import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './veeValidate'
import router from './router'
import store from './store'
import axios from 'axios'
import * as API from  './api/index'
Vue.prototype.$API = API

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
