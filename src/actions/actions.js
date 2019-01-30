
export const newBootle = (payload) => {
  console.log(payload);
  return {
    type : 'GET_BOTTLES',
    payload
  };
};
export const addToBox = (payload) =>{
  return {
    type:'GET_A_BOTTLE',
    payload
  }
};

export const selectedItem = (payload) => {
  return {
    type : 'SELECTED_ITEM',
    payload
  }
};



