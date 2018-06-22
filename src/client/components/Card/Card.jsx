import React, { Component } from 'react'

import './card.css'

export default class Card extends Component {
  constructor (props) {
    super()
    this.state = {
      title: props.title
    }
  }

  render () {
    return <div className='card bg-light text-dark'>
      <div className='card-title'>
        <h5>{this.props.item.cardtitle}</h5>
      </div>
      <div className='card-body'>
        {this.props.item.carddesc}
      </div>
    </div>
  }
}
