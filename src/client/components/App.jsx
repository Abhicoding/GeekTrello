import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Header/Header.jsx'

import Home from './Home/Home.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch className='app'>
            <Route exact path='/home' component={Home} />
            <Route path='/board' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
