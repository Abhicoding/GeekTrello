const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

const port = 5000
app.listen(port, function () {
  console.log('On 5000')
})
