import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/mock/index.js'
import './plugins/element.js'
import './directive/index.js'
import './assets/style/transition.scss'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import CommonUtils from './utils/common'
/* 全局常量 */
import GlobalConstants from './constants'
/* Api引入 */
// 自定义指令
import '@/directive'
// 全局过滤器
import Filters from '@/filter'
/* 引入公共组件 */
import * as CommonComponents from '@/components'
for (const condition in Filters) {
  Vue.filter(condition, Filters[condition])
}
const components = CommonComponents.default || CommonComponents
Object.keys(components).forEach(component => {
  Vue.component(component, components[component])
})
Vue.config.productionTip = false
Vue.prototype.$utils = CommonUtils
Vue.prototype.$globalContants = GlobalConstants

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
