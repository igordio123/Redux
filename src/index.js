import React from 'react'
import ReactDOM from 'react-dom'
import BeerService from './services/beer-store.js';
import {BeerServiceConsumer,BeerServiceProvider} from "./components/beer-store/beer-service-context"
import App from './components/app/app.js'
import {Provider} from "react-redux";
import {createStore} from 'redux'
import reducer from './reducers/reducer'

const getData = new BeerService();
 const store  = createStore(reducer);


ReactDOM.render(
  <Provider store = {store}>
  <BeerServiceProvider value = {BeerService}>
  <BeerServiceConsumer >
    {value =>
      <App/>
    }
  </BeerServiceConsumer>
  </BeerServiceProvider>
  </Provider>
  , document.getElementById('root'));
