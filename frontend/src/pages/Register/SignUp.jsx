import React, { useContext, useEffect } from 'react'
import './signin.css';
import Navbar from '../../components/Navbar';
import img from "./img1.jpg"
import { useState } from 'react'; 
import {Link,Navigate,useNavigate} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"
import { StoreContext } from '../../context/StoreContext';
const SignUp = () => {
    const [data,setdata] = useState({
        name:"",
        email:"",
        password:""
    })
    const {setToken,userId,setUserId} = useContext(StoreContext)
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [vis,setvis] = useState(true)
    const navigate = useNavigate()


    const eye = () =>{
        setvis(!vis)
    }

    const onChangeHandler = (evt) =>{
     setdata((data)=>({...data,[evt.target.name]:evt.target.value}))
    }

   useEffect(()=>{
    console.log(data)
},[data])



const url = `http://localhost:4300`



const onSignup = async(evt)=>{
evt.preventDefault()
const response = await axios.post(`${url}/api/user/register`,data)

    //  const response = await axios.post(`${url}/api/user/register`,data)
    if(response.data.success){
       
        setToken(response.data.registertoken)
        localStorage.setItem('token', response.data.registertoken); 
        setUserId(response.data.userId); // Store user ID in context
        localStorage.setItem("userId", response.data.userId)
        navigate("/")
        toast.success("Registered successfully")
        // console.log(response.data.registertoken)
        }
       
        else{
        toast.error(response.data.message)
        }


}

    return (
        <>
        <div className="cont">
        <h1 className='appn'>EpicEats.</h1>
            <Link to="/"><span class="material-symbols-outlined">
cancel
</span></Link>
        </div>

        <div className="signin-container">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <form className="signin-form" onSubmit={onSignup}>
                <div className="head">
                <h2>Create New Account</h2>
                <p>Please enter details to create a new account</p>
                </div>
                <div className="form-g">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="name"
                        id="name"
                        name='name'
                        value={data.name}
                        onChange={onChangeHandler}
                        placeholder='Enter your full name '
                        required 
                        className='inp'
                    />
                </div>
                <div className="form-g">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={data.email}
                        onChange={onChangeHandler}
                        placeholder='Enter your email adress'
                        required 
                        className='inp'
                    />
                </div>
                <div className="form-g">
                    <label htmlFor="password">Password:</label>
                    <input
                        type={vis? "text" : "password"}
                        id="password"
                        name='password'
                        value={data.password}
                        onChange={onChangeHandler}
                        placeholder='Enter your password'
                        required
                        className='inp'

                    />
                     <span className="material-symbols-outlined" onClick={eye}>{vis? "visibility":"visibility_off"}</span>
                </div>
                {/* <div className="forgot"><Link to="/">Forgot password?</Link></div> */}
                <button className="btn"  type="submit">Sign Up</button>
                <p className='ch'>Already have an account? <Link to="/signin">Signin</Link></p>
            </form>
        </div>
        </>
    );
}

export default SignUp


//  setToken(response.data.token)
// localStorage.setItem("token",response.data.token)