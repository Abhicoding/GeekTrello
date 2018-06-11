import React, { Component } from 'react'
import {Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Header from './Header/Header.jsx'

// import Home from './Home.jsx'
// import Dashboard from './Dashboard.jsx'

export default class App extends Component {
  render () {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route path='/' component={Header} />
          {/* <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/board' component={Dashboard} /> */}
        </div>
      </Router>
    )
  }
}
