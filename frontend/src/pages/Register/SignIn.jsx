
// import React, { useState } from 'react';
// import './signin.css';
// import Navbar from './Navbar' 
// import img from "./img1.jpg"
// import logo from "./Logo.png"
// import {Link} from "react-router-dom"

// const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [vis , setvis] = useState(true)

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle sign in logic here
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     const eye =()=>{
//      setvis(!vis)
//     }



//     return (
//         <>
//         <div className="cont">
//             <img src={logo} alt="" />
//             <Link to="/"><span class="material-symbols-outlined">
// cancel
// </span></Link>
//         </div>

//         <div className="signin-container">
//             <div className="image">
//                 <img src={img} alt="" />
//             </div>
//             <form className="signin-form" onSubmit={handleSubmit}>
//                 <div className="head">
//                 <h2>Welcome To Foodeli</h2>
//                 <p>please login with your details here</p>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder='Enter your email adress'
//                         required 
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type={vis? "password":"text"}
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder='Enter your password'
//                         required
//                     />
//                    <span class="material-symbols-outlined" onClick={eye()}>
//                    visibility</span>
//                 </div>
//                 <div className="forgot"><Link to="/">Forgot password?</Link></div>
//                 <button type="submit">Sign In</button>
//                 <p className='ch'>don't have an account?<Link to="/signup">Signup</Link></p>
//             </form>
//         </div>
//         </>
//     );
// };

// export default SignIn;


import React, { useState } from 'react';
import './signin.css';
import Navbar from '../../components/Navbar';
import img from './img1.jpg';
import { Link,Navigate ,useNavigate} from 'react-router-dom';
import axios from "axios"
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
import {toast} from "react-toastify"


const SignIn = () => {
  const [data,setdata] = useState({
    email:"",
    password:""
  })

  const {setToken,setUserId,setcartitems,handleLogin} = useContext(StoreContext)
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [vis, setvis] = useState(false);
  const url = "http://localhost:4300"
  const navigate = useNavigate()
  
  
  const onSignin = async(event) => {
    event.preventDefault();
    try{

      const response = await axios.post(`${url}/api/user/login`,data)
      if(response.data.success){
       navigate("/")
      toast.success("Loged In successfully")
       setToken(response.data.registertoken)
       localStorage.setItem("token",response.data.registertoken)
       setUserId(response.data.userId); // Store user ID in context
       localStorage.setItem("userId", response.data.userId)
      //  console.log(response.data.userId)
     
      }
      else{
        toast.error(response.data.message || "Login failed");
        alert("some error")
      }
    }catch(err){
     console.log(err)
     toast.error(err.response?.data?.message || "An error occurred during login");
      alert("Error")
    }
   
  };
  const onchangehandler = (evt) =>{
    setdata((data)=>({...data,[evt.target.name]:evt.target.value}))
  }

  const eye = () => {
    setvis(!vis);
  };

  return (
    <>
      <div className="cont">
        <h1 className='appn'>EpicEats.</h1>
        <Link to="/">
          <span className="material-symbols-outlined">cancel</span>
        </Link>
      </div>

      <div className="signin-container">
        <div className="image">
          <img src={img} alt="Sign In" />
        </div>
        <form className="signin-form" onSubmit={onSignin}>
          <div className="head">
            <h2>Welcome To Foodeli</h2>
            <p>Please login with your details here</p>
          </div>
          <div className="form-g">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name='email'
              value={data.email}
              onChange={onchangehandler}
              placeholder="Enter your email address"
              required
            autoComplete='off'
            className='inp'
            />
          </div>
          <div className="form-g">
            <label htmlFor="password">Password:</label>
            <input
              type={vis ? 'text' : 'password'}
              id="password"
              name='password'
              value={data.password}
              onChange={onchangehandler}
              placeholder="Enter your password"
              required
              autoComplete='off'
              className='inp'
            />
            <span
              className="material-symbols-outlined"
              onClick={eye}
              style={{ cursor: 'pointer' }}
            >
              {vis ? 'visibility' : 'visibility_off'}
            </span>
          </div>
          <div className="forgot">
            <Link to="/">Forgot password?</Link>
          </div>
          <button  className="btn" type="submit">Sign In</button>
          <p className="ch">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
