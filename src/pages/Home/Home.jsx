import React from "react";
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {

  return (
    <>
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.textBox}>
            <p className="blue text-preset5">SO, YOU WANT TO TRAVEL TO</p>
            <span className="white text-preset1">SPACE</span>
            <p className="blue text-preset9">
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div>
            <Link to="/Destination">
            <div className={`${styles.text4} dark-blue text-preset4`}>EXPLORE</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home ;