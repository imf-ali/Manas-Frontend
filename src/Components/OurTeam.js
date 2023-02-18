import { teamData } from "../lib/data";
import styles from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <div>
      <div>
        <h2 className={styles.heading}>Our Team</h2>
        <p className={styles.subtitle}>"Change does not roll on the wheels of inevitability, but comes through continuous struggle."</p>
      </div>
      <div className={styles.team}>
        {teamData.map(team => {
          return (
            <div className={styles.member}>
              <div>
                {/* <img src={team.image} alt="member" /> */}
              </div>
              <h2>{team.name}</h2>
              <h3>{team.designation}</h3>
              <p>{team.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default OurTeam;