import React from "react";
import styles from "./Recent.module.css";
import { displayPic } from "../lib/displayPhoto";

function Recent() {
  const image = displayPic[0];

  // setTimeout(() => {
  //   setIndex((index) => {
  //     let num = ((index + 1) % displayPic.length)
  //     console.log(num);
  //     return num;
  //   });
  // }, 5000);

  // setIndex((index) => {
  //   return index + 1 % displayPic.length;
  // });

  return (
    <div className={styles.mainContainer}>
      <h1>Manas Education Centre</h1>
      <h3>
        Manas Education Centre Preprare for IIT under the Guidance of IITians.
      </h3>
      <div className={styles.container}>
        <div className={styles.advertisement}>
          <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={image} alt="contest" />
            </div>
          </div>
        </div>
        <div className={styles.notice}>
          <div className={styles.noticeHead}>Notice Board</div>
        </div>
      </div>
    </div>
  );
}

export default Recent;
