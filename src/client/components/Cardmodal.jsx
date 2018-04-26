import React, {Component} from 'react'

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


  render () {
    return (
      <div>
        <div className='modal fade show' id='myModal'style={{display: 'block'}}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Modal Heading</h4>
                <button type='button' className='close' data-dismiss='modal' onClick={this.onClose.bind(this)}>&times;</button>
              </div>
              <div className='modal-body'>
          Modal body..
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-danger' data-dismiss='modal' onClick={this.onClose.bind(this)}>Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-backdrop fade show' />
      </div>
    )
  }
}
