import React from 'react'
import './box-list.css'
import {connect} from 'react-redux'
import * as actions from '../../actions/actions.js'

console.log(actions)
class Box extends React.Component {

  render() {

    return (
      <div className='container box'>
       <div className='bar'>
         <div>id</div>
         <div>item</div>
         <div>count</div>
         <div>action</div>
       </div>
        <div className='bought'>
        <div>1</div>
        <div>beer</div>
        <div>1</div>
        <div>
        <span className='alert alert-success'>ADD</span>
          <span className='alert alert-danger'>REMOVE</span>

        </div>
        </div>

      </div>
    )


  }

}




export default Box
