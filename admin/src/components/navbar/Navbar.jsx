import React from 'react'
import "./navbar.css"
import {assets} from "../../assets/assets"
import prof from "./man.png"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className="head">
      <h1 className='logo'>EpicEats.</h1>
      <h3 className='admin'>Admin Panel</h3>
      </div>
      <img className='profile' src={prof} alt="" />
    </div>
    <hr className='hr'/>
   
    </>
  )
}

export default Navbar
