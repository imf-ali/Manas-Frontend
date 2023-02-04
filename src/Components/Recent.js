import React from "react";
import styles from "./Recent.module.css";
import image from '../resource/front-1.jpeg';
function Recent() {

  return (
    <>
      <div className={styles.advertisement}>
          <h1>Manas Education Centre</h1>
          <h3>Manas Education Centre Preprare for IIT under the Guidance of IITians.</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.recentContainer}>
            <img
              className={styles.image}
              src={image}
              alt="contest"
            />
        </div>
      </div>
    </>
  );
}

export default Recent;
