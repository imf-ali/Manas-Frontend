import React from "react";
import image from "../resource/displayPic/manasHand.jpeg";
import styles from "./NewCard.module.css";

export const NewCard = ({ subtitle, title, heading }) => {
  return (
    <div className={`${styles.inner} ${styles.card}`}>
      <div className={styles.cardLeft}>
        <div className={styles.cardimage}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.cardRight}>
        <h2>{heading}</h2>
        <div className={styles.cardTitle}>
          Posted by : <span>{title}</span>
        </div>
        <div className={styles.content}>
          <span dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>
        <div className={styles.readMore}>
          <h4>Read More</h4>
        </div>
      </div>
    </div>
  );
};
