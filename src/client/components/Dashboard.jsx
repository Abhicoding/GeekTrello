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

  render () {
    // console.log(this.state.list)
    // const listItem = this.state.list.map((d, i) => {
    //   return <li key={i}><Board board={d} /></li>
    // })
    return <div>
      <Listcreate />
    </div>
  }
}
