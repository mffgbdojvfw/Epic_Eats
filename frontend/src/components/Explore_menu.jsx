import React from 'react'
import {menu_list} from "../new_images/assets"
import "./explore.css"

const Explore_menu = ({category,setcategory}) => {
  return (
    <div className='s_slider'>
      <div className="img_slider">
      {menu_list.map((item,index)=>
        (
        <div key={index} className="items" onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
            <img src={item.menu_image}  className={category===item.menu_name?"active":""} id="item_menu"  alt="" />
            <h4>{item.menu_name}</h4>
        </div>
        )
      )}
      </div>
    </div>
  )
}

export default Explore_menu
