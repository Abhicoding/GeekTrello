import React, { Component } from 'react'

import Listcreate from './Listcreate.jsx'

import './../scss/dashboard.scss'

export default class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      list: ['list 1']
    }
  }

  newList (name) {
    this.setState({
      list: this.state.list.concat([name])
    })
  }

  render () {
    return <div>
      <Listcreate newlist={this.newList.bind(this)} />
    </div>
  }
}
