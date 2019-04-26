import axios from 'axios'
import moment from 'moment'
import { Message, MessageBox, Loading } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非1是抛错
     */
    const res = response.data
    // 下载做特殊处理
    if (response.data.constructor === Blob.prototype.constructor) {
      download(response)
      return
    }
    // 获取token接口需要特殊处理  返回没有code
    if (res.code && res.code !== 1) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })

      // token失效
      if (res.code === 698 || res.code === 699) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
const exportExcelPost = (url, data) => {
  return service.request(({ // 用axios发送post请求
    method: 'post',
    url: url, // 请求地址
    data: data, // 参数
    responseType: 'blob' // 表明返回服务器返回的数据类型
  }))
}
const exportExcelGet = (url, data) => {
  return service.request({ // 用axios发送post请求
    url: url, // 请求地址
    params: data, // 参数
    responseType: 'blob' // 表明返回服务器返回的数据类型
  })
}

// 下载文件
function download (res, fileName) {
  try {
    const content = res.data
    const blob = new Blob([content], { type: 'application/x-xls' })
    const fileName_arr = res.headers['content-disposition'].match(/filename=(\S*)/)
    if (fileName_arr.length > 0) {
      fileName = decodeURI(fileName_arr[0].replace('filename=', ''))
    }
    if ('download' in document.createElement('a')) { // 非IE下载
      const elink = document.createElement('a')
      elink.download = fileName
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href) // 释放URL 对象
      document.body.removeChild(elink)
    } else { // IE10+下载
      navigator.msSaveBlob(blob, fileName)
    }
  } finally {
    Loading.service({}).close()
  }
}

/**
 * 方法扩展：导出excel
 * @param url
 * @param data
 * @param method
 * @param filename
 */
service.exportExcel = (url, data, method, filename) => {
  Loading.service({ fullscreen: true, text: '下载中', customClass: 'onload' })
  method = (method || 'get').toLowerCase(),
  filename = filename || moment().format('YYYY-MM-DD') + '.xls'
  let action = () => {}
  switch (method) {
    case 'post':
      action = exportExcelPost(url, data)
      break
    default:
      action = exportExcelGet(url, data)
      break
  }
  action
}

export default service
