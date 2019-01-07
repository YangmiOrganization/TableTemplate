export class UrlConstants {
  LOGIN_URL:string
  ARTICLE_URL:string
  constructor(){
    this.LOGIN_URL = process.env.VUE_APP_LOGIN_URL;
    this.ARTICLE_URL = process.env.VUE_APP_ARTICLE_URL;
  }
}
