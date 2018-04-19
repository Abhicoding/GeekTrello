import React, { Component } from 'react'

import './../scss/board.scss'

export default class Board extends Component {
  constructor (props) { // Here props need to be array object of boards
    super()
    this.state = {
      board: props.board
    }
  }
  render () {
    return <div className='boards'>
      <button className='card'>
        {this.state.board}
      </button>
    </div>
  }
}
