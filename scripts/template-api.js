// template.js
module.exports = {
  vueTemplate: (entity, className) => {
    return `import AirAccountApi from './AirAccountApi'
class ${className} extends AirAccountApi {
  constructor() {
    super('${entity}')
  }
}

export default new ${className}()
`
  }
}
