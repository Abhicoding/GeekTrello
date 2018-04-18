import React, { Component } from 'react'

class Hello extends Component {
  constructor () {
    super()
    this.state = {
      hello: ''
    }
  }

  componentDidMount () {
    fetch('/ping')
      .then(res => res)
      .then(res => res.json())
      .then(res => console.log(res))
  }

  render () {
    return (
      <div className='hello'>
        <h1>{this.state.hello}</h1>
      </div>
    )
  }
}

export default Hello
