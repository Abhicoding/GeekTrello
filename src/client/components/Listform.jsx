import React, { Component } from 'react'

import './../scss/listform.scss'

export default class Listform extends Component {
  constructor (props) {
    super()
  }

  onFormSubmit (e) {
    e.preventDefault()
    this.props.newlist(e.target.listname.value)
    console.log(this.props.toggle())
  }

  render () {
    return <div className='form-container'>
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input className='name' name='listname' type='text' placeholder='Add a name' maxLength='512' autoComplete='off' />
        <br />
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
