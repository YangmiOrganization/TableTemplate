import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })// NProgress Configuration

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (true) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          next()
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || '获取用户信息失败，请重新登录！')
            next({ path: '/' })
          })
        })
      } else {
        /**
         * 判断当前用户是否有进入此页面的权限
         * 没有权限跳转404
         */if (!hasPermission(to)) {
          next({ path: '/404' })
        }
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach((from, to) => {
  store.commit('SET_CURRENT_MENU', to.meta)
  NProgress.done() // 结束Progress
})
// todo 完善判断权限方法
const hasPermission = (router) => {
  return true
}

// 根据登录用户动态匹配菜单
export const getUserMenu = (data) => {
  const menu = []
  // var1 一级菜单， var2 二级菜单， var3 按钮
  data.forEach(var1 => {
    const var1_result = permissionRouter.find(item => item.path === var1.url)
    // 首页做特殊处理
    if (var1.url === '/') {
      menu.push(var1_result)
      return
    }
    const children = []
    if (var1_result) {
      // 赋值title
      // var1_result.meta.title = var1.name
      var1.child.forEach(var2 => {
        const var2_result = var1_result.children.find(item => ('/' + item.path) === var2.url)
        if (var2_result) {
          // var2_result.meta.title = var2.name
          children.push(var2_result)
        }
      })
      var1_result.children = children
      menu.push(var1_result)
    }
  })
  return menu
}
