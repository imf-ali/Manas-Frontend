import { Card2 } from "../UI/Card2";
import styles from "./Courses.module.css";

const Teaching = () => {
  return (
    <>
      <div className={styles.advertisement}>
        <h1>Teaching Methodology</h1>
      </div>
      <Card2
        title="Our Macro & Micro Analysis for Students"
        subtitle={[
          "Test Pattern : Subjective pattern, objective pattern",
          "Type of Tests : Class Test, Weekly Test, Unit Test, Middle session test, Test Series Full Test, Scholarship Test",
        ]}
      />
      <Card2
        title="Self Study Program Under Guidance"
        subtitle={[
          "2 to 4 Hrs Every Day",
          "Practice Session",
          "Doubt Clearing Session",
        ]}
      />
      <Card2
        title="Our scholarship Program"
        subtitle={[
          "Admission CUM Scholarship Program",
          "Aptitude Test CUM Scholarship Program",
        ]}
      />
    </>
  );
};

export default Teaching;
