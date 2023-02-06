import React from "react";
import Recent from "../Components/Recent";
import TagLine from "../Components/TagLine";
import ReviewsSlider from "../Components/ReviewsSlider";

function Dashboard() {
  return (
    <div>
      <Recent />
      <TagLine />
      <ReviewsSlider />
    </div>
  );
}

export default Dashboard;
