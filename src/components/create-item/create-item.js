import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'



const CreateItem = ({item,addToList}) =>{
      const {id,image_url,description ,name} = item;
  return (
    <div className="card"  key={id}>
    <img className='card-img-top' src={`${image_url}`}  alt=""/>
    <div className='card-body'>
      <Link to={`/${id}/`}><h5 className="card-title">{name}</h5></Link>
      <p className="card-text">
        {description.substring(0,60)}

        <span>...</span></p>
      <span className="btn btn-primary" onClick={(event)=>{  event.preventDefault(); addToList(id)}}>Buy</span>

    </div>
  </div>
  )
};


export default withRouter(CreateItem)
