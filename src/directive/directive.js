import Vue from 'vue'
import { getTwoFloat } from './../assets/utils/utils'

Vue.directive('native-float', {
  inserted: function (el, binding, vnode) {
    let event = binding.arg === 'lazy' ? 'change' : 'input'
    addEvent({
      el: el,
      event: event,
      binding: binding,
      vnode: vnode
    })
  }
})

Vue.directive('el-float', {
  inserted: function (el, binding, vnode) {
    let event = binding.arg === 'lazy' ? 'change' : 'input'
    addEvent({
      el: el.firstElementChild,
      event: event,
      binding: binding,
      vnode: vnode
    })
  }
})

function addEvent ({ el, event, binding, vnode }) {
  el.addEventListener(event, function (e) {
    let arr = Object.keys(binding.modifiers)
    let obj = vnode.context._data
    while (arr.length > 0) {
      if (arr.length === 1) {
        if (e.target.value) {
          obj[arr.shift()] = getTwoFloat(e.target.value)
        } else {
          obj[arr.shift()] = ''
        }
      } else {
        obj = obj[arr.shift()]
      }
    }
  })
}
