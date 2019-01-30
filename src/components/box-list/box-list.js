import React from 'react'
import './box-list.css'

import * as actions from '../../actions/actions.js'

console.log(actions)
class Box extends React.Component {

  render() {
    const {bootleList} = this.props;

    const createRow = !bootleList ? 'waiting...' : bootleList.map(item =>{
      return  <div className='bought'>
        <div>1</div>
        <div>{item.description}</div>
        <div>1</div>
        <div>
          <span className='alert alert-success'>ADD</span>
          <span className='alert alert-danger'>REMOVE</span>

        </div>
      </div>
    }) ;
    return (
      <div className='container box'>
       <div className='bar'>
         <div>id</div>
         <div>item</div>
         <div>count</div>
         <div>action</div>
       </div>
        {createRow}

      </div>
    )


  }

}




export default Box


