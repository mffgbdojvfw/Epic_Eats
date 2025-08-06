

// import React, { useState, useEffect } from 'react';
// import Navbar from '../../components/Navbar';
// import { StoreContext } from '../../context/StoreContext';
// import { useContext } from 'react';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import API from "../../api.js"

// import "./order.css";

// const Order = () => {
//   const { getTotalAmount, token, food_list, cartitems, url, setcartitems, getplainAmount,userId,address } = useContext(StoreContext);

//   const [data, setData] = useState({
//     userId:userId,
//     items: [],
//     amount: getplainAmount(),
//     status:"Food Processing",
//     date: new Date().toISOString().split('T')[0], 
//     time: new Date().toISOString().split('T')[1].split('.')[0],
//     address:address
//   });
//  const navigate = useNavigate()
//   useEffect(() => {
//     const newItems = food_list.map((item) => ({
//       item: item.name,
//       quantity: cartitems[item._id],
//       price:item.price*80
//     })).filter(item => item.quantity > 0);

//     setData(prevData => ({
//       ...prevData,
//       items: newItems,
//       amount: getplainAmount()
//     }));
//   }, [food_list, cartitems, getplainAmount]);

//   const submithandler = async (event) => {
//     event.preventDefault();
//     try {
//       console.log('Submitting Order Data:', data); // Log data for debugging

//       const response = await API.post("/api/order/place", data);
//       if (response.data.success) {
//         navigate("/")
//         alert("Your Order is recieved!");
//         setcartitems({})
//       } else {
//         console.log(response.data.error);
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error");
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
//                     <input className="price-input" type="text" placeholder={`${formattedTotalPrice}`} name={item.name} value={`${formattedTotalPrice}`} readOnly />
//                     <input className="each-price" type="text" name="price" value={`${formattedPricePerItem} each`} placeholder={`${formattedPricePerItem} each`} readOnly />
//                   </div>
//                 </div>
//               );
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
//   );
// };

// export default Order;



import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import API from '../../api.js';
import './order.css';

const Order = () => {
  const {
    getTotalAmount,
    getplainAmount,
    token,
    food_list,
    cartitems,
    setcartitems,
    userId,
    address,
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    userId: '',
    items: [],
    amount: 0,
    status: 'Food Processing',
    date: '',
    time: '',
    address: {},
  });

  useEffect(() => {
    const currentDate = new Date();
    const date = currentDate.toISOString().split('T')[0];
    const time = currentDate.toISOString().split('T')[1].split('.')[0];

    const newItems = food_list
      .map((item) => ({
        item: item.name,
        quantity: cartitems[item._id],
        price: item.price * 80,
      }))
      .filter((item) => item.quantity > 0);

    setOrderData({
      userId,
      items: newItems,
      amount: getplainAmount(),
      status: 'Food Processing',
      date,
      time,
      address,
    });
  }, [food_list, cartitems, userId, address, getplainAmount]);

  const submithandler = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/api/order/place', orderData, {
        headers: {
          Authorization: token,
        },
      });

      if (response.data.success) {
        setcartitems({});
        localStorage.removeItem('cartitems');
        navigate('/');
        alert('Your order has been received!');
      } else {
        console.error(response.data.error);
        alert('Failed to place order');
      }
    } catch (err) {
      console.error('Order error:', err.message);
      alert('Error placing order');
    }
  };

  return (
    <>
      <Navbar />
      <div className="order-cont">
        <form onSubmit={submithandler}>
          {food_list.map((item, index) => {
            const quantity = cartitems[item._id];
            if (quantity > 0) {
              const totalPrice = (item.price * quantity * 80).toFixed(2);
              const pricePerItem = (item.price * 80).toFixed(2);

              return (
                <div className="place-order-item" key={item._id}>
                  <label className="price-label-name">
                    <h4>{item.name}</h4> <p>{`Qty ${quantity}`}</p>
                  </label>
                  <div className="two-tog">
                    <input
                      className="price-input"
                      type="text"
                      readOnly
                      value={`₹${totalPrice}`}
                    />
                    <input
                      className="each-price"
                      type="text"
                      readOnly
                      value={`₹${pricePerItem} each`}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}

          <div className="total">
            <h3 className="total-heading">Total Amount</h3>
            <h3>{getTotalAmount()}</h3>
          </div>

          <button className="order-btn" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Order;
