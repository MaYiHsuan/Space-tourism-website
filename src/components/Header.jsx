import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import styles from './Header.module.css';
import menu from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoline}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.line}/>
        <div>
          <img src={menu} alt="menu" className={styles.menu} onClick={toggleMenu} />
        </div>
      </div>
      
      <ul className={`${styles.box} ${isMenuOpen ? styles.menuOpen : ''} white`}>
        <li>
          <Link 
            to="/"  
            onClick={() => handleLinkClick('/')} 
            className={`${styles.tab} text-preset8 ${activeLink === '/' ? styles.active : ''}`}
          >
            <span className="number">00</span>&nbsp;Home
          </Link>
        </li>
        <li>
          <Link 
            to="/Destination" 
            onClick={() => handleLinkClick('/Destination')} 
            className={`${styles.tab} text-preset8 ${activeLink === '/Destination' ? styles.active : ''}`}
          >
            <span className="number">01</span>&nbsp;Destination
          </Link>
        </li>
        <li>
          <Link 
            to="/Crew" 
            onClick={() => handleLinkClick('/Crew')} 
            className={`${styles.tab} text-preset8 ${activeLink === '/Crew' ? styles.active : ''}`}
          >
            <span className="number">02</span>&nbsp;Crew
          </Link>
        </li>
        <li>
          <Link 
            to="/Technology" 
            onClick={() => handleLinkClick('/Technology')} 
            className={`${styles.tab} text-preset8 ${activeLink === '/Technology' ? styles.active : ''}`}
          >
            <span className="number">03</span>&nbsp;Technology
          </Link>
        </li>
      </ul>
      {isMenuOpen && (
        <div className={styles.closeMenu} onClick={toggleMenu}>
          <img src={closeIcon} alt="Close menu"/>
        </div>
      )}
    </div>
  );
}

export default Header;
