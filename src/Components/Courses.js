import { Card1 } from "../UI/Card1";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <>
      <div className={styles.advertisement}>
        <h1>Courses we offer</h1>
      </div>
      <Card1
        title="SPECIAL ONE YEAR CLASSROOM PROGRAM"
        year="For Class XII Appeared / Pass students"
        subtitle=" Synchronized study of JEE(Main + Advanced)+Including State,CBSE Boards +BIT-SAT+MHT-CET/NEET"
      />
      <Card1
        title="TWO YEAR CLASSROOM PROGRAM"
        year="Class XI : (For Students Presently in Class XI)"
        subtitle=" Synchronized study of JEE(Main+Advanced)+Including State, CBSE Boards +BIT-SAT+MHT-CET/NEET"
      />
      <Card1
        title="THREE YEAR CLASSROOM PROGRAM"
        year="Class X : (For Students Presently in Class X)"
        subtitle=" Synchronized study of JEE(Main + Advanced) + Including State, CBSE Boards + BIT - SAT + MHT - CET / NEET"
      />
    </>
  );
};

export default Courses;
