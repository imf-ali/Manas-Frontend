import React from "react";
import styles from './Map.module.css';

const Map = () => {
  return (
    <>
      <iframe
        className={styles.map}
        title="location"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Manas%20Education%20Centre,%20Gali%20no%202%20Nearby%20milestone%20:%20PNB%20Bank,%20Nutan%20Nagar%20Branch,%20Nutan%20Nagar,%20Gaya,%20Bihar%20823001+t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  )
}

export default Map;
