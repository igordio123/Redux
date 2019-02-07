import React from 'react'
import './about-beer.css'




const AboutBeer = (props) => {
 const {showLi} = props;

  return (
    <div className=' container wrapp'>
      <div className='row goods'>
        {showLi}
      </div>
    </div>
  )
};

export default AboutBeer








