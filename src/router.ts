import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/layout/Home.vue'
const Test = () => import(/* webpackChunkName: "about" */ './views/test/Test.vue')
const Test2 = () => import(/* webpackChunkName: "about" */ './views/test/Test2.vue')
const TableTemplate = () => import(/* webpackChunkName: "about" */ './components/TableLayout.vue')

Vue.use(Router)

const router =  new Router({
  routes: [
    // @ts-ignore
    { path: '/404', hidden: true, component: () => import('./views/error/404.vue')},
    { path: '*', hidden: true, redirect: '/404' },
    { path: '/', hidden: true, redirect: '/demo/test' },
    {
      path: '/demo',
      name: 'home',
      component: Home,
      meta:{title:'菜单1'},
      children:[
        {
          path: 'test',
          name: 'test',
          meta:{title:'table主键测试'},
          component: Test
        },
        {
          path: 'test2',
          name: 'test2',
          meta:{title:'文章列表'},
          component: Test2
        },
      ]
    },
  ]
})

router.beforeEach((to: any, from: any, next: () => void) => {
  // todo 做某些判断
  next();
})

router.afterEach((to: any, from: any) => {
})
export default router
