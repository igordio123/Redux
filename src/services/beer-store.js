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
  getAllBootles = async () => {
    return await this.getData(`https://api.punkapi.com/v2/beers/`);

  };




}


export default BeerService;
