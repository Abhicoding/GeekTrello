import React, { Component } from 'react'

import './../scss/list.scss'

import Card from './Card.jsx'

export default class List extends Component {
  constructor (props) {
    super()
    this.state = {
      title: props.title
    }
  }

  onCardCreate () {
    this.props.cardmodalopen()
  }

  render () {
    return <div className='listcontainer'>{this.state.title}
      <Card />
      <div className='createcard'>
        <button type='button' className='btn btn-light' onClick={this.onCardCreate.bind(this)}> Add a new Card </button>
      </div>
    </div>
  }
}
