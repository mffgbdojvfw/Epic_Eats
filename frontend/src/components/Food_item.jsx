import React ,{useContext} from 'react'
import "./food_item.css"
import { assets } from '../new_images/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'


const Food_item = ({key,id,name,description,price,image}) => {

 const {cartitems,addtoCart,removefromCart,url,favorite} = useContext(StoreContext)




  return (
    <>
    <div className='food-items'>
      <div className="food-item-img-container">
        <img  className="food-item-image" src={url+"/images/"+image} alt="" />
      </div>
<div className='count-cont'>{
  !cartitems[id]?<img className="add" src={assets.add_icon_white} alt="" onClick={()=>addtoCart(id)} />:
  <div className='food-item-count'>
    <img src={assets.remove_icon_red} alt="add"  onClick={()=>removefromCart(id)} className='Add'/>
    <p>{cartitems[id]}</p>
    <img src={assets.add_icon_green} alt="remove" onClick={()=>addtoCart(id)} className='minus'/></div> 
}
</div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p className='food-name'>{name}</p>
            <img classname="rating"  src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
    </>
  )
}

export default Food_item
