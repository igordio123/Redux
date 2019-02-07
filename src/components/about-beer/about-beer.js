import React from 'react'
import BeerService from "../../services/beer-store";
import {connect} from 'react-redux'
import * as actions from '../../actions/actions.js'
import Spinner from '../spinner/spinner'
import './about-beer.css'
import CreateItem from '../create-item/create-item.js'
import {withRouter} from 'react-router-dom'





const {getBottle,getAllBootles} = new BeerService();
class  AboutBeer extends React.Component{


  componentDidMount() {


            const { getBottle,bottleRequested } = this.props;
            getAllBootles().then(res =>{getBottle(res)});


  }








  addToList = (id) => {

                const { itemSelected,addToBox,inc } = this.props;

                      itemSelected(id);
                      inc();
                      getBottle(id).then(res =>{ addToBox(res);console.log(res)})

  };






  render() {

    console.log(this.props)
    const {beer,loading} = this.props;

    const showLi = loading ? <Spinner/> : beer.map(item=>{
      return <CreateItem
                          key={item.id}
                          id={item.id}
                         name = {item.name}
                         image ={item.image_url}
                         description ={item.description}
                         addToList = {this.addToList}

      />

    });



    return (
      <div className=' container wrapp'>
        <div className='row goods'>
          {showLi}
        </div>


      </div>
    )

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


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AboutBeer));
