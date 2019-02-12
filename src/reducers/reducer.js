const initialState = {
  beer : [],
  loading : true,
  bottleList: [],
  full : [],
  id : null,
  page : 1,
  value:''


};

const reducer = (state = initialState,action)=>{

  switch(action.type) {
    case 'BOTTLE_REQUESTED':{
      return {
        ...state,
        loading : true
      }
    }
    case 'DELETED_ITEM':{
      return {
        ...state,

      }
    }
    case 'GET_BOTTLES' :
      console.log(action.payload);
      return {
        ...state,
        beer : action.payload,
        loading: false,

      };


    case 'ADD_TO_BOX' : {

      return {
        ...state,
        bottleList: [...state.bottleList, action.payload].sort((first, second) => {
          return first.id - second.id;
        }).reduce((arr, el) => {
          if (!arr.length || arr.length && arr[arr.length - 1].id !== el.id) {
            arr.push(el);
          }
          return arr;
        }, [])
    }
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

    case "PAGE_PLUS" :



      return {

        ...state,
        page:state.page + 1

      };
    case "PAGE_MINUS" :
      return {

        ...state,
        page:state.page - 1

      };

    case "CHANGE_VALUE" : {
      return{
        ...state,
        value : action.payload
      }
    }



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
