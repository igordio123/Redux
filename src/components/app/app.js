import React from 'react'
import AboutBeerContainer from '../about-beerContainer/about-beerContainer'
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
        <Route path='/' component={AboutBeerContainer} exact={true} />
        <Route path='/basket/trash' exact={true} render={() => <Box bottleList={bottleList}/>}/>
        <Route path='/:id' exact={true} render={(props) => <FullInfromation {...props} />}/>



      </div>


    </Router>
  )
}
}
const mapStateToProps = ({bottleList}) =>{
  return {bottleList:bottleList}

};

export default  connect(mapStateToProps)(App)
