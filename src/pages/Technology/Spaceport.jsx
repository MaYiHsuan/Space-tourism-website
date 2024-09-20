import React from "react";
import { Link } from 'react-router-dom';
import data from '../../Data/data.json'; // 引入 JSON 數據
import imagePng from '../../assets/technology/image-spaceport-portrait.jpg';
import styles from './Technology.module.css';

function Spaceport() {
  const member = data.technology[1]; // 獲取數據

  return (
    <>
        <div className={styles.background} />
        <div className={styles.container}>
            <div>
                <p><span>03</span> Space launch 101</p>
                <div>
                    <div>
                        <Link to="/Technology"><span className={`${styles.circle} text-preset4`}>1</span></Link>
                        <Link to="/Technology/Capsule"><span className={`${styles.circle} text-preset4`}>2</span></Link>
                        <Link to="/Technology/Spaceport"><span className={`${styles.circle} text-preset4`}>3</span></Link>
                    </div>
                    </div>
                        <p className="text-preset4">The terminology...</p>
                        <p className="text-preset3">{member.name}</p>
                        <p className="text-preset9">{member.description}</p>
                    <div>
                </div>
            </div>
            <div>
            <img src={imagePng} alt={member.name} className={styles.img} />
            </div>
        </div>
    </>
  );
}

export default Spaceport;