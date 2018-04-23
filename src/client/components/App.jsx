import React, { Component } from 'react'

import Boardcreate from './Boardcreate.jsx'
import Board from './Board.jsx'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      list: ['first', 'second', 'third', 'fourth']
    }
  }

  newBoard (name) {
    this.setState({
      list: this.state.list.concat([name])
    })
  }

  render () {
    console.log(this.state.list)
    const listItem = this.state.list.map((d, i) => {
      return <li key={i}><Board board={d} /></li>
    })
    return <div>
      <h1>GeekTrello</h1>
      <ul>
        <Boardcreate create={this.newBoard.bind(this)} />
        {listItem}
      </ul>
    </div>
  }
}
