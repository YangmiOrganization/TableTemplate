import request from '@/utils/request'
export default class BaseApi {
  constructor (entity) {
    this.BASEURL = `/${entity}`
  }
  page (data) {
    return request.get(`${this.BASEURL}/list`, { params: data })
  }
  export (data) {
    return request.exportExcel(`${this.BASEURL}/export`, data)
  }
  add (data) {
    return request.post(`${this.BASEURL}/add`, data)
  }
  del (id) {
    return request.delete(`${this.BASEURL}/${id}`)
  }
  update (data) {
    return request.put(`${this.BASEURL}/update`, data)
  }
  get (id) {
    return request.get(`${this.BASEURL}/${id}`)
  }
  list () {
    return request.get(`${this.BASEURL}/list`)
  }
}
