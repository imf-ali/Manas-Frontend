import React from "react";
import Recent from "../Components/Recent";
import TagLine from "../Components/TagLine";
import ReviewsSlider from "../Components/ReviewsSlider";
import Contact from "../Components/Contact";
import Director from "../Components/DirectorProfile";

function Dashboard() {
  return (
    <div>
      <Recent />
      <TagLine />
      <Director/>
      {/* <ReviewsSlider /> */}
      <Contact />
    </div>
  );
}

export default Dashboard;
