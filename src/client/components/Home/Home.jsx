import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Boardcreate from './../Boards/Boardcreate.jsx'
import Board from './../Boards/Board.jsx'

import './home.css'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      boards: ['first', 'second', 'third', 'fourth']
    }
    this.newBoard = this.newBoard.bind(this)
  }

  newBoard (name) {
    this.setState({
      boards: this.state.boards.concat([name])
    })
  }

  render () {
    const boardItem = this.state.boards.map((d, i) => {
      return <li key={i}><Link to='/board'><Board board={d} /></Link></li>
    })
    return <div className='divboard'>
      <ul>
        {boardItem}
        <Boardcreate create={this.newBoard} />
      </ul>
    </div>
  }
}
