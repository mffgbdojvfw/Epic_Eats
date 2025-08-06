// import React from 'react'
// import Navbar from '../../components/navbar/Navbar'
// import Sidebar from '../../components/sidebar/Sidebar'
// import "./order.css"
// import { useState } from 'react'
// import axios from "axios"
// import {toast} from "react-toastify"
// import img from "./parcel_icon.png"
// import { useEffect } from 'react'
// import API from "../../api"; // Adjust path if needed

// const Order = () => {
// const[data,setdata] = useState([])
// const url = "http://localhost:4300"


// const fetchorders = async() =>{
  
//   const response = await axios.get(`${url}/api/order/list`) 
//   if(response.data.success){
//     setdata(response.data.data)
//     console.log(response.data.data)
//   }
//   else{
//     toast.error("Error")
//   }
//   }

//   const StatusHandler = async(event,orderId) =>{
//     const response = await axios.post(`${url}/api/order/status`,{
//       orderId,
//       status:event.target.value
//     })
//     if(response.data.success){
//       await fetchorders()
//     }
//   }

//   useEffect(()=>{
//     fetchorders()
//   },[])

//   useEffect(() => {
//     console.log('Updated data:', data); // Log the updated state data
//   }, [data]);

//   return (
//     <>
//     <div className='navbar'>
//         <Navbar/>
//     </div>
//     <div className="all">
//     <Sidebar className="sidebar"/>
//     <div className="my-orders">
//         <h2>My Orders</h2>
//         <div className="container3">
//             {data.map((order,index)=>{
//                 return(
//                     // <OrderItem key={order._id}  order={order}/>
//                     <div key={index} className="my-orders-order">
//                         <img src={img} alt=''/>
//                       <div className='all-info'>
//                       <p>{order.items.map((item,index)=>{
//                         if(index === order.items.length-1){
//                             return item.item+" x "+item.quantity
//                         }
//                         else{
//                             return item.item+" x "+item.quantity+", "
//                         }
//                       })}</p>  
//                          {order.address && order.address.length > 0 && order.address[0] ? (
//                   <>
//                   <div className='address'>
//                   <p className='order-item-name'>{order.address[0].firstname}</p>
//                   <p className='order-item-street'>{order.address[0].address+", "+order.address[0].street}</p>
//                   <p className='order-item-street'>{order.address[0].city+", "+order.address[0].state+", "+order.address[0].country+", "+order.address[0].zipcode}</p>
//                   </div>
//                   <p className='order-user-phone'>{order.address[0].phone}</p>
//                   </> 
//                 ) : (
//                   <p className='order-item-name'>No address</p>
//                 )}
                
              
//                       </div>
                   
//                       <p className='same'>₹{order.amount}.00</p>
//                       <p className='same'>items:{order.items.length}</p>
//                       <select onChange={(event)=>StatusHandler(event,order._id)} value={order.status}  className={
//                 order.status === 'Food Processing' ? 'processing' :
//                 order.status === 'Out for delivery' ? 'out-for-delivery' :
//                 order.status === 'Received' ? 'received' : ''}>
//                         <option value="Food Processing">Food Processing</option>
//                         <option value="Out for delivery">Out for delivery</option>
//                         <option value="Received">Received</option>
//                       </select>
//                     </div>
//                 )
//             })}
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Order



import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './order.css';
import { toast } from 'react-toastify';
import img from './parcel_icon.png';
import API from '../../api'; // ✅ Use centralized API with Render baseURL

const Order = () => {
  const [data, setdata] = useState([]);

  const fetchorders = async () => {
    try {
      const response = await API.get('/api/order/list');
      if (response.data.success) {
        setdata(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      toast.error('Network error');
      console.error('Fetch error:', error);
    }
  };

  const StatusHandler = async (event, orderId) => {
    try {
      const response = await API.post('/api/order/status', {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchorders();
      }
    } catch (error) {
      toast.error('Failed to update status');
      console.error('Status update error:', error);
    }
  };

  useEffect(() => {
    fetchorders();
  }, []);

  useEffect(() => {
    console.log('Updated data:', data);
  }, [data]);

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="all">
        <Sidebar className="sidebar" />
        <div className="my-orders">
          <h2>My Orders</h2>
          <div className="container3">
            {data.map((order, index) => (
              <div key={index} className="my-orders-order">
                <img src={img} alt="" />
                <div className="all-info">
                  <p>
                    {order.items.map((item, index) =>
                      index === order.items.length - 1
                        ? `${item.item} x ${item.quantity}`
                        : `${item.item} x ${item.quantity}, `
                    )}
                  </p>

                  {order.address && order.address.length > 0 && order.address[0] ? (
                    <>
                      <div className="address">
                        <p className="order-item-name">{order.address[0].firstname}</p>
                        <p className="order-item-street">
                          {order.address[0].address}, {order.address[0].street}
                        </p>
                        <p className="order-item-street">
                          {order.address[0].city}, {order.address[0].state},{' '}
                          {order.address[0].country}, {order.address[0].zipcode}
                        </p>
                      </div>
                      <p className="order-user-phone">{order.address[0].phone}</p>
                    </>
                  ) : (
                    <p className="order-item-name">No address</p>
                  )}
                </div>

                <p className="same">₹{order.amount}.00</p>
                <p className="same">Items: {order.items.length}</p>
                <select
                  onChange={(event) => StatusHandler(event, order._id)}
                  value={order.status}
                  className={
                    order.status === 'Food Processing'
                      ? 'processing'
                      : order.status === 'Out for delivery'
                      ? 'out-for-delivery'
                      : order.status === 'Received'
                      ? 'received'
                      : ''
                  }
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Received">Received</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;

