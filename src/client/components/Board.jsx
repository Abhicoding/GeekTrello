import React, { Component } from 'react'

import boardstyle from './../scss/board.scss'

export default class Board extends Component {
  constructor (props) { // Here props need to be array object of boards
    super()
    // this.state = {
    //   boards: props.boards
    // }
    console.log(props.board)
  }
  render () {
    return <div className='boards'>
      <button className='card'>
        {this.props.board}
      </button>
    </div>
  }
}
