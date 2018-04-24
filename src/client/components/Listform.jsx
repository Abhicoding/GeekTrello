import React, { Component } from 'react'

import './../scss/listform.scss'

export default class Listform extends Component {
  constructor (props) {
    super()
  }
  render () {
    return <div className='form-container'>
      <form>
        <input className='name' type='text' placeholder='Add a name' maxLength='512' autoComplete='off' />
        <br />
        <div className='controls'>
          <input className='submit' type='submit' value='save' onSubmit={this.props.toggle} />
          <button type='close' className='close' aria-label='Close'>
          &times;
          </button>
        </div>
      </form>
    </div>
  }
}
