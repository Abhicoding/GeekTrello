import React, { Component } from 'react'

import './list.scss'

import Card from './../Card/Card.jsx'

export default class List extends Component {
  constructor (props) {
    super()
    this.state = {
      item: props.item
    }
    this.onCardCreate = this.onCardCreate.bind(this)
  }

  onCardCreate (e) {
    this.props.cardmodalopen(e.target.id)
  }

  render () {
    const cardItem = this.state.item.cards.map((d, i) => {
      return <li key={i}><Card item={d} /></li>
    })
    return <div className='listcontainer'>
      <div className='listheader'>
        {this.state.item.listname}
      </div>
      <ul>
        {cardItem}
      </ul>
      <div className='createcard'>
        <button type='button' id={this.state.item.listid} className='btn btn-light' onClick={this.onCardCreate}> Add a new Card </button>
      </div>
    </div>
  }
}
