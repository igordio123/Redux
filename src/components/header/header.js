import React from 'react'
import {connect} from 'react-redux'
import './header.css'
import {Link} from 'react-router-dom'

const Header = ({counter,bottleList}) =>{

  return (
    <div className='container-fluid top'>
      <div className='row header'>
        <div className='col-md-4 left'>
          <Link to='/'> <img src="https://woodman-bar.ru/images/logo.png" alt=""/></Link>
        </div>
        <div className='col-md-8 right'>

            <div className="right-block">
              <Link to='/basket/trash'> <span className='basket'><img src="https://cdn0.iconfinder.com/data/icons/ecommerce-23/46/card-512.png" alt=""/> </span></Link>
          <div>Товаров:{bottleList.length}<br/>На сумму : </div>
            </div>

        </div>
      </div>

    </div>
  )
};

const mapStateToProps =({counter,bottleList}) =>{
  return {
    counter,
    bottleList
  }
};

export default connect(mapStateToProps)(Header)
