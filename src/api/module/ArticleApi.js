import BaseApi from '../base/BaseApi'
class ArticleApi extends BaseApi {
  constructor () {
    super('article', '')
  }
}

export default new ArticleApi()
