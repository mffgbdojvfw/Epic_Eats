// import React,{useRef} from 'react'
// import Navbar from '../../components/Navbar';
// import img from "./home1.jpg"
// import { useState } from 'react';
// import "./home.css"
// import CategorySlider  from '../../components/CategorySlider';
// import Explore_menu from '../../components/Explore_menu';
// import Food_display from '../../components/Food_display';
// import Footer from '../../components/Footer';
// import Download_app from '../../components/Download_app';
// import { useContext } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// const Home = () => {
//   const [cate , setcate] = useState("All")
//   // const {fav} = useContext(StoreContext)
//   const exploreMenuRef = useRef(null); // Ref for "Explore Menu" section
//   const downloadAppRef = useRef(null);
//   const footerRef = useRef(null);


//   const scrollToExploreMenu = () => {
//     if (exploreMenuRef.current) {
//       exploreMenuRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToDownloadApp = () => {
//     downloadAppRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const scrollToFooter = () => {
//     footerRef.current.scrollIntoView({ behavior: 'smooth' });
//   };


//   return (
//     <>
//     <div>
//       <Navbar   scrollToExploreMenu={scrollToExploreMenu} scrollToDownloadApp={scrollToDownloadApp}
//           scrollToFooter={scrollToFooter}/>
//       <div id='home-section'>
//       <div className='suchna'>
//         <p>Order your Favorite food here</p>
//         <button className='view' onClick={scrollToFooter}>View Menu</button>
//         </div>
//       <div className="container">
//         <img src={img} alt="" className='image' />
//       </div>
//       </div>
//       <div ref={footerRef}>
//       <h2 className='expl'>Explore Menu</h2>
//       <div className="category" >
//         <Explore_menu category={cate} setcategory = {setcate}/>
//       {/* <CategorySlider/> */}
//       </div>
//       <div className="display">
//         <Food_display category={cate} />
//       </div>
//       </div>
//       <div className="Download" ref={downloadAppRef}>
//         <Download_app/>
//       </div>
//       {/* <div className="favr">
//       {fav.length > 0 ? (
//           fav.map((item, index) => (
//             item ? (
//               // <img key={index} src={item.img} alt={`Item ${index}`} />
//               <p>{item.name}</p>
//             ) : (
//               <div key={index}>Item {index} is undefined</div>
//             )
//           ))
//         ) : (
//           <div>No favorites yet</div>
//         )}
//       </div> */}
//       <div className="Footer">
//         <Footer/>
//     </div>
//     </div>
    
//   </>
//   )
// }


// export default Home











import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our Hospital Management System</h1>
          <p>
            Manage patients, doctors, and hospital resources easily and
            efficiently with our modern system. Designed for both staff and
            administrators to work seamlessly.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src="https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8369.jpg"
            alt="Hospital Illustration"
          />
        </div>
      </section>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img
              src="https://img.icons8.com/color/96/000000/hospital-room.png"
              alt="Patients"
            />
            <h3>Patient Management</h3>
            <p>
              Easily track patient records, appointments, and medical histories
              in one place.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://img.icons8.com/color/96/000000/doctor-male.png"
              alt="Doctors"
            />
            <h3>Doctor Directory</h3>
            <p>
              View and manage doctor schedules, departments, and specialties
              quickly.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://img.icons8.com/color/96/000000/treatment-plan.png"
              alt="Appointments"
            />
            <h3>Appointments</h3>
            <p>
              Schedule, update, and track appointments effortlessly for
              patients and staff.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
