import React, { Component } from 'react'

import Boardcreate from './Boardcreate.jsx'
import Board from './Board.jsx'

export default class App extends Component {
  render () {
    const list = ['first', 'second', 'third', 'fourth']
    const listItem = list.map((d, i) => {
      return <li key={i}><Board board={d} /></li>
    })
    return <div>
      <h1>GeekTrello</h1>
      <Boardcreate />
      <ul>{listItem}</ul>
    </div>
  }
}
