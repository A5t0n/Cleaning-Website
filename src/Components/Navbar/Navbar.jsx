import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';



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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <CloseIcon className="close-icon" onClick={closeMenu} />
        </div>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
      {/* <button className="cta-button">Get a Quote</button> */}

      <div className="hamburger" onClick={toggleMenu}>
        <MenuIcon style={{ fontSize: 30, color: '#139A43' }} />
      </div>
    </nav>
  )
}

export default Navbar