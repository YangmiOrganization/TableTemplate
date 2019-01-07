import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

//axios.defaults.baseURL = '';
//axios.defaults.headers.common['Authorization'];
axios.defaults.headers.post['Content-Type'] = 'application/JSON';
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
// 请求超时的时间限制
axios.defaults.timeout = 20000;
// 开始设置请求 发起的拦截处理
// config 代表发起请求的参数的实体
axios.interceptors.request.use((config: any) => {
  // todo 设置亲请求头
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

// 请求到结果的拦截处理
axios.interceptors.response.use( (response: any) => {
  return response.data;
}, (error: any) => {
  return Promise.reject(error);
  // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
});
// 将axios 的 post 方法，绑定到 vue 实例上面的 $post
Vue.prototype.$post =  (url: any, params: any) => {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params)).then((res: any) => {
      resolve(res);
    }).catch((err: any) => {
      reject(err);
    });
  });
};
// 将axios 的 get 方法，绑定到 vue 实例上面的 $get
Vue.prototype.$get =  (url: any, params: any) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params }).then((res: any) => {
      resolve(res); // 返回请求成功的数据 data
    }).catch((err: any) => {
      reject(err);
    });
  });
};
