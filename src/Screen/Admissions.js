import React from "react";
import Courses from "../Components/Courses";
import Excellence from "../Components/Excellence";
import Teaching from "../Components/Teaching";
import image1 from "../resource/programFocus.png";
import image2 from "../resource/freeTution.jpeg";

function Admissions() {
  return (
    <div>
      <Courses />
      <Excellence
        mainheading="Excellence in JEE"
        content="Emphasis on making the students imbibe the fundamental concepts of Physics, Chemistry & Mathematics and on sharpening their analytical skills and parallel thinking process which makes them capable of creatively resolving complex and tricky problems by mere application of basic concepts for a quantum jump in their performance in JEE (Main & Advanced). Each student has the right strategy for himself /herself for TIME MANAGEMENT to ensure optimum output. This enables the students to excel not only in JEE (Main & Advanced), Other Engineering Entrance Exams but also in XII Board Exams."
        image={image1}
      />
      <Teaching />
      <Excellence
        mainheading="Free Tuition Fee Program For"
        listofContent={[
          "Top Rankers in admission cum scholarship test",
          "Talented students with poor financial status",
          "Full time library facility with a wide range of books by reputed authors and publication",
          "Affordable hostel facility is provided by the academy for the students",
        ]}
        image={image2}
      />
    </div>
  );
}

export default Admissions;
