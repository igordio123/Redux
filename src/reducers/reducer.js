const initialState = {
  beer : [],
  loading : true,
  bottleList: [],
  full : [],
  id : null,
  counter : 0,


};

const reducer = (state = initialState,action)=>{

  switch(action.type) {
    case 'BOTTLE_REQUESTED':{
      return {
        beer:state.beer,
        loading : true
      }
    }
    case 'GET_BOTTLES' :
      console.log(action.payload);
      return {

        beer : action.payload,
        loading: false,

      };


    case 'ADD_TO_BOX' : {

      return {
        ...state,
        bottleList: [...state.bottleList , action.payload],
      };
    }

    case 'GET_BOTTLE': {

      console.log(action.payload);
      return {
        ...state,
        full: action.payload,
        loading: false
      };
    }

    case 'SELECTED_ITEM':

      return {
        ...state,
        id : action.payload
      };

    case "INC" :
      state.counter++;
      return {
        ...state,

      };


    default :
      return {
        ...state
      }

  }
return state


};



export {

  reducer
};
