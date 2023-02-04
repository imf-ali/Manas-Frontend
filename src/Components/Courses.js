import { Card } from '../UI/Card';
import styles from './Courses.module.css';

const Courses = () => {
  return (
    <>
      <div className={styles.advertisement}>
          <h1>Courses we offer</h1>
      </div>
      <Card 
        title="SPECIAL ONE YEAR CLASSROOM PROGRAM"
        subtitle="For Class XII Appeared / Pass students Synchronized study of JEE(Main + Advanced)+Including State,CBSE Boards +BIT-SAT+MHT-CET/NEET"
      />
      <Card 
        title="TWO YEAR CLASSROOM PROGRAM"
        subtitle="Class XI : (For Students Presently in Class XI) Synchronized study of JEE(Main+Advanced)+Including State, CBSE Boards +BIT-SAT+MHT-CET/NEET"
      />
      <Card 
        title="THREE YEAR CLASSROOM PROGRAM"
        subtitle="Class X : (For Students Presently in Class X) Synchronized study of JEE(Main + Advanced) + Including State, CBSE Boards + BIT - SAT + MHT - CET / NEET"
      />
    </>
  )
};

export default Courses;