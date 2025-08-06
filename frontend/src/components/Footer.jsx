import React from 'react'
import "./footer.css"
import { assets } from '../new_images/assets'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className="footer-contents">
      <div className="footer-desc">
      <h1  className="appn">EpicEats.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem voluptate hic quasi consectetur, esse magni maiores, at commodi necessitatibus porro quisquam eos reprehenderit quos tenetur quod. Magnam, asperiores dolore.</p>
      </div>
      <div className="logos">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
      </div>
      </div>
      <div className="footer-menus">
        <h3>COMPANY</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
      <div className="contact">
      <h3>GET IN TOUCH</h3>
      <ul>
      <li><Link to="/">+1-212-456-7890</Link></li>
      <li><Link to="/About">contact@foodeli.com</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Footer
