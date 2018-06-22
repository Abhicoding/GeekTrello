import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import {BrowserRouter, Switch} from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
    <Switch>
      <App /> </Switch></BrowserRouter>,
  document.getElementById('root')
)
