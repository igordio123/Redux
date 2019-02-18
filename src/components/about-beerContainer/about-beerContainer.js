import React from 'react'
import BeerService from "../../services/beer-store";
import {connect} from 'react-redux'
import * as actions from '../../actions/actions.js'
import Spinner from '../spinner/spinner'
import CreateItem from '../create-item/create-item.js'
import AboutBeer from '../about-beer/about-beer'
import SideBar from '../sideBar/sideBar.js'
import './about-beerContainer.css'







const {getBottle,getAllBottles} = new BeerService();
function AboutBeerContainer (props){

    return (
      <div className='container-fluid '>
        <div className='row'>
        <SideBar handleChange={props.handleChange}/>
        <AboutBeer showLi={props.showLi} plusPage = {props.plusPage} pageMinus = {props.pageMinus}/>
        </div>
      </div>

    )

}



const HoC = (View,getData) =>{
  return class extends React.Component{


    componentDidMount() {
      const {getBottle,bottleRequested} = this.props;

      bottleRequested();
      getData(this.props.page).then(res => {
        getBottle(res);
      }).catch(err=>{
        console.log(err)
      });


    }

    componentDidUpdate(prevProps){
      const {getBottle,bottleRequested} = this.props;

      if(this.props.page !== prevProps.page){
        bottleRequested();
        getData(this.props.page)
          .then(res=>{
            getBottle(res)
          })

      }

    }
    addToList = (id) => {
      const {itemSelected, addToBox} = this.props;

      itemSelected(id);

        addToBox(id);




    };
    handleChange =(e) => {
      const {changeValue} = this.props;
      const value = e.target.value;
      changeValue(value)

    };
    pluspage = () =>{
      const{pagePlus} = this.props;
      pagePlus();

    };
    pageMinus = () =>{
      console.log(this.props);
      const{pageMinus,page} = this.props;
      if(page === 1){
        return
      }
      pageMinus()

    };
    render(){

      const {beer, loading,value} = this.props;
      console.log(value);

      const showLi = loading ? <Spinner/> : beer.filter(item=>{
        return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      }).map(item => {
        return <CreateItem item={item} addToList={this.addToList}/>
      });

      return <View {...this.props} showLi = {showLi} handleChange={this.handleChange}  plusPage = {this.pluspage} pageMinus = {this.pageMinus}  />
    }
  }
};







const {getBottles,addToBox,selectedItem,pagePlus,bottleRequested,pageMinus,changeValue} = actions;

const mapStateToProps = ({beer,loading,id,bottleList,page,value}) => {
  return{
    beer,
    loading,
    id,
    bottleList,
    page,
    value
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
    },
    changeValue : (payload) =>{
      dispatch(changeValue(payload))
    }


  }

};



export default connect(mapStateToProps,mapDispatchToProps)(HoC(AboutBeerContainer,getAllBottles))
