import request from './../utils/request'

export function getList (query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function getArticle () {
  return request({
    url: '/article/detail',
    method: 'get'
  })
}

export function getPv (pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function addArticle (data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle (data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

export default {
  getList, getArticle, getPv, addArticle, updateArticle
}
