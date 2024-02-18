import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styles from "./ReviewsSlider.module.css";

const Review = ({ displayPic }) => {

  const [index, setIndex] = useState(0);
  const [hoverImage, setHoverImage] = useState(false);

  const checkNumber = useCallback((number) => {
    if (number > displayPic.length - 1) {
      return 0;
    } else if (number < 0) {
      return displayPic.length - 1;
    }
    return number;
  },[displayPic]);

  const nextPerson = useCallback(() => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  },[checkNumber]);

  const prevPerson = useCallback(() => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  },[checkNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!hoverImage)
        nextPerson();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextPerson, hoverImage]);

  const mouseEnterHander = () => {
    setHoverImage(true);
  }

  const mouseLeaveHander = () => {
    setHoverImage(false);
  }

  return (
    <div className={styles.container}>
      {(displayPic.length > index) && (
        <>
          <div className={styles.title}>
            <h2>Testimonial of our Almuni</h2>
            <div className={styles.buttonContainer}>
              <button onClick={prevPerson}>
                <AiOutlineArrowLeft />
              </button>
              <button onClick={nextPerson}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <article 
            className={styles.alumni} 
            onMouseEnter={mouseEnterHander} 
            onMouseLeave={mouseLeaveHander}
          >
            <p className={styles.info}>{displayPic[index].meta.description}</p>
            <div className={styles.aboutAlmuni}>
              <img 
                src={displayPic[index].data} 
                alt={displayPic[index].data} 
                className={styles.image} 
                loading="lazy"
              />
              <div className={styles.almuniDetails}>
                <h4 className={styles.author}>{displayPic[index].meta.name}</h4>
                <p className={styles.job}>{displayPic[index].meta.designation}</p>
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  );
};

export default Review;
