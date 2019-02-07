import React from 'react'
import './full-information-item.css'

const FullInformationItem = ({bottle:{image_url,name,description}}) =>{

  return (
       <div className='row'>
        <div className='col-md-4'>
          <img src={image_url} alt=""/>
        </div>
        <div className='col-md-8'>
          <h1>{name}</h1>
          {description}


      </div>
       </div>
  )

};



export default FullInformationItem
