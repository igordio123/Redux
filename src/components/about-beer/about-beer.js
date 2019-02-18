import React from 'react'
import './about-beer.css'




const AboutBeer = (props) => {
 const {showLi,plusPage,pageMinus} = props;

  return (


      <div className="col-md-9 wrapp">
      <div className='row goods'>
        {showLi}
      </div>
        <div className='buttons'>
          <div className='first'>
      <button className='btn btn-primary ' onClick={()=>pageMinus()}>left</button>
          </div>
          <div className='second'>
      <button className='btn btn-primary' onClick={()=>plusPage()}>rigth</button>
          </div>
        </div>
    </div>


  )
};

export default AboutBeer








