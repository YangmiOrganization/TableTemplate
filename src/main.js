import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/mock/index.js'
import './plugins/element.js'
import './directive/directive.js'
import './assets/style/transition.scss'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import TableLayout from './components/table/TableLayout'

Vue.component('TableLayout', TableLayout)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
  store.commit('SET_CURRENT_MENU', to.meta)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
