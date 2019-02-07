import React from 'react'
import {connect} from 'react-redux'
import './header.css'
import {Link} from 'react-router-dom'

const Header = ({counter}) =>{

  return (
    <div className='container-fluid'>
      <div className='row header'>
        <div className='col-md-4 left'>
          <h1>About beer!</h1>
        </div>
        <div className='col-md-8 right'>

            <div className="right-block">
              <Link to='/basket'> <span className='basket'><img src="https://cdn0.iconfinder.com/data/icons/ecommerce-23/46/card-512.png" alt=""/> </span></Link>
          <div>Товаров:{counter}<br/>На сумму : </div>
            </div>

        </div>
      </div>

    </div>
  )
};

const mapStateToProps =({counter}) =>{
  return {
    counter
  }
};

export default connect(mapStateToProps)(Header)
