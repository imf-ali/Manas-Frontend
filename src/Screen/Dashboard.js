import React from "react";
import Recent from "../Components/Recent";
import TagLine from "../Components/TagLine";
import ReviewsSlider from "../Components/ReviewsSlider";
import Contact from "../Components/Contact";

function Dashboard() {
  return (
    <div>
      <Recent />
      <TagLine />
      <ReviewsSlider />
      {/* <Contact /> */}
    </div>
  );
}

export default Dashboard;
