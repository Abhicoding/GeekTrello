import React, {Component} from 'react'

export default class Cardmodal extends Component {
  // constructor (props) {
  //   super()
  // }
  render () {
    return (
      <div>
        <div className='modal fade show' id='myModal'style={{display: 'block'}}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Modal Heading</h4>
                <button type='button' className='close' data-dismiss='modal'>&times;</button>
              </div>
              <div className='modal-body'>
          Modal body..
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-danger' data-dismiss='modal'>Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-backdrop fade show' />
      </div>
    )
  }
}
