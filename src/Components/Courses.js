import { Card1 } from "../UI/Card1";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <>
      <div className={styles.advertisement}>
        <h1>Courses we offer</h1>
      </div>
      <Card1
        title="FOUNDATION"
        year="1 Years during Xl (Target IITJEE - 2025)"
        eligibility="Appearing / Appeared for Class X board examination."
        subtitle="This course prepares you for IIT-JEE in a Pattern Proof Mode. The course, unmatched in its rigour and precision, raises you to the very zenith of your preparation. The stimulating atmosphere of the institute, small batches (yes-we believe in quality) and one to one interaction with the instructor ensure that every rough edge is smoothened, every small doubt is cleared. More importantly, we train you to think analytically, we give you a systematic approach to problem solving - a must for IIT-JEE. If you think you are bright, if you think you are capable, if you think that you can make itto the top, this course is precisely for you."
      />
      <Card1
        title="FRESHER"
        year="1 Year during Class XII (Target IITJEE -2024)"
        eligibility="Appearing/Appeared for Class XI Annual Examination."
        subtitle="You have completed Class Xl & you are desirous of becoming an Engineering
        professional through prestigious lIT’s, then well, come here with a bang! we take charge to guide you through it. Here Class XII PCM syllabus target IIT-JEE is to be covered. This course prepares you in right earnest to teach you the ways that are required to take on the IIT-JEE frontally at the end of class XII.
        "
      />
      <Card1
        title="TARGET"
        year="1 Year during Class XII (Target IITJEE -2024)"
        eligibility="Appearing /Appeared for Class XII Annual Examination."
        subtitle="If you have set your aims high, if you want to touch the stars and reach the sky and more importantly - if you have the courage to say that you shall settle for nothing less than the best, then you - the XII pass student - are perfectly suited to this course. You might have realised by now that you have everything - intelligence, capability and willpower, but that you lack focussed guidance - the do’s and don’ts of IIT-JEE preparation and a stimulating atmosphere. At this juncture, we offer you our helping hand. Come, resurrect your confidence, shape-up your ideas, strengthen your foundation and get in to the top gear of IIT-JEE preparation with a course that can easily claim to be at par with the best offered anywhere in India."
      />
      <Card1
        title="CRASH COURSE FOR JEE ADVANCED"
        year=" 45 Days / 20 Days"
        eligibility="Appeared for JEE Main"
        subtitle="We believe in you hard work & we appreciate it ! Now you are just a step behind on the path to your success.Come here then, we here at MANAS study centre are welcoming you to brush you up, fasten all your looseends, sort out your every single query. We will provide you with all the needful requirements like the bestfaculty possible, the positive environment and most importnantly the motivation & confidence which you need at this crucial stage to crack JEE."
      />
      <Card1
        title="TEST SERIES"
        year="45 Days/20 Days"
        eligibility="Applying for JEE Main"
        subtitle="So all set? Ready? Well then, take a test, or two, or three or as many as you like.We here at MANAS are providing you with the best test questions to check up all your labour and effort you have kept putting in it for so far. Here you get the best platform to judge your labour metre and fill in the left voids in order to achieve that Goal you have been dreaming of. We believe in doing this with a very pampered and supportive manner to keep you boosted & motivated."
      />
    </>
  );
};

export default Courses;
