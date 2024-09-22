import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import styles from './Header.module.css';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoline}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.line} />
      </div>
      
      <ul className={`${styles.box} white`}>
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
    </div>
  );
}

export default Header;
