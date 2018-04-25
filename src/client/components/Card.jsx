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
    return <div className='card bg-light text-dark'>
      <div className='card-body'>
        <div className='card-title'><h4>Light Card</h4></div>
      Card Body Here</div>
    </div>
  }
}
