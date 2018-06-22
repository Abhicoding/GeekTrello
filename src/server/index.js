const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const {StaticRouter} = require('react-router-dom')

const mongoose = require('mongoose')

const path = require('path')
const fs = require('fs')

const App = require('../client/components/App.jsx')

console.log(App)

// console.log(ReactDOMServer.renderToString(<StaticRouter location={req.url}> <App /> </StaticRouter>))

const app = express()

mongoose.connect('mongodb+srv://adminGeekTrello:' + process.env.MONGO_ATLAS_PW + '@cluster0-giwk6.mongodb.net/test?retryWrites=true')

const testRoutes = require('./routes/test')

app.use('/build', express.static(path.join(__dirname, 'build')))
app.use('/test', testRoutes)

app.get('/', function (req, res) {
  const context = {}
  let app = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}> <App /> </StaticRouter>)
  fs.read(path.resolve('/public/index.html', 'utf-8', (err, data) => {
    if (err) {
      console.log('We have a problem!', err)
      return res.status(500).send('Oops!')
    }
    return res.send(data.replace('<div class="" id="root"></div>', `<div class="" id="root">${app}</div>`))
  }))
})

app.listen(5000, function () {
  console.log('On 5000')
})
