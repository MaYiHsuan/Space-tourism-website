import React from "react";
import { Link } from 'react-router-dom';
import data from '../../Data/data.json';
import imagePng from '../../assets/crew/image-anousheh-ansari.png';
import styles from './Crew.module.css';

function Engineer() {
  const member = data.crew[3]; // 獲取工程師的數據

  return (
    <>
      <div className={styles.background} />
      <div className={styles.container}>
        <div>
          <p><span>02</span> Meet your crew</p>
          <p>{member.role}</p>
          <p className="text-preset3">{member.name}</p>
          <p className="text-preset9">{member.bio}</p>
          <div>
            <Link to="/Crew"><div className={styles.circle}></div></Link>
            <Link to="/Crew/Specialist"><div className={styles.circle}></div></Link>
            <Link to="/Crew/Pilot"><div className={styles.circle}></div></Link>
            <Link to="/Crew/Engineer"><div className={styles.circle}></div></Link>
          </div>
        </div>
        <div>
          <img src={imagePng} alt={member.name} className={styles.img} />
        </div>
      </div>
    </>
  );
}

export default Engineer;
