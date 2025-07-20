import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom'; // Changed from Link

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li><NavLink exact="true" to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </div>

      <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <CloseIcon className="close-icon" onClick={closeMenu} />
        </div>
        <ul>
          <li><NavLink exact="true" to="/" className="nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <MenuIcon style={{ fontSize: 30, color: '#139A43' }} />
      </div>
    </nav>
  );
}

export default Navbar;
