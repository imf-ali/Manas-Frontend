import React, { useContext, useEffect, useState } from "react";
import styles from "./Recent.module.css";
import { displayPic } from "../lib/displayPhoto";
import AuthContext from "../store/AuthContext";

function Recent() {

  const { manasInstance } = useContext(AuthContext);
  const [allNotice, setAllNotice] = useState([]);
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

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getAllNotice();
      if (res.data) setAllNotice(res.data.allNotice);
    };
    getData();
  },[])

  return (
    <div className={styles.mainContainer}>
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
