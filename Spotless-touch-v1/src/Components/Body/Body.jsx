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
        <h1>Spotless Cleaning at Your Service</h1>
        <p>Your home and office deserve a shine!</p>
        <button>Book Now</button>
      </div>
    </div>
    </>
  )
}

export default Body