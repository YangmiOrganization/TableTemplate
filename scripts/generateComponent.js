const { vueTemplate } = require('./template')
const { File } = require('./file')
const path = require("path")
const basePath = '../src/components/view'
const filePath = 'trade/bill'
const fileName = 'test'
File.mkdirFile(path.join(basePath,filePath,`${fileName}.vue`), vueTemplate(fileName))
