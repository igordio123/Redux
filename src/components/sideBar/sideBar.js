import React from 'react'
import './sideBar.css'


const SideBar = ({handleChange}) =>{
  return (
    <div className='col-md-3 '>
      <div className='card'>
        <input type="text" className="form-control" id="inputName" placeholder="Search" onChange={(e)=>{handleChange(e)}}>

        </input>

        <hr/>

        <button className='btn btn-block btn-primary mb-3 py-3'>
          Search
        </button>

  <div>
    <input type="checkbox" id="scales" name="scales"
           >
    </input>
      <label htmlFor="scales">Scales</label>
</div>
        <div>
          <input type="checkbox" id="scales" name="scales"
                 checked>
          </input>
          <label htmlFor="scales">Scales</label>
        </div>
        <div>
          <input type="checkbox" id="scales" name="scales"
                 checked>
          </input>
          <label htmlFor="scales">Scales</label>
        </div>
        <div>
          <input type="checkbox" id="scales" name="scales"
                 checked>
          </input>
          <label htmlFor="scales">Scales</label>
        </div>
        <div>
          <input type="checkbox" id="scales" name="scales"
                 checked>
          </input>
          <label htmlFor="scales">Scales</label>
        </div>
      </div>
    </div>
  )
};



export default SideBar
