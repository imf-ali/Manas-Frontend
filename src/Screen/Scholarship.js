import React from "react";
import Table from "../Components/Table";
import styles from "./Scholarship.module.css";
const Scholarship = () => {
  const data1 = [
    { id: 1, name: "% Marks", value: "Scholarship" },
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
  const data2 = [
    { id: 1, name: "Percentile", value: "Scholarship" },
    { id: 2, name: "99.95 above ", value: "100%" },
    { id: 3, name: "98-99.95 ", value: "75%" },
    { id: 4, name: "96-98 ", value: "60%" },
    { id: 5, name: "93-96", value: "50%" },
    { id: 6, name: "90-93 ", value: "40%" },
    { id: 7, name: "85-90", value: "30%" },
    { id: 8, name: "80-85", value: "20%" },
    { id: 9, name: "75-80 ", value: "10%" },
    { id: 9, name: "70-75 ", value: "05%" },
  ];
  const head1 = "Scholarship criteria based on MTS";
  const head2 = "Scholarship criteria based on JEE Mains Score";

  return (
    <div className={styles.main}>
      <h1>Scholarship Scheme</h1>
      <div className={styles.container}>
        <h2>1. Manas Talent Search (MTS) </h2>
        <p>
          M.T.S. is an annual scholarship exam conducted by the Manas Education
          Centre for Class X , XI & XII . Based on the performance in this exam
          students get scholarship in the institute fee of their respective
          courses. M.T.S. has provision of scholarship up to 100% which means
          talented students have opportunity to get quality JEE Coaching in our
          institute, completely free. It aims to support meritorious and
          deserving students who come from economically weaker section of
          society.
          <br /> Exam duration :- 2 Hours
          <br />
          <div className={styles.content}>
            <div>Syllabus :- </div>
            <div>
              Physics , Chemistry & Math Up to 10th Level (for Foundation Batch
              ) <br />
              Phy, Chem & Math covering entire syllabus of 11th (for fresher
              batch) <br />
              Phy, Chem & Math covering entire syllabus of 11th & 12th (for
              Target)
            </div>
          </div>
        </p>
      </div>
      <Table data={data1} head={head1} />
      <div className={styles.container}>
        <h2>2. JEE Main Result based scholarship for Target batch</h2>
      </div>
      <Table data={data2} head={head2} />
      <div className={styles.container}>
        <h2>3. Encouragement Scholarship for Girl </h2>
        <li style={{ marginLeft: "3%" }}>
          {" "}
          10 Percent additional scholarship will be given to every girl student
          to encourage them to pursue engineering education.{" "}
        </li>
      </div>
    </div>
  );
};

export default Scholarship;
