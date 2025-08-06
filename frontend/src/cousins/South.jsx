
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import img1 from "./south_back/south1.jpg";
import img2 from "./south_back/south7.jpg";
import img3 from "./south_back/south10.jpg";
import Carousel from './Carousel';
import southind from "./Food";
import "./south.css"


const South = () => {
  const [val, setVal] = useState(southind);

  return (
    <>
      <div>
        <Navbar />
        <Carousel img1={img1} img2={img2} img3={img3} />
        
        <h1 className='hd'>Food-Items</h1>
        <div className="items-cont">
        {val.map((item) => (
          
          <div key={item.id} className="items">
            <div className="box">
            <span class="material-symbols-outlined " >favorite</span>
            <span class="material-symbols-outlined">
add_shopping_cart
</span>
          </div>
            <div className="card-image">
            <img src={item.img} alt={item.name} className='food-items' />
            </div>
            <div className="card-item">
            <h2 className='name'>{item.name}</h2>
            <p className='price'>price:{item.price}₹</p>
            </div>
            <button>place order</button>
          </div>
          
        ))}
           
        </div>
      </div>
      
    </>
  );
}

export default South;




