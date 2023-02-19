import React, { useState } from "react";
import Recent from "../Components/Recent";
import ReviewsSlider from "../Components/ReviewsSlider";
import Contact from "../Components/Contact";
import OurTeam from "../Components/OurTeam";
import Modal from "../UI/Modal";
import image from '../resource/displayPic/popup.jpeg'

function Dashboard() {

  const [showModal, setShowModal] = useState(true);

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <div>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <div>
            <img src={image} alt="manas" />
          </div>
        </Modal>
      )}
      <Recent />
      {/* <TagLine /> */}
      <OurTeam />
      <ReviewsSlider />
      <Contact />
    </div>
  );
}

export default Dashboard;
