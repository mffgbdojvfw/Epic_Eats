// // Navbar.js
// import React, { useEffect, useState } from 'react';
// import './navbar.css'; // Import the CSS file
// import img from "./Logo.png"
// import {Navigate, NavLink,useNavigate} from "react-router-dom"
// import { useContext } from 'react';
// import { StoreContext } from '../context/StoreContext';
// import orders from "./shopping-bag.png"
// import logout from "./logout.png"


// const Navbar = ({ scrollToExploreMenu, scrollToDownloadApp, scrollToFooter }) => {
//   const [isOpen, setIsOpen] = useState(false);
//  const {token,setToken,handleLogout} = useContext(StoreContext) 
//  console.log(token)
 
//  useEffect(() => {
//   const storedToken = localStorage.getItem('token');
//   if (storedToken) {
//     setToken(storedToken);
//   }
// }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const navigate = useNavigate()
//   const Logout = () =>{
//     // localStorage.removeItem("token")
//     // setToken("")
//     // navigate("/")
//     handleLogout();
//     navigate("/")
//   }

  
 
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <p className="appn">EpicEats.</p>
//         <button className="navbar-toggle" onClick={toggleMenu}>
//           <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
//         </button>
//       </div>
//       <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
//         <ul className='nav-icons'>
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink onClick={scrollToFooter}>Menu</NavLink></li>
//           <li><NavLink onClick={scrollToDownloadApp}>Services</NavLink></li>
//           {/* <li><NavLink onClick={scrollToFooter}>Contact</NavLink></li> */}
//         </ul>
//         <ul className='sec'>
//         {/* <li><NavLink to="/search"><span class="material-symbols-outlined">search</span></NavLink></li> */}
//         <li><NavLink to="/fav"><span class="material-symbols-outlined">favorite</span></NavLink></li>
//         <li><NavLink to="/Cart"><span class="material-symbols-outlined">shopping_cart</span></NavLink></li>
//         {/* <li className='NavLink'><NavLink to="/" ><span class="material-symbols-outlined">person</span></NavLink></li> */}
//           {!token ?
//           (<button className='Signin'><NavLink to="/signin">Signin</NavLink></button>):
//             (
//             <div className='navbar-profile'>
//             <div className='profile'><span class="material-symbols-outlined">
//             account_circle
//             </span>
//             <ul className='nav-profile-dropdown'>
//               <li onClick={()=>navigate('/myorders')}><img src={orders} alt="" /><p>Orders</p></li>
//               <hr/>
//               <li onClick={Logout}><img src={logout} alt=""/><p>Logout</p></li>
//             </ul>
//             </div>
//             </div>
//           )}
//         </ul>
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React, { useEffect, useState, useContext } from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import orders from './shopping-bag.png';
import logout from './logout.png';

const Navbar = ({
  scrollToExploreMenu,
  scrollToDownloadApp,
  scrollToFooter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, setToken, handleLogout } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const Logout = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-row">
        <div className="logo-section">
          <p className="appn">EpicEats.</p>
        </div>
        <ul className="nav-icons">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink onClick={scrollToFooter}>Menu</NavLink></li>
          <li><NavLink onClick={scrollToDownloadApp}>Services</NavLink></li>
        </ul>
        <div className="navbar-actions">
          <NavLink to="/Cart" className="cart-link">
            <span className="material-symbols-outlined">shopping_cart</span>
          </NavLink>
          {!token ? (
            <button className="Signin">
              <NavLink to="/signin">Signin</NavLink>
            </button>
          ) : (
            <div className="navbar-profile">
              <div className="profile">
                <span className="material-symbols-outlined">account_circle</span>
                <ul className="nav-profile-dropdown">
                  <li onClick={() => navigate('/myorders')}>
                    <img src={orders} alt="" /><p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={Logout}>
                    <img src={logout} alt="" /><p>Logout</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

