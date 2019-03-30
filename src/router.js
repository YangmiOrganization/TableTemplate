import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/layout/Home')
const TableDemo = () => import('./views/table/TableDemo')
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
      path: '/demo',
      name: 'home',
      component: Home,
      meta: { title: '封装组件' },
      children: [
        {
          path: 'table',
          name: 'table',
          meta: { title: '表格', parent: '封装组件' },
          component: TableDemo
        },
        {
          path: 'form',
          name: 'form',
          meta: { title: '表单', parent: '封装组件' },
          component: () => import('./views/form/FormDemo.vue')
        },
        {
          path: 'upload',
          name: 'upload',
          meta: { title: '上传', parent: '封装组件' },
          component: () => import('./views/upload/UploadDemo.vue')
        },
        {
          path: 'dialog',
          name: 'dialog',
          meta: { title: '弹窗', parent: '封装组件' },
          component: () => import('./views/dialog/DialogDemo.vue')
        }
      ]
    },
    {
      path: '/test',
      name: 'home',
      component: Home,
      meta: { title: '测试' },
      children: [
        {
          path: 'parent',
          name: 'parent',
          meta: { title: '跨级组件通信', parent: '测试' },
          component: Parent
        },
        {
          path: 'directive',
          name: 'directive',
          meta: { title: '自定义指令', parent: '测试' },
          component: Directive
        }
      ]
    }]
})
