import React from 'react'
import './box-list.css'
import {connect} from 'react-redux'
import {removeFromTrash,addToBox} from "../../actions/actions"




class Box extends React.Component {







  render() {
    console.log(this.props);
    const {bottleList,remove,add} = this.props;




    const createRow = bottleList === [] ? <h1>Wait</h1>  : bottleList.map((item) =>{

      return  <div className='bought' key={item.id}>
        <div>{bottleList.indexOf(item)+1}</div>
        <div>{item.name}</div>
        <div>{item.volume}</div>
        <div>
          <span className='alert alert-success' onClick={()=>{add(item.id)}} >ADD</span>
          <button className='alert alert-danger' onClick={()=>remove(item.id)} >REMOVE</button>

        </div>
      </div>
    }) ;
    return (
      <div className='container box'>
       <div className='bar'>
         <div>id</div>
         <div>item</div>
         <div>volume</div>
         <div>action</div>
       </div>
        {createRow}

      </div>
    )


  }

}

const mapDispathcToProps = (dispatch) =>{
  return {
    remove : (payload) =>{
        dispatch(removeFromTrash(payload));
    },
    add:(payload) =>{
      dispatch(addToBox(payload))
    },
  }
};



export default connect(null,mapDispathcToProps)(Box);


