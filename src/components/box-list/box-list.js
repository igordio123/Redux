import React from 'react'
import './box-list.css'
import {connect} from 'react-redux'




class Box extends React.Component {







  render() {
    console.log(this.props);
    const {bottleList} = this.props;




    const createRow = bottleList === [] ? <h1>Wait</h1>  : bottleList.map((item) =>{

      return  <div className='bought' key={item.id}>
        <div>1</div>
        <div>{item.name}</div>
        <div>1</div>
        <div>
          <span className='alert alert-success'>ADD</span>
          <button className='alert alert-danger' >REMOVE</button>

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





export default Box;


