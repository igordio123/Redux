import React from 'react'
import './about-beer.css'




const AboutBeer = (props) => {
 const {showLi,plusPage,pageMinus} = props;

  return (


      <div className="col-md-9 wrapp">
      <div className='row goods'>
        {showLi}
      </div>
      <button className='btn btn-primary' onClick={()=>pageMinus()}>left</button>
      <button className='btn btn-primary' onClick={()=>plusPage()}>rigth</button>
    </div>


  )
};

export default AboutBeer








