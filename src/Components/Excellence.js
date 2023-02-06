import React from "react";
import styles from "./Excellence.module.css";

function Excellence({ mainheading, content, listofContent, image }) {
  return (
    <div className={styles.contestsMain}>
      <div className={styles.image}>
        <img src={image} alt="focus" />
      </div>
      <div className={styles.firsthalf}>
        <h2 className={styles.heading}>{mainheading}</h2>
        {content && <div className={styles.contestNames}>{content}</div>}
        {listofContent &&
          listofContent.map((item) => {
            return <div className={styles.contestNames}>{item}</div>;
          })}
      </div>
    </div>
  );
}

export default Excellence;
