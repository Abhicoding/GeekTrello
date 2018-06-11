import React, { Component } from 'react'

import './listcreate.scss'
import Listform from './Listform.jsx'

export default class Listcreate extends Component {
  constructor (props) {
    super()
    this.state = {
      liststatus: true
    }
  }

  onClickToggle () {
    this.setState({
      liststatus: !this.state.liststatus
    })
  }

  render () {
    return <div className='listcreate'>
      <div className='buttondiv' >
        {this.state.liststatus
          ? <input className='addlist' type='submit' value='Add list' onClick={this.onClickToggle.bind(this)} /> : null}
      </div>
      <div className='formdiv'>{!this.state.liststatus ? <Listform toggle={this.onClickToggle.bind(this)} newlist={this.props.newlist.bind(this)} /> : null}
      </div>
    </div>
  }
}