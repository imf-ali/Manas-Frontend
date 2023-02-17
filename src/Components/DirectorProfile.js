import React from "react";
import { directorProfile } from "../lib/data";
import styles from "./DirectorProfile.module.css";

function Director() {
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.heading}>Director's Profile</h2>
      <div className={styles.directorContainer}>
        <div className={styles.directorImage}>
          <img
            src={directorProfile.image}
            alt={directorProfile.name}
            className={styles.directorImg}
          />
          <div className={styles.directorText}>
            <h3 className={styles.name}>{directorProfile.name}</h3>
            <p>{directorProfile.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Director;
