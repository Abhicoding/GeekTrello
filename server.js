const express = require('express')

const app = express()

app.get('/ping', function (req, res) {
  res.pong('send')
})

const port = 5000

app.listen(port, function () {
  console.log('Express server running on ' + port)
})
