import React, { useState } from 'react'

import {Link} from 'react-router-dom'
const Nvbar = (props) => {


  
const [mytextBtn, setmytextbtn] = useState("Enable dark mode");

  return (
  <>
    <div style={{color:props.mode==="dark"?"white":"black",backgroundColor:props.mode==="dark"?"black":"#fb923c"}} className={` flex  justify-around h-10 w-full bg-lime-400 align-middle`} >
    <div>
      <h1>Logo</h1>

    </div>
    <div >
      <ul className='flex justify-between '>
        <li className='px-4'><Link to="/">Home</Link></li>
        <li className='px-4'><Link to="/about">ABOUT</Link></li>
        <li className='px-4'><Link to='/contact'> CONTACT US</Link></li>
        <li></li>
      </ul>
    </div>
    <div className="form-check form-switch">
  <input onClick={props.togglemode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">{mytextBtn}</label>
</div>
    </div>
    </>
  )
}

export default Nvbar
