const express = require('express') // 引入express
const path = require('path')
const app = express() // 实例化express
app.use(express.static(path.join(__dirname, 'dist')))

app.listen('3000', () => {
  console.log('监听端口 3000')
})
