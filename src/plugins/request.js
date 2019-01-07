import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 1) {
      Message({
        message: res.data.message,
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(res.data)
    } else {
      return response.data
    }
  },
  error => {
    Message({
      message: error.message || error,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default request
