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


import React, { useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Explore_menu from '../../components/Explore_menu';
import Food_display from '../../components/Food_display';
import Footer from '../../components/Footer';
import Download_app from '../../components/Download_app';
import './home.css';

const Home = () => {
  const [cate, setcate] = useState('All');

  const exploreMenuRef = useRef(null);
  const downloadAppRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToExploreMenu = () => {
    exploreMenuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDownloadApp = () => {
    downloadAppRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        scrollToExploreMenu={scrollToExploreMenu}
        scrollToDownloadApp={scrollToDownloadApp}
        scrollToFooter={scrollToFooter}
      />

      {/* Hero Section */}
      <div id="home-section">
        <div className="suchna">
          <p>Order your Favorite food here</p>
          <button className="view" onClick={scrollToFooter}>
            View Menu
          </button>
        </div>
      </div>

      {/* Explore Menu Section */}
      <div ref={footerRef} className="explore-container">
        <h2 className="expl">Explore Menu</h2>
        <div className="category">
          <Explore_menu category={cate} setcategory={setcate} />
        </div>
        <div className="display">
          <Food_display category={cate} />
        </div>
      </div>

      {/* Download App Section */}
      <div className="Download" ref={downloadAppRef}>
        <Download_app />
      </div>

      {/* Footer */}
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;









