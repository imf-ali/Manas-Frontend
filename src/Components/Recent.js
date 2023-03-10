import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Recent.module.css";
import { displayPic } from "../lib/displayPhoto";
import AuthContext from "../store/AuthContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Recent() {
  const { manasInstance } = useContext(AuthContext);
  const [allNotice, setAllNotice] = useState([]);
  const [index, setIndex] = useState(0);
  const [hoverImage, setHoverImage] = useState(false);

  const checkNumber = (number) => {
    if (number > displayPic.length - 1) {
      return 0;
    } else if (number < 0) {
      return displayPic.length - 1;
    }
    return number;
  };

  const nextImage = useCallback(() => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }, []);

  const prevImage = useCallback(() => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!hoverImage)
        nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImage, hoverImage]);

  useEffect(() => {
    const getData = async () => {
      const res = await manasInstance.getNotice();
      if (res.data) setAllNotice(res.data.allNotice.reverse());
    };
    getData();
  }, [manasInstance]);

  const frontItem = (direction) => {
    if (direction)
      nextImage();
    else prevImage();
  }

  const mouseEnterHander = () => {
    setHoverImage(true);
  }

  const mouseLeaveHander = () => {
    setHoverImage(false);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.advertisement}>
          <div className={styles.wrapper}>
            <div className={styles.imageContainer}
              onMouseEnter={mouseEnterHander}
              onMouseLeave={mouseLeaveHander}
            >
              <button onClick={() => frontItem(true)} className={styles.leftbutton}>
                <AiOutlineArrowLeft />
              </button>
              <img
                className={styles.image}
                src={displayPic[index]}
                alt="contest"
              />
              <button onClick={() => frontItem(false)} className={styles.rightbutton}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.notice}>
          <div className={styles.noticeHead}>Notice Board</div>
          <div className={styles.notices}>
            {allNotice.map((e, index) => {
              return <li key={index}>{e.heading}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recent;
