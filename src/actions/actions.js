export const bottleRequested =()=>{
  return {

    type : 'BOTTLE_REQUESTED'
  }
};
export const getBottles = (payload) => {
  return {
    type : 'GET_BOTTLES',
    payload
  };
};
export const addToBox = (payload) =>{
  return {
    type:'ADD_TO_BOX',
    payload
  }
};



export const getOneBottle = (payload) =>{
  return {
    type:"GET_BOTTLE",
    payload
  }
};


export const selectedItem = (payload) => {
  return {
    type : 'SELECTED_ITEM',
    payload
  }
};
export const deleteItem = (payload)=>{
  return {
    type : 'DELETED_ITED',
    payload
  }
};

export const removeFromTrash = (payload) =>{
  return {
    type:"REMOVE_FROM_TRASH",
    payload
  }
};

export const addOneMore = (payload) =>{
  return {
    type:'ADD_ONE_MORE',
    payload
  }
}
export const addItem = () =>{
  return {
    type : "ADD_ITEM"
  }
};


export const pagePlus = () =>{

 return {
   type:"PAGE_PLUS",
 }

};
export const changeValue = (payload) =>{
  return {
    type: "CHANGE_VALUE",
    payload
  }
}

export const pageMinus = () =>{

  return {
    type:"PAGE_MINUS",
  }

};



