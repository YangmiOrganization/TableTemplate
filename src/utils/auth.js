import Cookies from 'js-cookie'
import Constants from '../constants'
export function getToken () {
  return Cookies.get(Constants.loginConstant.token_key)
}

export function setToken (token) {
  return Cookies.set(Constants.loginConstant.token_key, token)
}

export function removeToken () {
  return Cookies.remove(Constants.loginConstant.token_key)
}
