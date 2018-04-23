import React, { Component } from 'react'
import {Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Home from './Home.jsx'

export default class App extends Component {
  render () {
    return <Router history={createBrowserHistory()}>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
      </div>
    </Router>
  }
}
