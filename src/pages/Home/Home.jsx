import React from "react";
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <div>
        <p className="text-preset5">SO, YOU WANT TO TRAVEL TO</p>
        <span className="text-preset1">Space</span>
        <p className="text-preset9">
        Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div>
        <Link to="/Destination">
         <span className="text-preset4">Explore</span>
        </Link>
      </div>
    </div>
  );
}

export default Home ;
