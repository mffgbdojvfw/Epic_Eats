import React ,{useContext} from 'react'
import "./food_display.css"
import Food_item from './Food_item'
// import { food_list } from '../new_images/assets'
import { StoreContext } from '../context/StoreContext'
const Food_display = ({category}) => {
  const {food_list} = useContext(StoreContext)

  
  return (
    <>
    <h2 className='dishes'>Top dishes near you </h2>
    <div className="foods">
    <div className='food-display' id="food-display">
        <div className="food-display-list">
            {food_list.map((item,index)=>
            {
             if(category==="All" || category === item.category){
                return (<Food_item  key = {index} id = {item._id} name={item.name} description={item.description} price={item.price} image={item.image} />)  }
              return null
            })}
        </div>
      
    </div>
    </div>
    </>
  )
}

export default Food_display
