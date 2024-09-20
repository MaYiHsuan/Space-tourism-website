import React from "react";
import { Link } from 'react-router-dom';
import data from '../../Data/data.json'; // 引入 JSON 數據
import imagePng from '../../assets/destination/image-europa.png';
import styles from './Destination.module.css';

function Europa() {
  const member = data.destinations[2]; // 獲取數據

  return (
    <>
        <div className={styles.background} />
        <div className={styles.container}>
            <div>
                <p><span>01</span> Pick your destination</p>
                <img src={imagePng} alt={member.name} className={styles.img} />
            </div>
            <div>
                <div>
                    <Link to="/Destination"><span className={`${styles.tab} text-preset8`}>MOON</span></Link>
                    <Link to="/Destination/Mars"><span className={`${styles.tab} text-preset8`}>MARS</span></Link>
                    <Link to="/Destination/Europa"><span className={`${styles.tab} text-preset8`}>EUROPA</span></Link>
                    <Link to="/Destination/Titan"><span className={`${styles.tab} text-preset8`}>TITAN</span></Link>
                </div>
                <p className="text-preset2">{member.name}</p>
                <p className="text-preset9">{member.description}</p>
                <hr className={styles.line}/>
                <div>
                    <p className="text-preset7">AVG. DISTANCE</p>
                    <p className="text-preset6">{member.distance}</p>
                </div>
                <div>
                    <p className="text-preset7">Est. travel time</p>
                    <p className="text-preset6">{member.travel}</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Europa;