import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
  return (
      <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* <button className="cta-button">Get a Quote</button> */}
    </nav>
  )
}

export default Navbar