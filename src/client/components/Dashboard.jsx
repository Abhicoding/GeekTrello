import React, { Component } from 'react'

import Listcreate from './Listcreate.jsx'
import List from './List.jsx'
import Cardmodal from './Cardmodal.jsx'

import './../scss/dashboard.scss'

export default class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      lists: ['list 1'],
      cardmodal: ''
    }
  }

  newList (name) {
    this.setState({
      lists: this.state.lists.concat([name])
    })
  }

  newCardModalClose () {
    return this.setState({cardmodal: ''})
  }

  newCardModalOpen () {
    return this.setState({cardmodal: 'modal fade show'})
  }

  render () {
    const listItem = this.state.lists.map((d, i) => {
      return <li key={i}><List title={d} cardmodalopen={this.newCardModalOpen.bind(this)} /></li>
    })
    return <div className='dashboard'>
      {this.state.cardmodal ? <Cardmodal cardmodalclose={this.newCardModalClose.bind(this)} /> : null}
      <ul>
        {listItem}
        <Listcreate newlist={this.newList.bind(this)} />
      </ul>
    </div>
  }
}
