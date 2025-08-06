import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import "./myorder.css"
import img from "./parcel_icon.png"
import axios from 'axios';
import Navbar from '../../components/Navbar';
const Myorders = () => {
  const[data,setdata] = useState([])
  const {token,url,getTotalAmount,userId} = useContext(StoreContext)


  const fetchOrders = async() =>{
   
    try {
      const response = await axios.post(`${url}/api/order/myorders`, {userId}, { headers: { token } });
      setdata(response.data.data);
      console.log('Fetched Orders:', response.data.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
    }

    // const Statusfetch = async()=>{
    //  const response = await axios.get(`${url}/api/order/status`)
    //  if(response.data.success){
    //   console.log(response.status)
    //  }
    //  else{
    //   console.log(response.data.error)
    //  }
    // }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])
    
    useEffect(()=>{
      console.log(data)
    },[data])

    


    return (
    <>
    <Navbar/>
      <div className="my-orders">
        <h2>My Orders</h2>
        <div className="container3">
            {data.map((order,index)=>{
                return(
                    // <OrderItem key={order._id}  order={order}/>
                    <div key={index} className="my-orders-order">
                        <img src={img} alt=''/>
                      <p className='items-name'>{order.items.map((item,index)=>{
                        if(index === order.items.length-1){
                            return item.item+" x "+item.quantity
                        }
                        else{
                            return item.item+" x "+item.quantity+", "
                        }
                      })}</p>  
                      <p className='same'>₹{order.amount}.00</p>
                      <p className='same'>items:{order.items.length}</p>
                      <li className={
                order.status === 'Food Processing' ? 'processing' :
                order.status === 'Out for delivery' ? 'out-for-delivery' :
                order.status === 'Received' ? 'received' : ''}>{order.status}</li>
                      <button>Cancel</button>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  )
}

export default Myorders
