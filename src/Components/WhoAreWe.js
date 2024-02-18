import styles from "./WhoAreWe.module.css";
import manasHand from "../resource/displayPic/manasHand.jpeg";
import pushkar from "../resource/profilePic/directorDP.jpeg";
import teacherA from "../resource/profilePic/teacherA.jpeg";
import teacherB from "../resource/profilePic/teacherB.jpeg";

const WhoAreWe = () => {
  const Intro = () => {
    return (
      <div className={styles.whoarewe}>
        <h2 className={styles.headingWhoWeAre}>About Us</h2>
        <div className={styles.description}>
          <div className={styles.paragraph}>
            <div className={styles.section1}>
              <b className={styles.inBold}>In </b>
            </div>
            <div className={styles.section2}>
              <p>
                Sanskrit MANAS means Mind. Here we constantly work on young
                minds to train them to produce the best result. The team of
                experienced and stable faculties along with strength, social,
                and overall development of the students with administrative
                system support students in learning by sharing of knowledge,
                self practicing, through smart study material and attaining
                confidence and time management skills through intelligent test
                system. Motivation, guidance and personal care lead them to
                achieve their best ranks in JEE & other Engineering Entrance
                Examinations. We provide three layers of preparation for Board
                Examination, JEE Main and JEE Advanced. Our motto is to
                continuously inspire and motivate students on the path to mega
                success. We believe that learning is a life long experience and
                we provide every facility and amenity, every kind of right
                opportunity, to ensure a rich and awarding intellectual climate
                for the students to rise and shine in all her/his future
                endeavors. The Prodigy of Manas has already gathered a lot of
                attention of ITT aspirants all across the South Bihar. The class
                room students of JEE division has proved their excellence by
                producing best result in IIT-JEE Since 2014. We are dedicated to
                improve every aspect of competitive preparation ¡n a very
                innovative way. The drive to make a difference and lead the
                evolution of education is at the core of what makes ¡s a
                learning thrilled every time. At Manas Education Centre, we’re
                always working to create new stories of improvement. We strongly
                believe in that<br></br>{" "}
                <i className={styles.tagline}>
                  "Winners don’t do different things, they do things
                  differently"
                </i>
                <img
                  className={styles.imageHead}
                  src={manasHand}
                  alt="manasHand"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Description = () => {
    return (
      <div className={styles.whoarewe}>
        <h2 className={styles.headingMessageToStudents}>Director's Message</h2>
        <div className={styles.description}>
          <div className={styles.paragraph}>
            <p>
              Dear Students, <br></br>
              <br></br>Welcome to Manas Education Centre!<br></br>
              <br></br>Cracking any Top Level Competitive Examinations is all
              about your perseverance quotient, learning ability, managing time
              & stress and zeal to model the path of success drawn by the
              connoisseur.<br></br>
              <p className={styles.innerPara}>
                To ensure your success in any competitive examinations, we have
                designed our coaching programme in a scientific manner that
                develops both your knowledge and your problem solving technique.
                To achieve this, we have a team of experienced and most renowned
                faculty members from IIT's, Our faculty members are dedicated
                and devoted individuals of highest caliber with a genuine
                concern for building your future.
              </p>
              <p className={styles.innerPara}>
                If our effort to deliver quantity education, we emphasis more on
                the establish one to one contact with every student and be
                attentive to his/her needs so that our team can monitor
                individuals progress and guide them accordingly on the way to
                success. Our Sincere regards to all the individuals who have
                contributed in our success.
              </p>
              <p className={styles.innerPara}>
                Our Sincere regards to all the individuals who have contributed
                in our success. Your support and co-operation shall always help
                us in achieving our dream.
              </p>
              <br />
              <br />
              <p>
                With Warm Wishes,
                <br />
                <b>Team Manas</b>
              </p>
            </p>
          </div>
        </div>
        <div>
          {/* <h4 className={styles.ourTeamTag}>Our Team</h4> */}
          <img className={styles.profileimage} src={pushkar} alt="director" />
          {/* <img className={styles.profileimageTeacher} src={teacherA} alt="A" />
          <img className={styles.profileimageTeacher} src={teacherB} alt="B" /> */}
          <div>
            <div className={styles.teachersInfo}>
              <div className={styles.section11}>
                <p className={styles.teacherName}>Phuskar Srigyan</p>
                <p>Ex. Netarhatian</p>
                <p>B.Tech,IIT Delhi</p>
                <p>Humanistic Edu Enthusiast</p>
              </div>
              {/* <div className={styles.section11}>
                <p className={styles.teacherName}>Prabhakar Kumar</p>
                <p>Ex. Netarhatian</p>
                <p>Alumni of TS Chanakya</p>
                <p>Mumbai</p>
              </div>
              <div className={styles.section11}>
                <p className={styles.teacherName}>Praneet Kumar</p>
                <p>Ex. Tilaiyan</p>
                <p>Alumni of TS Chanakya</p>
                <p>Mumbai</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const WhyUs = () => {
    return (
      <div className={styles.whoarewe}>
        <h2 className={styles.headingWhyManas}>Why Manas Education Centre</h2>
        <p className={styles.tagIIT}>For IIT-JEE Preparation</p>
        <div className={styles.paragraphTop}>
          <p>
            The next few years are very significant in your life. The choices
            you make today & efforts you put in will determine success in your
            career & personal life. Manas Education is a great place to living
            your big dream.
          </p>
        </div>
        <div className={styles.description}>
          <div className={styles.paragraphWhyUs}>
            <div className={styles.Whyussection1}>
              <p className={styles.whyusinnerpara}>
                <h4 className={styles.innerHeadPara}>1. IITian Faculty</h4>
                Apart from his/her own, the most important role in a student’s
                success is played by the faculty or the Teacher. Manas study
                centre boasts of having one of the finest faculty team in terms
                of quality,competence and most importantly care for the
                students.Since they are themselves IlTian, they understand the
                rigors of the IITJEE preparation very well.
                <br />
                <h4 className={styles.innerHeadPara}>2. Regular Classes</h4>
                Manas Study Centre maintains a rigorous classroom program
                timetable for student with a well-planned and detailed lecture
                delivery schedule for timely completion of the syllabus. Each
                lecture is carefully planned session comprising theory,
                solved-unsolved examples, illustrations, discussion of daily
                practice problems and sheets. The class notes taken in the
                regular classes are the best guiding tools to the students for
                jee main & jee advanced.
                <br />
                <h4 className={styles.innerHeadPara}>
                  3. Weekly Practice Problems (WPP)
                </h4>
                A WPP is a set of 10-12 problems regularly given to the students
                to practice and revise the subject taught in the class. The WPP
                are carefully designed to gradually increase the problem solving
                skills of student. WPPs are great tool for regular practice of
                problems and gradually improve problem solving aptitude.
                <br />
                <h4 className={styles.innerHeadPara}>
                  4. Practice Booklet (Sheet)
                </h4>
                A practice booklet is the study material provided tostudents
                comprising theory and formulae ofrespective topics. There are
                separate booklets foreach topic of each subject in the sequence
                oflecture delivery. Practice booklet also containsassorted
                problems arranged from fundamental toadvanced level. It aids
                students for guided andreferential studies at home and to solve
                problemsby themselves.
                <br />
                <h4 className={styles.innerHeadPara}>
                  5. Fornightly Assessment Tests{" "}
                </h4>
                A rigorous testing schedule is prepared and implemented to
                continuously gauge students’ preparation, provide regular
                feedback and prepare him for examination pressure. It is an
                alternative cycle of part and cumulative tests (pts and cts)
                conducted one every alternate Sunday.Other tests like jee
                preparatory test, chapter quiz, full syllabus tests, all India
                open tests are also conducted to give him poise and confidence
                to face real competitive examination. For Board preparation,
                board preparation tests are also planned to develop writing
                skills and prepare the student for board exams.
              </p>
            </div>
            <div className={styles.Whyussection2}>
              <p className={styles.whyusinnerpara}>
                <h4 className={styles.innerHeadPara}>6. Individual Care</h4>
                We keep our classes small to have interactive environment in the
                class. On a regular basis, we analyze the performance of each
                student and accordingly motivate them to improve his studies. We
                encourage students to clarify his/her doubt and queries though
                the mode of discussion with faculty member at micro-level. These
                initiatives help the students to improve their academic
                performance and catch up with anything not understood ¡n a
                regular class.
                <br />
                <h4 className={styles.innerHeadPara}>
                  7. Academic Performance
                </h4>
                The academic performance of the students is compiled, analyzed
                and reviewed to help the students know their strengths and
                weaknesses. Periodic reshuffling of batches as per their
                performances keeps students on their toes & fosters a
                competitive sprit. Comparative micro and macro analysis of the
                performance of the individual student in the test enables the
                student to plan and prepare accordingly.
                <br />
                <h4 className={styles.innerHeadPara}>
                  8. Co-academic arrangements
                </h4>
                To further support students preparing for such grueling and
                demanding examinations, the institute organizes performance
                enhancement classes, motivation and counseling session to give
                confidence to students and give them an edge. Information and
                assistance for various competitive exams and Olympiads is also
                made available to them from time to time.
                <br />
                <h4 className={styles.innerHeadPara}>9. Education System</h4>
                All subjects (Physics, Chemistry & Maths) at one place to save
                the students time. Excellent Academic Control ensuring timely
                completion of course along with the best quality teaching. We
                keep our class sizes small to insure that one to one mentoring.
                <br />
                <h4 className={styles.innerHeadPara}>10. Self-Study Room</h4>
                It’s said that self study ¡s the best study. We totally believe
                in this & so we provide a SELF STUDY ROOM along with a LIBRARY
                where the students can link up their loose ends.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {Intro()}
      {Description()}
      {WhyUs()}
    </>
  );
};

export default WhoAreWe;
