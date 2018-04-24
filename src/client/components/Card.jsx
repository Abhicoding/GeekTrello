import React, { Component } from 'react'

import './../scss/card.scss'

export default class Card extends Component {
//   constructor (props) {
//     super()
//     this.state = {
//       title: props.title
//     }
//   }

  render () {
    return <div class='card bg-light text-dark'>
      <div class='card-body'>
        <div class='card-title'><h4>Light Card</h4></div>
      Card Body Here</div>
    </div>
  }
}
