import React, { useState } from "react";
import Recent from "../Components/Recent";
import ReviewsSlider from "../Components/ReviewsSlider";
import Contact from "../Components/Contact";
import OurTeam from "../Components/OurTeam";
import Modal from "../UI/Modal";
import TagLine from "../Components/TagLine";

function Dashboard() {
  const [showModal, setShowModal] = useState(true);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <Modal onClose={closeModalHandler}></Modal>}
      <Recent />
      <TagLine />
      <OurTeam />
      <ReviewsSlider />
      <Contact />
    </div>
  );
}

export default Dashboard;
