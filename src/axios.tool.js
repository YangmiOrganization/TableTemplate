import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/JSON';
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.timeout = 20000;
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});
axios.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error);
});
Vue.prototype.$post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params)).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
};
Vue.prototype.$get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
};
