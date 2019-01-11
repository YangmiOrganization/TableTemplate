import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/layout/Home')
const Test = () => import('./views/test/Test')
const Parent = () => import('./views/test/Parent')
const Login = () => import('./views/login/Login.vue')
const Directive = () => import('./views/directive/Directive.vue')
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home/test', meta: { hidden: true } },
    { path: '*', redirect: '/home/test', meta: { hidden: true } },
    { path: '/login', component: Login, meta: { hidden: true } },
    { path: '/404', component: () => import('./views/error/404.vue'), meta: { hidden: true } },
    { path: '/401', component: () => import('./views/error/401.vue'), meta: { hidden: true } },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { title: 'Table主键' },
      children: [
        {
          path: 'test',
          name: 'test',
          meta: { title: '测试', parent: 'Table主键' },
          component: Test
        },
        {
          path: 'parent',
          name: 'parent',
          meta: { title: '跨级组件通信', parent: 'Table主键' },
          component: Parent
        },
        {
          path: 'directive',
          name: 'directive',
          meta: { title: '自定义指令', parent: 'Table主键' },
          component: Directive
        }
      ]
    }]
})
