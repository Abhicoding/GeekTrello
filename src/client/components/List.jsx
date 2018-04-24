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
    return <div className='list-container'>{this.state.title}
      <Card />
    </div>
  }
}
