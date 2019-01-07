import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $moment from 'moment'
import './assets/mock/index.js'
import './plugins/element.js'
import 'normalize.css/normalize.css'
// 导入封装好的axios
import './axios.tool';
// url常量
import {UrlConstants} from  './assets/constants/constants'
Vue.config.productionTip = false
Vue.prototype.$UrlConstants = new UrlConstants()
Vue.prototype.$moment = $moment
export const $vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
