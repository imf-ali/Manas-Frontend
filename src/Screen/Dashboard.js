import React from "react";
import Contact from "../Components/Contact";
import NavBar from "../Components/NavBar";
import Recent from "../Components/Recent";
import TagLine from "../Components/TagLine";
import ReviewsSlider from "../Components/ReviewsSlider";

function Dashboard() {
  return (
    <div>
      <Recent />
      <TagLine />
      <ReviewsSlider />
      <Contact />
    </div>
  );
}

export default Dashboard;
