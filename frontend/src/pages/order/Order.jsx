// import React, { useState } from 'react'
// import Navbar from '../../components/Navbar'
// import { StoreContext } from '../../context/StoreContext'
// import { useContext } from 'react'
// import "./order.css"
// import jwtDecode from 'jwt-decode';

// const Order = () => {
//   const { getTotalAmount, token, cartitems, food_list, url,setcartitems } = useContext(StoreContext)
//   const dtoken = `${token}`;
// const decodedToken = jwtDecode(dtoken);
// // Assuming the user ID is stored in the 'userId' field of the payload
// const userId = decodedToken.userId;

// console.log(userId);
//   const [data,setdata] = useState({  
//   userid:userId, 
//   items:"",
//   amount:getTotalAmount,
//   Date:Date.now()
    
//   })



//  const newData = food_list.map((items,index)=>{
//   setdata({
//     items:`${items.name},Qty-${cartitems[items._id]}`,
//   })
//  })
  
//  setdata(prevdata=>({
//   ...prevdata,
//   userid:userId,
//   data:newData,
//   amount:getTotalAmount()
//  }))







//  const submithandler = async(event)=>{
//   event.preventDefault()
//   try{
  
//   }catch(err){

//   }
//  }

//   return (
//     <>
//     <Navbar/>
//     <div className="order-cont">
      
//       <form onSubmit={submithandler}>
//       {food_list.map((items, index) => {
//             if (cartitems[items._id] > 0) {
//               // const totalPrice = (items.price * cartitems[items._id] * 80).toLocaleString('en-US', { maximumFractionDigits: 2 });
               
//               // const pricePerItem = (items.price * 80).toLocaleString('en-US', { maximumFractionDigits: 2 });

//               const totalPrice = items.price * cartitems[items._id] * 80;
//               const pricePerItem = items.price * 80;
          
//               const formattedTotalPrice = totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
          
//               const formattedPricePerItem = pricePerItem.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
//               return (
//                <div className='place-order-item'>
//                <label className='price-label-name'><h4>{items.name}</h4> <p>{`Qty ${cartitems[items._id]}`}</p></label>
//                <div className="two-tog">
//                <input className="price-input"  type="text" placeholder={`${formattedTotalPrice}`}  name={items.name} value={`${formattedTotalPrice}`} />
               
//                <input className="each-price" type="text" name="price" value={`${formattedPricePerItem}`} placeholder={`${formattedPricePerItem} each`} />
//                </div>
//                </div>
               
//               //  <div>
//               //     <div className="cart-cont">
//               //       <p>{items.name}</p>
//               //       <p>${items.price}</p>
//               //       <p>{cartitems[items._id]}</p>
//               //       <p>${items.price * cartitems[items._id]}</p>
//               //   </div>
//               // <hr className='hr' />
//               // </div>
//               )
//             }
//           })

//           }
//           <div className="total">
//       <h3 className='total-heading'>Total Amount</h3>
//       <h3>{getTotalAmount()}</h3>
//       </div>
//           <button className='order-btn' type='submit'>Place-Order</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default Order


// import React, { useState, useEffect } from 'react';
// import Navbar from '../../components/Navbar';
// import { StoreContext } from '../../context/StoreContext';
// import { useContext } from 'react';
// import axios from "axios"




// import "./order.css";

// const Order = () => {
//   const { getTotalAmount, token, food_list, cartitems,url,setcartitems,getplainAmount } = useContext(StoreContext);
//   // const dtoken = `${token}`;
//   // const decodedToken = jwtDecode(dtoken); // Use jwtDecode directly

//   // // Assuming the user ID is stored in the 'userId' field of the decoded token
//   // const userId = decodedToken.userId;

//   const [data, setData] = useState({
//     // userid: userId,
//     items:[],
//     amount: getplainAmount(),
//     Date: Date.now()
//   });

//   useEffect(() => {
//     const newItems = food_list.map((item) => ({
//       item: item.name, 
//       Qty:cartitems[item._id]
    
//     })).filter(item => item.quantity > 0);;

//     setData(prevData => ({
//       ...prevData,
//       items: newItems,
//       amount: getplainAmount(),
//     }));
//   }, [food_list, cartitems, getplainAmount]);

//   const submithandler = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`${url}/api/order/place`,data)
//       if(response.data.success){
//         alert("form submitted successfuly!")
//       }
//       else{
//         console(response.data.error)
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error")
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="order-cont">
//         <form onSubmit={submithandler}>
//           {food_list.map((item, index) => {
//             if (cartitems[item._id] > 0) {
//               const totalPrice = item.price * cartitems[item._id] * 80;
//               const pricePerItem = item.price * 80;
//               const formattedTotalPrice = totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
//               const formattedPricePerItem = pricePerItem.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });

//               return (
//                 <div className='place-order-item' key={index}>
//                   <label className='price-label-name'><h4>{item.name}</h4> <p>{`Qty ${cartitems[item._id]}`}</p></label>
//                   <div className="two-tog">
//                     <input className="price-input" type="text" placeholder={`${formattedTotalPrice}`} name={item.name} value={`${formattedTotalPrice}`} />
//                     <input className="each-price" type="text" name="price" value={`${formattedPricePerItem}`} placeholder={`${formattedPricePerItem} each`} />
//                   </div>
//                 </div>
//               )
//             }
//           })}
//           <div className="total">
//             <h3 className='total-heading'>Total Amount</h3>
//             <h3>{getTotalAmount()}</h3>
//           </div>
//           <button className='order-btn' type='submit'>Place-Order</button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Order;


import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import "./order.css";

const Order = () => {
  const { getTotalAmount, token, food_list, cartitems, url, setcartitems, getplainAmount,userId,address } = useContext(StoreContext);

  const [data, setData] = useState({
    userId:userId,
    items: [],
    amount: getplainAmount(),
    status:"Food Processing",
    date: new Date().toISOString().split('T')[0], 
    time: new Date().toISOString().split('T')[1].split('.')[0],
    address:address
  });
 const navigate = useNavigate()
  useEffect(() => {
    const newItems = food_list.map((item) => ({
      item: item.name,
      quantity: cartitems[item._id],
      price:item.price*80
    })).filter(item => item.quantity > 0);

    setData(prevData => ({
      ...prevData,
      items: newItems,
      amount: getplainAmount()
    }));
  }, [food_list, cartitems, getplainAmount]);

  const submithandler = async (event) => {
    event.preventDefault();
    try {
      console.log('Submitting Order Data:', data); // Log data for debugging

      const response = await axios.post(`${url}/api/order/place`, data);
      if (response.data.success) {
        navigate("/")
        alert("Your Order is recieved!");
        setcartitems({})
      } else {
        console.log(response.data.error);
      }
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="order-cont">
        <form onSubmit={submithandler}>
          {food_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              const totalPrice = item.price * cartitems[item._id] * 80;
              const pricePerItem = item.price * 80;
              const formattedTotalPrice = totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
              const formattedPricePerItem = pricePerItem.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });

              return (
                <div className='place-order-item' key={index}>
                  <label className='price-label-name'><h4>{item.name}</h4> <p>{`Qty ${cartitems[item._id]}`}</p></label>
                  <div className="two-tog">
                    <input className="price-input" type="text" placeholder={`${formattedTotalPrice}`} name={item.name} value={`${formattedTotalPrice}`} readOnly />
                    <input className="each-price" type="text" name="price" value={`${formattedPricePerItem} each`} placeholder={`${formattedPricePerItem} each`} readOnly />
                  </div>
                </div>
              );
            }
          })}
          <div className="total">
            <h3 className='total-heading'>Total Amount</h3>
            <h3>{getTotalAmount()}</h3>
          </div>
          <button className='order-btn' type='submit'>Place-Order</button>
        </form>
      </div>
    </>
  );
};

export default Order;
