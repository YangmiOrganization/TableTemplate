/**
 * 公共工具方法
 */
const _ = require('lodash')
// 深度克隆
const cloneDeep = (val) => {
  return _.cloneDeep(val)
}
// 重置对象（仅最外层)
const reset = val => {
  if (Object.keys(val).length) {
    const data = _.mapValues(val, (value, key) => {
      // "[object Type]"
      let type = toString.call(value)
      type = type.replace(/^(\[object )([\w]+)(\])$/, '$2')
      // null 和 Undefined 需要特殊判断
      if (type === 'Null') {
        return null
      } else if (type === 'Undefined') {
        return undefined
      } else {
        return eval(`${type}()`)
      }
    })
    return data
  }
  throw new Error('请传入合法参数')
}

const IMG_BASE_URL = `${process.env.VUE_APP_BASE_API}/file/imgs/show/`

// 回显图片
const imgWrapper = (val) => {
  return IMG_BASE_URL + val
}

const imgWrapperRevert = (val) => {
  return val.replace(IMG_BASE_URL, '')
}

export default {
  cloneDeep, reset, imgWrapper, imgWrapperRevert
}
