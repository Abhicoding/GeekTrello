import React, { Component } from 'react'

import './listcreate.css'
import Listform from './Listform.jsx'

export default class Listcreate extends Component {
  constructor (props) {
    super()
    this.state = {
      liststatus: true
    }
    this.onClickToggle = this.onClickToggle.bind(this)
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
          ? <input className='addlist' type='submit' value='Add list' onClick={this.onClickToggle} /> : null}
      </div>
      <div className='formdiv'>{!this.state.liststatus ? <Listform toggle={this.onClickToggle} newlist={this.props.newlist.bind(this)} /> : null}
      </div>
    </div>
  }
}
