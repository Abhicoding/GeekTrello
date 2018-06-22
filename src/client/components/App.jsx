import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header/Header.jsx'

import Home from './Home/Home.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'

import './application.css'

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/home' component={Home} />
        <Route path='/board' component={Dashboard} />
      </div>
    )
  }
}

module.exports = App
