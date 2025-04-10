import React from 'react'
import './Body.css'
import Banner from '../../assets/banner.png'

function Body() {
  return (
    <>
    <div className="body-image">
        <img src={Banner} alt="Cleaning Team" />
      </div>
    <div className='body'>
      <div className="body-text">
       {/*About Section*/}
        <h1>About Us</h1>
       {/*Services Section*/}
        <h1>Services</h1>
       {/*Contact Section*/}
        <h1>Contact Us</h1>
      </div>
    </div>
    </>
  )
}

export default Body