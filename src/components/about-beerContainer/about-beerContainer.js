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
    const {getBottle,bottleRequested,page} = this.props;

    bottleRequested();
    getAllBootles(5).then(res => {
      getBottle(res);
      console.log(res)
    }).catch(err=>{
      console.log(err)
    });


  }

  componentDidUpdate(prevProps){
    const {getBottle,bottleRequested,page} = this.props;

    if(this.props.page !== prevProps.page){
      bottleRequested();
      getAllBootles(this.props.page)
        .then(res=>{
          getBottle(res)
        })

    }

  }
  addToList = (id) => {

    const {itemSelected, addToBox} = this.props;

    itemSelected(id);
    getBottle(id).then(res => {
      addToBox(res);

    });


  };
  pluspage = () =>{
    const{pagePlus} = this.props;
    pagePlus();

  };
  pageMinus = () =>{
    const{pageMinus} = this.props;
    pageMinus()

  };


  render() {

    const {beer, loading,bottleList,page} = this.props;
    if(page === 0) {
      return;
    }

    const showLi = loading ? <Spinner/> : beer.map(item => {
      return <CreateItem item={item} addToList={this.addToList}/>
    });


    return (<AboutBeer showLi={showLi} plusPage = {this.pluspage} pageMinus = {this.pageMinus}/>)


  }


}








    const {getBottles,addToBox,selectedItem,pagePlus,bottleRequested,pageMinus} = actions;
console.log(actions);
const mapStateToProps = ({beer,loading,id,bottleList,page}) => {
  return{
    beer,
    loading,
    id,
    bottleList,
    page
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

    pagePlus : () =>{
      dispatch(pagePlus())
    },
    pageMinus : () =>{
      dispatch(pageMinus())
    }

  }

};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AboutBeerContainer));
