const statusConstans = { active: '启用', inactive: '停用' }
// 常量转为下拉选项
// [{label:label,value:value}]
const toOptions = (val) => {
  return val ? Object.keys(val).map(item => {
    return {
      label: val[item],
      value: item
    }
  }
  ) : {}
}

export default {
  toOptions, statusConstans
}
