// vue.config.js
module.exports = {
  // 这一层都是VueCLI3项目的配置，会被预先使用，并有必要会赋给webpack，但在这之前，Vue CLI 在一些其他地方也需要用到这个值，而这个值也能做到区分生产环境和开发环境。
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  configureWebpack: config => {
    // 注意这一层里只能改webpack相关的配置，如果在这一层调整上层的配置可能会有非预期的结果，从你的需求来看你现在就想要在这一层里修改baseUrl这个参数？
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
