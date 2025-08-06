// import React, { useState } from 'react'
// import Navbar from '../../components/navbar/Navbar'
// import Sidebar from '../../components/sidebar/Sidebar'
// import axios from 'axios'
// import { toast } from "react-toastify"
// import { useEffect } from 'react'
// import { assets } from '../../assets/assets'
// import "./list.css"

// const List = () => {
//   const [list, setlist] = useState([])
//   const url = "http://localhost:4300"

//   const fetchlist = async () => {
//     const response = await axios.get(`${url}/api/food/list`)
//     try {
//       if (response.data.success) {
//         setlist(response.data.data)
//         console.log(response.data.data)
//       }
//       else {
//         toast.error("Error")
//       }
//     } catch (err) {
//       toast.error(err)
//     }
//   }


//   useEffect(() => {
//     fetchlist();
//   }, []);

//   const removelist = async(foodId) =>{
// const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
// await fetchlist();
// if(response.data.success){
//   toast.success(response.data.message)
// }
// else{
//   toast.error("Error")
// }
//   }

//   return (
//     <>
//     <div className='navbar'>
//       <Navbar />
//       </div>
//       {/* <hr className='hr'/> */}
//       <div className="all">
//         <Sidebar className="sidebar"/>
//         <div className="list">
//           <p className='all-food-list'>All Food List</p>
//           <div className="food-lists">
//             <div className="food-lists-heading">
//               <b className='list-img'>Image</b>
//               <b className='name-heading'>Name</b>
//               <b>Category</b>
//               <b>Price</b>
//               <b>Action</b>
//             </div>
//             <hr />
//           {
//             list.map((item,index)=>{
//               // console.log(`Item:`, item);
//               // const imageUrl = `${url}/images/${item.image}`;
//               // console.log(`Image URL: ${imageUrl}`);
//               return(
//               <div key={index} className="list-items">
//               <img  className="list-img" src= {`${url}/images/${item.image}`} alt="" />
             
//               <p className='item-names'>{item.name}</p>
//               <p>{item.category}</p>
//               <p className='prise'>${item.price}</p>
//               <div className='remove-list-cont'>
//               <img className='list-remove' src={assets.remove_icon_red} onClick={()=>removelist(item._id)} alt="" />
//               </div>
//               </div>
//               )
//             })

//           }
//           </div>
//         </div>
//       </div>
//       </>
//       )
// }

//       export default List



import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { toast } from "react-toastify";
import { assets } from '../../assets/assets';
import API from '../../api'; // ✅ Using centralized API config
import "./list.css";

const List = () => {
  const [list, setList] = useState([]);

  // Fetch food list
  const fetchList = async () => {
    try {
      const response = await API.get('/api/food/list');
      if (response.data.success) {
        setList(response.data.data);
        console.log('Fetched food list:', response.data.data);
      } else {
        toast.error("Failed to fetch list");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error while fetching list");
    }
  };

  // Remove food item
  const removeListItem = async (foodId) => {
    try {
      const response = await API.post('/api/food/remove', { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresh the list
      } else {
        toast.error("Failed to remove item");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error while removing item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="all">
        <Sidebar className="sidebar" />
        <div className="list">
          <p className="all-food-list">All Food List</p>
          <div className="food-lists">
            <div className="food-lists-heading">
              <b className="list-img">Image</b>
              <b className="name-heading">Name</b>
              <b>Category</b>
              <b>Price</b>
              <b>Action</b>
            </div>
            <hr />
            {list.map((item, index) => (
              <div key={index} className="list-items">
                <img
                  className="list-img"
                  src={`${process.env.REACT_APP_API_URL || 'https://epic-eats-backend.onrender.com'}/images/${item.image}`}
                  alt={item.name}
                />
                <p className="item-names">{item.name}</p>
                <p>{item.category}</p>
                <p className="prise">${item.price}</p>
                <div className="remove-list-cont">
                  <img
                    className="list-remove"
                    src={assets.remove_icon_red}
                    onClick={() => removeListItem(item._id)}
                    alt="Remove"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
