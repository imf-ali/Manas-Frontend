import React, { } from "react";
import styles from "./TagLine.module.css";
import image from '../resource/displayPic/manas.jpeg';

function TagLine() {
  return (
    <div className={styles.contestsMain}>
      <div className={styles.imagediv}>
        <img className={styles.image} src={image} alt="manas" />
      </div>
      <div className={styles.contentdiv}>
        <h2 className={styles.heading}>Manas Education Centre</h2>
        <div className={styles.contestNames}>
          "We provide classroom program for IIT JEE preparation in pattern proof mode. Our team of IITian faculties are dedicated and devoted of highest caliber with a genuine concern for building student's future. Our scientific approach has produced highest Success ratio in JEE Main & JEE Advanced across all over India."
        </div>
      </div>
    </div>
  );
}

export default TagLine;
