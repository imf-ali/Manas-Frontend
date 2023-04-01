import React from "react";
import Table from "../Components/Table";
const Scholarship = () => {
  const data = [
    { id: 1, name: "% Marks", value: "scholarship" },
    { id: 2, name: "90% and above", value: "100%" },
    { id: 3, name: "86-90%", value: "75%" },
    { id: 4, name: "81-85%", value: "60%" },
    { id: 5, name: "76-80%", value: "50%" },
    { id: 6, name: "71-75%", value: "40%" },
    { id: 7, name: "61-70%", value: "30%" },
    { id: 8, name: "51-60%", value: "20%" },
    { id: 9, name: "41-50%", value: "10%" },
    { id: 9, name: "30-40%", value: "05%" },
  ];

  return (
    <div>
      <h1>User Table</h1>
      <Table data={data} />
    </div>
  );
};

export default Scholarship;
