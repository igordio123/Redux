import React from 'react'
import AboutBeer from '../about-beer/item-list'
import Header from '../header/header.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import FullInfromation from '../full-information/full-information'
import Box from "../box-list/box-list";
import {connect} from 'react-redux'


class App extends React.Component{

render() {
  const {bottleList} = this.props;

  return (
    <Router>
      <div>
        <Header/>
        <Route path='/' component={AboutBeer} exact={true}/>
        <Route path='/:id' render={(props) => <FullInfromation {...props}/>}/>
        <Route path='/basket' render={() => <Box bottleList={bottleList}/>}/>


      </div>


    </Router>
  )
}
};
const mapStateToProps = ({bottleList}) =>{
  return {bottleList:bottleList}

};

export default  connect(mapStateToProps)(App)
