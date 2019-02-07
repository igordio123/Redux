import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'



const CreateItem = ({name,id , brewers_tips ,ph ,description,image,getId,addToList,history,match }) =>{

  return (
    <div className="card" key={id}>
    <img className='card-img-top' src={`${image}`}  alt=""/>
    <div className='card-body'>
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        {description.substring(0 , 40)  }

        <Link to={`/${id}`}><span
        onClick={()=>{

      }}>...</span></Link></p>
      <span className="btn btn-primary" onClick={(event)=>{  event.preventDefault();addToList(id)}}>Buy</span>

    </div>
  </div>
  )
};


export default withRouter(CreateItem)
