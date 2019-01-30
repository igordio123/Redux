import React, {createContext} from 'react'


const {Provider:BeerServiceProvider , Consumer : BeerServiceConsumer } = createContext();


export {BeerServiceConsumer,BeerServiceProvider};
