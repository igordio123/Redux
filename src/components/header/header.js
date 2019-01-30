import React from 'react'
import './header.css'

const Header = () =>{
  return (
    <div className='container-fluid'>
      <div className='row header'>
        <div className='col-md-4 left'>
          <h1>About beer!</h1>
        </div>
        <div className='col-md-8 right'>
          <ul>
            <li>About us</li>
            <li>See more</li>
            <li>Beers</li>
          </ul>
        </div>
      </div>

    </div>
  )
};

export default Header
