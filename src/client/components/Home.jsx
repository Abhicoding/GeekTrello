import React, { Component } from 'react'

import Boardcreate from './Boardcreate.jsx'
import Board from './Board.jsx'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      boards: ['first', 'second', 'third', 'fourth']
    }
  }

  newBoard (name) {
    this.setState({
      boards: this.state.boards.concat([name])
    })
  }

  render () {
    const boardItem = this.state.boards.map((d, i) => {
      return <li key={i}><Board board={d} /></li>
    })
    return <div>
      <ul>
        {boardItem}
        <Boardcreate create={this.newBoard.bind(this)} />
      </ul>
    </div>
  }
}
