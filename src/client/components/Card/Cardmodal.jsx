import React, {Component} from 'react'

import './cardmodal.css'

export default class Cardmodal extends Component {
  constructor (props) {
    super()
    this.onClose = this.onClose.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onSubmission = this.onSubmission.bind(this)
  }

  onClose () {
    this.props.cardmodalclose()
  }

  onKeyUp (e) {
    if (e.which === 27) {
      this.props.cardmodalclose()
    }
  }

  componentDidMount () {
    document.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.onKeyUp)
  }

  onSubmission (e) {
    e.preventDefault()
    this.props.newcard(
      {
        listid: e.target.id,
        title: e.target.cardtitle.value,
        desc: e.target.description.value
      }
    )
    this.props.cardmodalclose()
  }

  render () {
    return (
      <form onSubmit={this.onSubmission} id={this.props.id}>
        <div className='modal fade show' id='myModal'style={{display: 'block'}}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <input className='titleinput' name='cardtitle' type='text' placeholder='Card Heading' required />
                <button className='close' type='button' onClick={this.onClose}>&times;</button>
              </div>
              <div className='modal-body'>
                <textarea className='descriptioninput' name='description' placeholder='Add description' />
              </div>
              <div className='modal-footer'>
                <button className='btn btn-light' type='submit'>Save</button>
                <button className='btn btn-danger' type='button'>Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-backdrop fade show' />
      </form>
    )
  }
}
