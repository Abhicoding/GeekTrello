import React, { Component } from 'react'
import {Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Logo from './Logo.jsx'
import Home from './Home.jsx'
import Dashboard from './Dashboard.jsx'

export default class App extends Component {
  render () {
    return <Router history={createBrowserHistory()}>
      <div>
        <Route path='/' component={Logo} />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/board' component={Dashboard} />
      </div>
    </Router>
  }
}
