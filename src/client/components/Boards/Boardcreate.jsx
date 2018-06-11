import React, { Component } from 'react'

import './boardcreate.scss'

export default class Boardcreate extends Component {
  constructor (props) {
    super()
  }

  passBoardName () {
    let name = prompt('Add a name for your board')
    if (name) {
      this.props.create(name)
    }
  }

  render () {
    return <div className='boardcreate'>
      <button className='cardcreate' onClick={this.passBoardName.bind(this)}>
        Create Board
      </button>
    </div>
  }
}
