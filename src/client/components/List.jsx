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

  render () {
    return <div className='listcontainer'>{this.state.title}
      <Card />
      <div className='createcard'>
        <button type='button' className='btn btn-light'> Add a new Card </button>
      </div>
    </div>
  }
}
