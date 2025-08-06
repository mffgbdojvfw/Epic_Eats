// import React, { useState } from 'react'
// import Navbar from '../../components/Navbar'
// import "./placeorder.css"
// import { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'
// import axios from "axios"
// import { useNavigate } from 'react-router-dom'

// const Placeorder = () => {
//     const { getTotalAmount,token,cartitems,food_list,url} = useContext(StoreContext)
//     const [data,setdata] = useState({
//         firstname:"",
//         lastname:"",
//         address:"",
//         street:"",
//         city:"",
//         state:"",
//         zipcode:"",
//         country:"",
//         phone:""
//     })

//     const onchangehandler = (evt) =>{
//         setdata((data)=>({...data,[evt.target.name]:evt.target.value}))
//     }

//     const navigate = useNavigate()
//     const placeOrder = async(event) =>{
// event.preventDefault()
// // let Orderitems = []
// // food_list.map((item)=>{
// //     if(cartitems[item._id]>0){
// //         let itemInfo = item
// //         itemInfo["quantity"] = cartitems[item._id]
// //         Orderitems.push(itemInfo)
// //     }
// // })
// // console.log(Orderitems)
// // let Orderdata = {
// //     address:data,
// //     items:Orderitems,
// //   amount:getTotalAmount()+2
// // }
// // let response = await axios.post(url+"/api/order/place",Orderdata,{headers:{token}})
// // if(response.data.success){
// //     const {session_url} = response.data
// //     window.location.replace = (session_url)
// // }
// // else{
// //     alert("Error")
// // }

// try{
//    const response = await axios.post(`${url}/api/address/add`,data)
//    if(response.data.success){
//    navigate('/placeorder')
//    }
//    else{
//     alert("Error")
//    }
// }catch(err){
// console.log(err)
// alert(err)
// }

//     }
    
    
//     return (
//         <>
//             <div>

//                 <Navbar />
//             </div>
//             <div className="bill">
//                 <form onSubmit={placeOrder}>
//                     <div class="form-group">
//                         <h2>Delivery Information</h2>
//                         <div class="side-by-side">
//                             <div class="input-container">
//                                 <input className="inputfield" placeholder="First name" type="text" id="firstname" name="firstname" onChange={onchangehandler} value={data.firstname} required />
//                             </div>
//                             <div class="input-container">

//                                 <input className="inputfield" placeholder="Last name" type="text" id="lastname" name="lastname" onChange={onchangehandler} value={data.lastname} required />
//                             </div>
//                         </div>
//                     </div>

//                     <div class="form-group">

//                         <input type="text" className="inputfield" placeholder="Society/Flat,House No" id="address" name="address" required onChange={onchangehandler} value={data.address} />
//                     </div>

//                     <div class="form-group">

//                         <input type="text" className="inputfield" placeholder="Street" id="street" name="street" required  onChange={onchangehandler} value={data.street}/>
//                     </div>

//                     <div class="form-group">
//                         <div class="side-by-side">
//                             <div class="input-container">

//                                 <input type="text" className="inputfield" placeholder="City" id="city" name="city" required   onChange={onchangehandler} value={data.city}/>
//                             </div>
//                             <div class="input-container">

//                                 <input type="text" id="state" className="inputfield" placeholder="State" name="state" required  onChange={onchangehandler} value={data.state} />
//                             </div>
//                         </div>
//                     </div>

//                     <div class="form-group">
//                         <div class="side-by-side">
//                             <div class="input-container">

//                                 <input type="text" className="inputfield" placeholder="Zip code" id="zipcode" name="zipcode" required  onChange={onchangehandler} value={data.zipcode} />
//                             </div>
//                             <div class="input-container">

//                                 <input type="text" id="country" className="inputfield" placeholder="Country" name="country" required   onChange={onchangehandler} value={data.country}/>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="form-group">

//                         <input type="tel" id="phone" name="phone" className="inputfield" placeholder="Phone" required  onChange={onchangehandler} value={data.phone} />
//                     </div>
//                 </form>
//                 <div className="cart-total">
//                     <h2>Cart Totals</h2>
//                     <div className='cart-items-total'>
//                         <div className="cart-total-details">
//                             <p>Subtotal</p>
//                             <p>${getTotalAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <p>Delivery Fee</p>
//                             <p>${2}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <p><strong>Total</strong></p>
//                             <p><strong>${getTotalAmount() + 2}</strong></p>
//                         </div>
//                     </div>
//                     <button type='submit'>Proceed To Chekout</button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Placeorder



import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import "./placeorder.css"
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



const Placeorder = () => {
    const { getTotalAmount, token, cartitems, food_list, url ,setaddress,getplainAmount} = useContext(StoreContext)
    const [data, setdata] = useState({
        firstname: "",
        lastname: "",
        address: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const onchangehandler = (evt) => {
        setdata((data) => ({ ...data, [evt.target.name]: evt.target.value }))
    }

    const navigate = useNavigate()
    const placeOrder = async (event) => {
        event.preventDefault()
        // let Orderitems = []
        // food_list.map((item)=>{
        //     if(cartitems[item._id]>0){
        //         let itemInfo = item
        //         itemInfo["quantity"] = cartitems[item._id]
        //         Orderitems.push(itemInfo)
        //     }
        // })
        // console.log(Orderitems)
        // let Orderdata = {
        //     address:data,
        //     items:Orderitems,
        //   amount:getTotalAmount()+2
        // }
        // let response = await axios.post(url+"/api/order/place",Orderdata,{headers:{token}})
        // if(response.data.success){
        //     const {session_url} = response.data
        //     window.location.replace = (session_url)
        // }
        // else{
        //     alert("Error")
        // }

        try {
            const response = await axios.post(`${url}/api/address/add`, data)
            if (response.data.success) {
                toast.success("Address is added!")
                navigate('/placeorder')
                setaddress(data)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
              toast.error(error.response.data.message);
            } else {
              toast.error('An error occurred. Please try again.');
              console.error('Error:', error);
            }
          }

    }
function two(a){
return a
}

useEffect(()=>{
    if(!token){
        navigate("/Cart")
    }
   else if(getplainAmount()==0){
        navigate("/Cart")
        toast("You have to Add items in the cart")
    }
},[token])
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="bill">
                <form onSubmit={placeOrder}>
                    <div className="form-group">
                        <h2>Delivery Information</h2>
                        <div className="side-by-side">
                            <div className="input-container">
                                <input className="inputfield" placeholder="First name" type="text" id="firstname" name="firstname" onChange={onchangehandler} value={data.firstname} required />
                            </div>
                            <div className="input-container">

                                <input className="inputfield" placeholder="Last name" type="text" id="lastname" name="lastname" onChange={onchangehandler} value={data.lastname} required />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">

                        <input type="text" className="inputfield" placeholder="Society/Flat,House No" id="address" name="address" required onChange={onchangehandler} value={data.address} />
                    </div>

                    <div className="form-group">

                        <input type="text" className="inputfield" placeholder="Street" id="street" name="street" required onChange={onchangehandler} value={data.street} />
                    </div>

                    <div className="form-group">
                        <div className="side-by-side">
                            <div className="input-container">

                                <input type="text" className="inputfield" placeholder="City" id="city" name="city" required onChange={onchangehandler} value={data.city} />
                            </div>
                            <div className="input-container">

                                <input type="text" id="state" className="inputfield" placeholder="State" name="state" required onChange={onchangehandler} value={data.state} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="side-by-side">
                            <div className="input-container">

                                <input type="text" className="inputfield" placeholder="Zip code" id="zipcode" name="zipcode" required onChange={onchangehandler} value={data.zipcode} />
                            </div>
                            <div className="input-container">

                                <input type="text" id="country" className="inputfield" placeholder="Country" name="country" required onChange={onchangehandler} value={data.country} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">

                        <input type="tel" id="phone" name="phone" className="inputfield" placeholder="Phone" required onChange={onchangehandler} value={data.phone} />
                    </div>
                    <button type='submit' className='addres-btn'>Proceed To Checkout</button>
                </form>
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className='cart-items-total'>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{two(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p><strong>Total</strong></p>
                            <p><strong>{getTotalAmount()}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Placeorder
