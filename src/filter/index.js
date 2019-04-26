import Constans from '../constants'
/**
 * 全局过滤器
 * @type {{}}
 */
// 默认值
const aspectAfter = (val) => {
  return val || ''
}

const filter = {
  statusFilter: (val) => {
    return aspectAfter(Constans.statusConstans[val])
  }
}

export default filter
