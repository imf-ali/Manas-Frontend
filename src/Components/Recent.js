import React, { useState } from "react";
import styles from "./Recent.module.css";
import { displayPic } from "../lib/displayPhoto";

function Recent() {

  const [index, setIndex] = useState(0);
  const image = displayPic[index];

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
