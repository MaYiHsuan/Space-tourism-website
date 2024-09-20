import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import styles from './Header.module.css';

function Header() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <hr />
      <ul className={`${styles.box} white`}>
        <li className={styles.tab}><Link to="/">00 Home</Link></li>
        <li className={styles.tab}><Link to="/Destination">01 Destination</Link></li>
        <li className={styles.tab}><Link to="/Crew">02 Crew</Link></li>
        <li className={styles.tab}><Link to="/Technology">03 Technology</Link></li>
      </ul>
    </div>
  );
}

export default Header;
