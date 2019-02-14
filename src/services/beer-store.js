import React from 'react'




class BeerService extends React.Component {

  getData = async (url) => {
    const resp = await fetch(url);
    return  resp.json()
  };

  getBottle = async (id) => {
    const onBootle = await this.getData(`https://api.punkapi.com/v2/beers/${id}`);

    return await onBootle[0];
};
  getAllBottles = async (num) => {
    return await this.getData(`https://api.punkapi.com/v2/beers?page=${num}&per_page=10`);

  };




}


export default BeerService;
