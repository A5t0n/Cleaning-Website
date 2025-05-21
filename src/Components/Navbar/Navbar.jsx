import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
      <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <CloseIcon className="close-icon" onClick={closeMenu} />
        </div>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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