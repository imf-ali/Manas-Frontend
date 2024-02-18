import { useRef, useState } from "react";
import styles from "./OurTeam.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurTeam = ({ displayPic }) => {

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div className={styles.ourTeam}>
      <div className={styles.teamAbout}>
        <h2 className={styles.heading}>Our Achievement</h2>
        <p className={styles.subtitle}>
          "Change does not roll on the wheels of inevitability, but comes
          through continuous struggle."
        </p>
      </div>
      <div className={styles.fixDiv}>
        <div className={styles.team} ref={elementRef}>
          {displayPic.map((team,index) => {
            return (
              <div key={index} className={styles.member}>
                <div className={styles.imageTeam}>
                  <img src={team.data} alt="member" loading="lazy" />
                </div>
                <h2>{team.meta.name}</h2>
                <h3>{team.meta.designation}</h3>
                <p>{team.meta.description}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.buttonContianer}>
          <h1>
            <FaChevronLeft
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 100, -20);
              }}
              disabled={arrowDisable}
            />
          </h1>
          <h1>
            <FaChevronRight
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 100, 20);
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
