import React from 'react'
import './full-information-item.css'

const FullInformationItem = ({bottle:{image_url,id,name,description,abv,first_brewed,ph,tagline,},addTobox}) =>{

  return (
       <div className='row wrapper'>
        <div className='col-md-3'>
          <div className="side-bar2 img-thumbnail">


            <button onClick={()=>{addTobox(id)}}>Добавить в корзину </button>


          </div>
        </div>
        <div className='col-md-9' >
          <div className="row">
          <div className="col-md-4">
            <img src={image_url} alt="" className='img-thumbnail '/>
          </div>
          <div className="col-md-8" >
            <h1>{name}</h1>
            <span><h4>{description}</h4></span>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><h5>Abv : {abv}</h5></li>
              <li className="list-group-item"><h5>First brewed : {first_brewed}</h5></li>
              <li className="list-group-item"><h5>Ph:{ph}</h5></li>
              <li className="list-group-item"><h5>Tagline :{tagline}</h5></li>


            </ul>
          </div>
          </div>


          </div>
       </div>
  )

};


export default FullInformationItem
