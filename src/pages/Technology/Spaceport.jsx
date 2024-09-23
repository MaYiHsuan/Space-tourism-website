import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import data from '../../Data/data.json';
import imagePng from '../../technology/image-spaceport-portrait.jpg';
import imgSmall from '../../technology/image-spaceport-landscape.jpg';
import styles from './Technology.module.css';

function Spaceport() {
  const member = data.technology[1]; // 獲取數據
  const location = useLocation(); // 使用 useLocation 來獲取當前路徑
  const [activeLink, setActiveLink] = useState(location.pathname); // 初始設定為當前頁面
  
  const handleLinkClick = (path) => {
    setActiveLink(path); // 設定當前被點擊的連結
  };

  const uppercaseStyle = {
    textTransform: 'uppercase'
  };

  return (
    <>
      <div className={styles.background} />
      <div className={styles.container}>
        <p className={`${styles.title} text-preset5 white`}><span className="number" style={{opacity: 0.25}}>03</span>&nbsp;Space launch 101</p>
        <div className={styles.gridbox}>
          <div className={styles.textbox}>
            <div className={styles.circleBox}>
              <Link to="/Technology" onClick={() => handleLinkClick('/Technology')}>
                <div
                  className={`${styles.circle} text-preset4`}
                  style={{
                    backgroundColor: activeLink === '/Technology' ? '#ffffff' : 'transparent',
                    color: activeLink === '/Technology' ? '#0B0D17' : '#ffffff',
                  }}
                >
                  1
                </div>
              </Link>

              <Link to="/Technology/Capsule" onClick={() => handleLinkClick('/Technology/Capsule')}>
                <div
                  className={`${styles.circle} text-preset4`}
                  style={{
                    backgroundColor: activeLink === '/Technology/Capsule' ? '#ffffff' : 'transparent',
                    color: activeLink === '/Technology/Capsule' ? '#0B0D17' : '#ffffff',
                  }}
                >
                  2
                </div>
              </Link>

              <Link to="/Technology/Spaceport" onClick={() => handleLinkClick('/Technology/Spaceport')}>
                <div
                  className={`${styles.circle} text-preset4`}
                  style={{
                    backgroundColor: activeLink === '/Technology/Spaceport' ? '#ffffff' : 'transparent',
                    color: activeLink === '/Technology/Spaceport' ? '#0B0D17' : '#ffffff',
                  }}
                >
                  3
                </div>
              </Link>
            </div>
            <div className={styles.box}>
              <p className="text-preset4 white" style={{...uppercaseStyle, opacity: 0.5}}>The terminology...</p>
              <p className="text-preset3 white" style={uppercaseStyle}>{member.name}</p>
              <p className="text-preset9 blue">{member.description}</p>
            </div> 
          </div>
          <div className={styles.imgbox}>
            <img src={imagePng} alt={member.name} className={styles.img} />
            <img src={imgSmall} alt={member.name} className={styles.imgSmall} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Spaceport;