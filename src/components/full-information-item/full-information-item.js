import React from 'react'
import './full-information-item.css'

const FullInformationItem = ({bottle:{image_url,name,description}}) =>{

  return (
       <div className='row wrapper'>
        <div className='col-md-3'>
        </div>
        <div className='col-md-9'>
          <img src={image_url} alt="" className='img-thumbnail '/>
          <h1>{name}</h1>
          {description}


      </div>
       </div>
  )

};



export default FullInformationItem
