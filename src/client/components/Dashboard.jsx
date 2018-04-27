import React, { Component } from 'react'

import Listcreate from './Listcreate.jsx'
import List from './List.jsx'
import Cardmodal from './Cardmodal.jsx'

import './../scss/dashboard.scss'

export default class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      lists: [
        {
          listid: 0,
          listname: 'List X',
          cards:
            [
              {
                cardtitle: 'something',
                carddesc: 'some description'
              }
            ]
        }
      ],
      cardmodal: {
        status: '',
        id: ''
      }
    }
  }

  newList (name) {
    this.setState({
      lists: this.state.lists.concat([
        {
          listid: this.state.lists.length,
          listname: name,
          cards: []
        }
      ])
    })
  }

  newCardModalClose () {
    return this.setState(
      {
        cardmodal: {
          status: '',
          id: ''
        }
      }
    )
  }

  newCardModalOpen (idinput) {
    return this.setState(
      {
        cardmodal: {
          status: 'modal fade show',
          id: idinput
        }
      }
    )
  }

  newCardCreate (cardinfo) {
    this.state.lists[cardinfo.listid].cards.push(
      {
        cardtitle: cardinfo.title,
        carddesc: cardinfo.desc
      }
    )
    this.setState({
      lists: this.state.lists
    })
  }

  render () {
    const listItem = this.state.lists.map((d, i) => {
      return <li key={i}><List item={d}
        cardmodalopen={this.newCardModalOpen.bind(this)} /></li>
    })
    return <div className='dashboard'>
      {this.state.cardmodal.status
        ? <Cardmodal cardmodalclose={this.newCardModalClose.bind(this)}
          id={this.state.cardmodal.id} newcard={this.newCardCreate.bind(this)} />
        : null}
      <ul>
        {listItem}
        <Listcreate newlist={this.newList.bind(this)} />
      </ul>
    </div>
  }
}
