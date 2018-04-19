import React, { Component } from 'react'

import style from './../scss/boardcreate.scss'

export default class Boardcreate extends Component {
  render () {
    return <div className='boardcreate'>
      <button className='cardcreate'>
        Create Board
      </button>
    </div>
  }
}
