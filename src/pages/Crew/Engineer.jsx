import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import data from '../../Data/data.json';
import imagePng from '../../crew/image-anousheh-ansari.png';
import styles from './Crew.module.css';

function Engineer() {
  const member = data.crew[3]; // 獲取工程師的數據

  const uppercaseStyle = {
    textTransform: 'uppercase'
  };

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  }

  return (
    <>
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.title}>
          <p className={`${styles.title} text-preset5 white`}><span className="number" style={{opacity: 0.25}}>02</span>&nbsp;MEET YOUR CREW</p>
        </div>
        <div className={styles.gridbox}>
          <div className={styles.gridtext}>
            <div className={styles.text}>
              <p className="text-preset4 white" style={{...uppercaseStyle, opacity: 0.5}}>{member.role}</p>
              <p className="text-preset3 white" style={uppercaseStyle}>{member.name}</p>
              <p className="text-preset9 blue">{member.bio}</p>
            </div>
            <div className={styles.point}>
            <Link 
              to="/Crew"
              onClick={() => handleLinkClick('/Crew')} 
              className={`${styles.circle} ${activeLink === '/Crew' ? styles.active : ''}`}
            >
            </Link>
            <Link 
              to="/Crew/Specialist"
              onClick={() => handleLinkClick('/Crew/Specialist')} 
              className={`${styles.circle} ${activeLink === '/Crew/Specialist' ? styles.active : ''}`}
            >
            </Link>
            <Link 
              to="/Crew/Pilot"
              onClick={() => handleLinkClick('/Crew/Pilot')} 
              className={`${styles.circle} ${activeLink === '/Crew/Pilot' ? styles.active : ''}`}
            >
            </Link>
            <Link 
              to="/Crew/Engineer"
              onClick={() => handleLinkClick('/Crew/Engineer')} 
              className={`${styles.circle} ${activeLink === '/Crew/Engineer' ? styles.active : ''}`}
            >
            </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={imagePng} alt={member.name} className={styles.img} />
            <div className={styles.gradientOverlay}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Engineer;
