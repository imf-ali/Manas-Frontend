import React, { useContext, useEffect, useState } from "react";
import Recent from "../Components/Recent";
import ReviewsSlider from "../Components/ReviewsSlider";
import Contact from "../Components/Contact";
import OurTeam from "../Components/OurTeam";
import Modal from "../UI/Modal";
import TagLine from "../Components/TagLine";
import AuthContext from "../store/AuthContext";

function Dashboard() {
  const { manasInstance } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(true);
  const [displayPic, setDisplayPic] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await manasInstance.getImageData(['carousel', 'popup', 'achievement', 'testimonial']);
      if(res && res.data) {
        setDisplayPic(res.data.asset)
      }
    };
    getImages();
  }, [manasInstance]);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <Modal 
          displayPic={displayPic.filter((img) => img.tag === 'popup').map(img => img.data)}
          onClose={closeModalHandler} 
        />
      )}
      <Recent 
        displayPic={displayPic.filter((img) => img.tag === 'carousel').map(img => img.data)} 
      />
      <TagLine />
      <OurTeam 
        displayPic={displayPic.filter((img) => img.tag === 'achievement')}
      />
      <ReviewsSlider
        displayPic={displayPic.filter((img) => img.tag === 'testimonial')}
      />
      <Contact />
    </div>
  );
}

export default Dashboard;
