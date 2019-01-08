import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/layout/Home.vue'
const Test = () => import(/* webpackChunkName: "about" */ './views/test/Test.vue')
const Test2 = () => import(/* webpackChunkName: "about" */ './views/test/Test2.vue')
const Demo = () => import(/* webpackChunkName: "about" */ './views/test/Demo.vue')
const Login = () => import(/* webpackChunkName: "about" */ './views/login/Login.vue')

Vue.use(Router)

const router =  new Router({
  routes: [
    { path: '/404',  component: () => import('./views/error/404.vue'),meta:{hidden: true,}},
    { path: '*',  redirect: '/404' ,meta:{ hidden: true }},
    { path: '/',  redirect: '/demo/test' ,meta:{ hidden: true }},
    { path: '/login',  component: Login ,meta:{ hidden: true }},
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
        {
          path: 'demo',
          name: 'demo',
          meta:{title:'demo'},
          component: Demo
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
