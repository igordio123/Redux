import {createStore} from 'redux'
import reducer from './reducer.js'
import {dispDec,dispRND,dispInc} from "./actions";







const store = createStore(reducer);
const { dispatch } = store;


const actionCreatorBind = (creator , dispatch) => (...args) => {
  console.log(args);
  return dispatch(creator(...args))
};

const dispatchInc = () =>(dispatch(dispInc()));

const up = () => {
 dispatchInc()

};

const down = () => {
  dispatch(dispDec());

};

const random = () => {

  const payload = Math.floor(Math.random() * 14);


};


const update = store.subscribe(() => {
  let  count = document.querySelector('.counter');
      count.innerHTML = store.getState();
});


const inc = document.querySelector('.inc');
inc.addEventListener('click',up);

const dec = document.querySelector('.dec');
dec.addEventListener('click',down);

const rnd = document.querySelector('.rnd');
rnd.addEventListener('click', actionCreatorBind(dispRND , dispatch));



