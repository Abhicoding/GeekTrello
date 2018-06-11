const express = require('express')
const path = require('path')

const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://adminGeekTrello:' + process.env.MONGO_ATLAS_PW + '@cluster0-giwk6.mongodb.net/test?retryWrites=true')

const testRoutes = require('./routes/test')

app.use(express.static(path.join(__dirname, './../../')))
app.use('/test', testRoutes)

app.all('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../index.html'))
})

app.listen(5000, function () {
  console.log('On 5000')
})
