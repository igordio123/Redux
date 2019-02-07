import React from 'react'
import './box-list.css'



class Box extends React.Component {



  render() {
    const {bottleList} = this.props;
    console.log(bottleList);
    const newArray = bottleList.sort((first,second)=>{
      return first.id - second.id;
    }).reduce((arr, el) => {
      if(!arr.length || arr.length && arr[arr.length - 1].id !== el.id) {
        arr.push(el);
      }
      return arr;
    }, []);

    const createRow = bottleList === undefined ? 'waiting...' : newArray.map((item) =>{

      return  <div className='bought' key={item.id}>
        <div>1</div>
        <div>{item.name}</div>
        <div>1</div>
        <div>
          <span className='alert alert-success'>ADD</span>
          <span className='alert alert-danger'>REMOVE</span>

        </div>
      </div>
    }) ;
    return (
      <div className='container box'>
       <div className='bar'>
         <div>id</div>
         <div>item</div>
         <div>count</div>
         <div>action</div>
       </div>
        {createRow}

      </div>
    )


  }

}




export default Box


