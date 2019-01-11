import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import LoginApi from './assets/api/login'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {},
    current_menu: {},
    token: '',
    collapse: true
  },
  mutations: {
    SET_USER: (state, data) => {
      state.user = data
    },
    SET_TOKEN: (state, data) => {
      state.token = data
    },
    SET_CURRENT_MENU: (state, data) => {
      state.current_menu = data
    },
    SET_COLLAPSE: (state, data) => {
      state.collapse = data || !state.collapse
    }
  },
  getters: {
    collapse: state => state.collapse,
    avatar: state => state.user.avatar,
    current_menu: state => state.current_menu
  },
  actions: {
    toggleCollapse ({ commit }) {
      commit('SET_COLLAPSE')
    },
    // 登录
    Login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        LoginApi.login(data)
          .then(res => {
            // TODO 增加判断
            commit('SET_USER', res)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        LoginApi.logout()
          .then(res => {
            // TODO 待补充
            commit('SET_USER', {})
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
