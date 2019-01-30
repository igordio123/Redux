import React from 'react'


const CreateItem = ({name,id , brewers_tips ,ph ,description,image,getId}) =>{
  return  <div className="card" key={id}>
    <img className='card-img-top' src={`${image}`}  alt=""/>
    <div className='card-body'>
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description.substring(0 , 40)  }<span onClick={()=>{getId(id)}}>...</span></p>
      <a href="#" className="btn btn-primary">Buy</a>

    </div>
  </div>
};


export default CreateItem
