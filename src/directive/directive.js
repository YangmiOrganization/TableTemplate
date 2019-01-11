import Vue from 'vue'
import { getTwoFloat } from './../assets/utils/utils'

Vue.directive('native-float', {
  update: function (el, binding, vnode) {
    el.value = getTwoFloat(el.value)
    el.dispatchEvent(new Event('input'))
    console.log('native-float')
  }
})

Vue.directive('el-float', {
  update: function (el, binding, vnode) {
    el.value = getTwoFloat(el.value)
    el.dispatchEvent(new Event('input'))
    console.log('el-float')
  }
})
