import React from 'react';
import AboutBeerContainer from '../about-beerContainer/about-beerContainer.js'
import HoC from '../../HocS/HOC.js'
import BeerService from '../../services/beer-store.js';
console.log(HoC)
const {getAllBottles} = new BeerService();

const BootleList = HoC(AboutBeerContainer,getAllBottles);

export default BootleList



