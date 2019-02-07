import React from 'react'
import BeerService from "../../services/beer-store";
import {connect} from 'react-redux'
import * as actions from '../../actions/actions.js'
import Spinner from '../spinner/spinner'
import CreateItem from '../create-item/create-item.js'
import {withRouter} from "react-router-dom";
import AboutBeer from '../about-beer/about-beer'




const {getBottle,getAllBootles} = new BeerService();
class  AboutBeerContainer extends React.Component {


  componentDidMount() {


    const {getBottle} = this.props;
    getAllBootles().then(res => {
      getBottle(res)
    });


  }

  addToList = (id) => {

    const {itemSelected, addToBox, inc} = this.props;

    itemSelected(id);
    inc();
    getBottle(id).then(res => {
      addToBox(res);
      console.log(res)
    })

  };

  render() {

    const {beer, loading} = this.props;
    const showLi = loading ? <Spinner/> : beer.map(item => {
      return <CreateItem item={item} addToList={this.addToList}/>
    });

    return (<AboutBeer showLi={showLi}/>)


  }


}








    const {getBottles,addToBox,selectedItem,inc,bottleRequested} = actions;
console.log(actions);
const mapStateToProps = ({beer,loading,id}) => {
  return{
    beer,
    loading,
    id,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    bottleRequested : () =>{
      dispatch(bottleRequested())
    },
    getBottle : (payload) => {
      dispatch(getBottles(payload))
    },
    addToBox : (payload) => {
      dispatch(addToBox(payload))
    },
    itemSelected : (payload) =>{

      dispatch(selectedItem(payload))
    },

    inc : () =>{
      dispatch(inc())
    }

  }

};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AboutBeerContainer));
