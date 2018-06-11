import React, { Component } from 'react'

import './listform.scss'

export default class Listform extends Component {
  constructor (props) {
    super()
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit (e) {
    e.preventDefault()
    if (e.target.listname.value) {
      this.props.newlist(e.target.listname.value)
    }
    console.log(this.props.toggle())
  }

  render () {
    console.log('did I render?')
    return <div className='form-container'>
      <form onSubmit={this.onFormSubmit}>
        <input className='name' name='listname' type='text' placeholder='Add a name' maxLength='512' autoComplete='off' />
        <div className='controls'>
          <input className='submit' type='submit' value='save' />
          <button type='close' className='close' aria-label='Close'>
          &times;
          </button>
        </div>
      </form>
    </div>
  }
}
