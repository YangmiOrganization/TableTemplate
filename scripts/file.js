const fs = require('fs')
const File = {
  /**
   * 生成对应文件夹及文件
   * @param path
   * @param data
   */
  mkdirFile: function (path, data) {
    let p = []
    let pathArr = path.split('/')
    while (pathArr.length > 0) {
      p.push(pathArr.shift())
      if (pathArr.length === 0) {
        this.mkFile(p, data)
      } else {
        if (!fs.existsSync(p.join('/'))) {
          fs.mkdirSync(p.join('/'))
        }
      }
    }
  },
  /**
   * 生成文件
   * @param p
   * @param data
   */
  mkFile: function (p, data) {
    if (fs.existsSync(p.join('/'))) {
      console.log('文件已存在，是否覆盖?(y:覆盖,其它:取消)')
      // 如果已经存在，询问用户是否覆盖
      process.stdin.on('data', async chunk => {
        let choose = String(chunk).trim().toLowerCase().toString()
        if (choose === 'y') {
          // 创建文件
          this.writeFile(p.join('/'), data)
          console.log(`覆盖成功`)
        } else {
          console.log('放弃覆盖')
        }
        process.exit()
      })
    } else {
      this.writeFile(p.join('/'), data)
    }
  },
  /**
   * 输出
   * @param path
   * @param data
   */
  writeFile: function (path, data) {
    fs.writeFileSync(path, data)
    console.log("生成文件成功")
  }
}

module.exports = {
  File
}
