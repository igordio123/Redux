export const dispInc = () => {
  return {type:'INC'}

};
export const dispDec = ()=>{
  return{type: 'DEC'}
};
export const dispRND = (payload)=>{
  return {
    type:'RND',
    payload
  }
};
