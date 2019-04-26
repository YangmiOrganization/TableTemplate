const { vueTemplate } = require('./template-api')
const { File } = require('./file')
const path = require('path')
const basePath = __dirname

const filePath = '../src/api/module/airAccount'
const entitys = [
  'role',
  'authority',
  'log',
  'questionAnswer',
  'sysConstant',
  'reservation',
  'securityChannel',
  'contrabandCfg',
  'terminalUser',
  'contrabandReport'
]

for (let index = 1; index < entitys.length; index++) {
  const entity = entitys[index]
  const fileName = `AirAccount${entity.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}Api`
  File.mkdirFile(path.join(basePath, filePath, `${fileName}.js`), vueTemplate(entity, fileName))
}
