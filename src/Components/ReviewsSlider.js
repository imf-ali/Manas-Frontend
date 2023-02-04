import React, { useState } from 'react';
import { reviews, directorProfile } from '../lib/data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './ReviewsSlider.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = reviews[index];

  const checkNumber = (number) => {
    if(number > reviews.length - 1){
      return 0;
    }
    else if(number < 0){
      return reviews.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  }

  const directorProfileRender = () => { 
    return (
      <>
      <div className='director-div'>
        <div children="title">
          <h2 className="heading">Director's Profile</h2>
          <div className="underline"></div>
        </div>
        <div className="review">
          <div className="img-container">
          <img src={directorProfile.image} alt={directorProfile.name} className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
          </div>
          <h4 className="author">{directorProfile.name}</h4>
          <h5>Founder and director</h5>
          <p className="jon">{directorProfile.job}</p>
          <p className="info">{directorProfile.text}</p>
        </div>
      </div>
      </>
    )
  };

  return(
    <div className='main-div'>
      {directorProfileRender()}
      <div className='director-div'>
        <div children="title">
          <h2 className="heading-2">What our students have to say</h2>
          <div className="underline"></div>
        </div>
        <article className="review-2">
          <div className="img-container">
            <img src={image} alt={name} className="person-img"/>
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="jon">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
              <button className="prev-btn" onClick={prevPerson}>
                <FaChevronLeft />
              </button>
              <button className="next-btn" onClick={nextPerson}>
                <FaChevronRight />
              </button>  
            </div>
        </article>
      </div>
    </div>
  );
};

export default Review;
