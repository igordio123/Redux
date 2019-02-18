const initialState = {
  beer : [],
  loading : true,
  bottleList: [],
  full : [],
  id : null,
  page : 1,
  value:''


};


const updateElement = (list,item,index)=>{

  if(index < 0){
    return [...list,item]
  }else{
    return [
      ...list.slice(0,index),
      item,
      ...list.slice(index+1)
    ]
  }

};
const addItem = (newItem,prevItem)=>{
  if (prevItem) {
    return {
    ...prevItem,
      volume: newItem.volume.value + prevItem.volume
    }
  }
  else {
    return {
      id:newItem.id,
      name:newItem.name,
      volume: newItem.volume.value
    }
  }

};
const reducer = (state = initialState,action)=> {

  switch (action.type) {
    case 'BOTTLE_REQUESTED': {
      return {
        ...state,
        loading: true
      }
    }
    case 'DELETED_ITEM': {
      return {
        ...state,

      }
    }
    case 'GET_BOTTLES' :
      console.log(action.payload);
      return {
        ...state,
        beer: action.payload,
        loading: false,

      };


    case 'ADD_TO_BOX' : {

      console.log(action.payload)
      const id = action.payload;
      const bottle = state.beer.find((item) =>{
        return item.id === id
      });
      const indexOfBottle = state.bottleList.findIndex(({id}) => id === bottle.id);
      const bottle2 = state.bottleList[indexOfBottle];


      let newItem = addItem(bottle,bottle2);


        return {
          ...state,
          bottleList:updateElement(state.bottleList,newItem,indexOfBottle)
        }




  }

    case 'REMOVE_FROM_TRASH':{
        const id = action.payload;

        const findItem = state.bottleList.find((item) =>{
          return item.id === id
        });

        const indexofItem = state.bottleList.findIndex(({id}) =>{
          return id === findItem.id
      });

        return {
          ...state,
          bottleList:[...state.bottleList.slice(0,indexofItem),...state.bottleList.slice(indexofItem+1)]
        }
    }





    case 'GET_BOTTLE': {
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
