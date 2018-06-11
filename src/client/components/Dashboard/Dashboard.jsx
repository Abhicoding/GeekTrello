import React, { Component } from 'react'

import Listcreate from './../List/Listcreate.jsx'
import List from './../List/List.jsx'
import Cardmodal from './../Card/Cardmodal.jsx'

import './dashboard.scss'

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
    this.newList = this.newList.bind(this)
    this.newCardModalClose = this.newCardModalClose.bind(this)
    this.newCardModalOpen = this.newCardModalOpen.bind(this)
    this.newCardCreate = this.newCardCreate.bind(this)
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
        cardmodalopen={this.newCardModalOpen} /></li>
    })
    return <div className='dashboard'>
      {this.state.cardmodal.status
        ? <Cardmodal cardmodalclose={this.newCardModalClose}
          id={this.state.cardmodal.id} newcard={this.newCardCreate} />
        : null}
      <ul>
        {listItem}
        <Listcreate newlist={this.newList} />
      </ul>
    </div>
  }
}
