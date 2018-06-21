const express = require('express')
const ReactDOMServer = require('react-dom/server')
const mongoose = require('mongoose')

const path = require('path')
const fs = require('fs')

const App = require('../client/index.js')

const app = express()

mongoose.connect('mongodb+srv://adminGeekTrello:' + process.env.MONGO_ATLAS_PW + '@cluster0-giwk6.mongodb.net/test?retryWrites=true')

const testRoutes = require('./routes/test')

app.use('/build', express.static(path.join(__dirname, './../../build')))
app.use('/test', testRoutes)

app.get('/', function (req, res) {
  let app = ReactDOMServer.renderToString(<App />)
})

app.listen(5000, function () {
  console.log('On 5000')
})
