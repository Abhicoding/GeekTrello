const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, './../../')))

app.all('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build/index.html'))
})

app.get('/', function (req, res) {
  res.send('hello world')
})

const port = 5000
app.listen(port, function () {
  console.log('On 5000')
})
