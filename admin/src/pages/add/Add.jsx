import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import {assets} from "../../assets/assets"
import upload from "./image-.png"
import "./add.css"
import { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"

const Add = () => {
  const[image,setimage] = useState(null)
  const[data,setdata] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
  })
  const url = "http://localhost:4300"

  const eventHandler = (evt) =>{
    const name = evt.target.name
    const value = evt.target.value

setdata((prevdata)=>({...prevdata,[name]:value}))
  }

  useEffect(()=>{
    console.log(data)
  },[data])


  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setimage(e.target.files[0]);
      console.log("Selected file:", e.target.files[0]); // Debugging log
    } else {
      console.log("No file selected"); // Debugging log
    }
  }

  const onsubmitHandler = async(event)=>{
    event.preventDefault();
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setdata({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setimage(null);
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error("There was an error adding the product!", error);
      alert('An error occurred. Please try again.');
    }
  }
 
  return ( 
    <>
        <div>
      <Navbar/>
      </div>
<div className="all">   
<Sidebar/>
<div className="add">
<form className="add-form" onSubmit={onsubmitHandler}>
  <div className="add-img-upload">
    <p className="add-heading">Upload Image</p>
    <label htmlFor="image">
      <img src={image?URL.createObjectURL(image):upload} alt="" />
    </label>
    <input onChange={onImageChange} type="file" name="image" id="image"  hidden required />
  </div>
  <div className="add-product-name">
    <p className="add-heading">Product name</p>
    <input  onChange={eventHandler} value={data.name}  type="text" name="name" placeholder='Type here' />
  </div>
  <div className="add-product-description">
    <p className="add-heading">Product description </p>
    <textarea  onChange={eventHandler} value={data.description}  name="description" rows="6" placeholder='write content here'></textarea>
    </div>
    <div className="add-category-price">
      <div className="add-category">
        <p className="add-heading">Product category</p>
        <select name="category" onChange={eventHandler} value={data.category}>
          <option value="Salad">Salad</option>
          <option value="Rolls">Rolls</option>
          <option value="Deserts">Deserts</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Pure Veg"> Pure Veg</option>
          <option value="pasta">Pasta</option>
          <option value="Noodles">Noodles</option>
        </select>
      </div>
      <div className="add-price">
        <p className="add-heading">Product price</p>
        <input onChange={eventHandler} value={data.price} type="Number" name="price" placeholder='$20'/>
      </div>
    </div>
    <button className="add-btn" type='submit'>ADD</button>
</form>
</div>
</div>   
    </>

  )
}

export default Add
