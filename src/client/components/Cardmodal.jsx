import React, {Component} from 'react'

import './../scss/cardmodal.scss'

export default class Cardmodal extends Component {
  constructor (props) {
    super()
  }

  onClose () {
    this.props.cardmodalclose()
  }

  onKeyUp = (e) => {
    if (e.which === 27) {
      this.props.cardmodalclose()
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount(){
    document.removeEventListener('keyup', this.onKeyUp)
  }

  onSubmission = (e) => {
    e.preventDefault()
    console.log('clicked', e.target[0].value, e.target[1].value)
    this.props.cardmodalclose()
  }


  render () {
    return (
      <form onSubmit={this.onSubmission.bind(this)}>
        <div className='modal fade show' id='myModal'style={{display: 'block'}}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <input className='titleinput' name='cardtitle' type='text' placeholder='Card Heading' required/>
                <button className='close' type='button' onClick={this.onClose.bind(this)}>&times;</button>
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
