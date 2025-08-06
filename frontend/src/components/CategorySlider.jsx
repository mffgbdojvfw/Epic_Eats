import React from 'react';
import Category from './Category';
import './category.css'; 
import {Link} from "react-router-dom"
const CategorySlider = () => {
    return (
        <div className="category-slider">
            <div className="slider-container">
                {Category.map((item) => (
                    <div key={item.id} className="category-item">
                        <Link to={item.name}><img src={item.img} alt={item.name}/></Link>
                        <div className="hed">
                        <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategorySlider;
