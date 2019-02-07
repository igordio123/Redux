import React from 'react'
import {connect} from 'react-redux'
import BeerService from "../../services/beer-store";
import {getOneBottle} from '../../actions/actions.js'
import Spinner from '../spinner/spinner'
import FullInformationItem from '../full-information-item/full-information-item'





const {getBottle} = new BeerService;



class FullInformation extends React.Component {


  componentDidMount(){

    const{id} = this.props.match.params;
    getBottle(id).then(res => {
          this.props.getOneBottle(res);

           });


  };


  render () {
    const {bottle} = this.props;

    const show = !bottle  ?  <Spinner/> : <FullInformationItem bottle = {bottle}/>;

    return (
        <div className='container'>

          {show}

        </div>

      )


    }
}











const mapStateToProps = ({id,full}) =>{
  return {
    id : id,
    bottle : full
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOneBottle : (res) =>{
      dispatch(getOneBottle(res))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(FullInformation);
