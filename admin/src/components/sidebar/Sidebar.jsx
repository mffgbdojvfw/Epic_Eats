import React from 'react'
import { assets } from '../../assets/assets'
import "./sidebar.css"
import order from "./purchase-orders.png"
import add from "./add.png"
import list from "./to-do-list.png"
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <> 
   <div className='sidebar'>
    <div className="sidebar-options">
        <div className="sidebar-option">
            <NavLink to='/' ><img classname="add-icon" src={add} alt="" />
            <p>Add</p></NavLink>
        </div>
        <div className="sidebar-option">
            <NavLink to="/list"><img classname="add-icon" src={list} alt="" />
            <p>List-items</p></NavLink>
        </div>
        <div className="sidebar-option">
        <NavLink to="/order"><img classname="add-icon" src={order} alt="" />
            <p>Orders</p></NavLink>
        </div>
    </div>
    
    </div>
    </>

  )
}

export default Sidebar
