const initialState = {
  beer : [],
  loading : true,
  bottleList: [],
  id : null

};

const reducer = (state = initialState , action)=>{

  switch(action.type) {
            case 'GET_BOTTLES' :
              return {
                  beer : action.payload,
                  loading: false,

              };


            case 'SELECTED_ITEM':{
              const id = action.payload;
              return {
                ...state,
                id : id
              }
            }


            default :
              return {
                ...state
              }

          }


};


export default reducer;
