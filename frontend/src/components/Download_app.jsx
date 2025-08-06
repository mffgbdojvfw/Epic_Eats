import React from 'react'
import { assets } from '../new_images/assets'
import "./download.css"

const Download_app = () => {
  return (
    <>   
     <div className='download-app'>
      <p>For Better Experience Download <br/>Foodeli App</p>
      <div className="plateforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
    </>

  )
}

export default Download_app
