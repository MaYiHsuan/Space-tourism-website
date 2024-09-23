import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import data from '/Space-tourism-website/Data/data.json'; // 引入 JSON 數據
import imagePng from '/Space-tourism-website/assets/destination/image-moon.png';
import styles from './Destination.module.css';

function Moon() {
  const member = data.destinations[0]; // 獲取數據
  const uppercaseStyle = {
    textTransform: 'uppercase'
  };

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
        <div className={styles.background} />
        <div className={styles.container}>
            <div className={styles.title}>
                <p className="text-preset5 white"><span className="number" style={{opacity: 0.25}}>01</span>&nbsp;Pick your destination</p>
            </div>
            <div className={styles.gridbox}>
                <div className={styles.imgbox}>
                    <img src={imagePng} alt={member.name} className={styles.img} />  
                </div>
                <div className={styles.textbox}>
                    <div className={styles.planet}>
                        <Link 
                            to="/Destination" 
                            onClick={() => handleLinkClick('/Destination')} 
                            className={`${styles.tab} text-preset8 ${activeLink === '/Destination' ? styles.active : ''}`}
                        >
                            MOON
                        </Link>
                        <Link 
                            to="/Destination/Mars"
                            onClick={() => handleLinkClick('/Destination/Mars')} 
                            className={`${styles.tab} text-preset8 ${activeLink === '/Destination/Mars' ? styles.active : ''}`}
                        >
                            MARS
                        </Link>
                        <Link 
                            to="/Destination/Europa" 
                            onClick={() => handleLinkClick('/Destination/Europa')} 
                            className={`${styles.tab} text-preset8 ${activeLink === '/Destination/Europa' ? styles.active : ''}`}
                        >
                            EUROPA
                        </Link>
                        <Link 
                            to="/Destination/Titan"
                            onClick={() => handleLinkClick('/Destination/Titan')} 
                            className={`${styles.tab} text-preset8 ${activeLink === '/Destination/Titan' ? styles.active : ''}`}
                        >
                            TITAN
                        </Link>
                    </div>
                    <p className="text-preset2 white" style={uppercaseStyle}>{member.name}</p>
                    <p className="text-preset9 blue">{member.description}</p>
                    <hr className={styles.line} style={{opacity: 0.25}}/>
                    <div className={styles.text}>
                        <div>
                            <p className="text-preset7 blue">AVG. DISTANCE</p>
                            <p className="text-preset6 white" style={uppercaseStyle}>{member.distance}</p>
                        </div>
                        <div>
                            <p className="text-preset7 blue">EST. TRAVEL TIME</p>
                            <p className="text-preset6 white" style={uppercaseStyle}>{member.travel}</p>
                        </div>  
                    </div>
                    
                </div>                            
            </div>
        </div>
    </>
  );
}

export default Moon;