let express = require('express')
let app = express()
app.use(express.static('dist'))
let server = app.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
app.use(function (req, res) {
  res.status(404).send('页面不存在')
})
