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

  onSubmit (e) {
    console.log('clicked', e.target.cardtitle)
    e.preventDefault()
    this.props.cardmodalclose()
  }


  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='modal fade show' id='myModal'style={{display: 'block'}}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <input className='titleinput' name='cardtitle' type='text' placeholder='Card Heading'/>
                <button className='close' onClick={this.onClose.bind(this)}>&times;</button>
              </div>
              <div className='modal-body'>
                <textarea name='description' className='descriptioninput' placeholder='Add description' />
              </div>
              <div className='modal-footer'>
                <button type='submit' className='btn btn-light'>Save</button>
                <button className='btn btn-danger' onClick={this.onClose.bind(this)}>Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-backdrop fade show' />
      </form>
    )
  }
}
