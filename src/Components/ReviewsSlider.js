import React, { useState, useEffect, useCallback } from "react";
import { reviews } from "../lib/data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styles from "./ReviewsSlider.module.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const [hoverImage, setHoverImage] = useState(false);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    } else if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = useCallback(() => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  },[]);

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if(!hoverImage)
        nextPerson();
    }, 3000);

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
        <p className={styles.info}>{text}</p>
        <div className={styles.aboutAlmuni}>
          <img src={image} alt={name} className={styles.image} />
          <div className={styles.almuniDetails}>
            <h4 className={styles.author}>{name}</h4>
            <p className={styles.job}>{job}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Review;
