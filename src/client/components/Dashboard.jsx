import React, { Component } from 'react'

import Listcreate from './Listcreate.jsx'
import List from './List.jsx'
import Cardmodal from './Cardmodal.jsx'

import './../scss/dashboard.scss'

export default class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      lists: ['list 1', '2', '3', '4', '5', '6', '7']
    }
  }

  newList (name) {
    this.setState({
      lists: this.state.lists.concat([name])
    })
  }

  render () {
    const listItem = this.state.lists.map((d, i) => {
      return <li key={i}><List title={d} /></li>
    })
    return <div className='dashboard'>
      <Cardmodal />
      {/* <ul>
        {listItem}
        <Listcreate newlist={this.newList.bind(this)} />
      </ul> */}
    </div>
  }
}
