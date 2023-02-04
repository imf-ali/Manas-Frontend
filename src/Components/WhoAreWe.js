import styles from './WhoAreWe.module.css';

const WhoAreWe = () => {

  const Intro = () => {
    return (
      <>
        <div className={styles.advertisement}>
            <h1>Who Are We</h1>
        </div>
        <div className={styles.description}>
          <img className={styles.image} src='https://sujeet-kumar7061.github.io/temp/images/slideshow_Photos/slide2.jpg' alt="manas" />
          <div className={styles.paragraph}>
            <p>A shared vision of excellence in the ignited minds of experienced faculty member lead to Manas Education Centre came into existence on January 2012. Driven by a shared pursuit of results, the founders of Manas Education Centre are determined to be the trend setters in the field of JEE (Main + Advanced),BSEB Board, CBSE Board preparation.</p>
            <p>Faculty at Manas Education Centre are from reputed Institutes IIT and they are highly experienced in teaching methodology, optimizing time, maximizing performance which is followed by the reputed Institutes Gaya, which lead to more than hundred plus selections in JEE (Main Advanced) every year.</p>
          </div>
        </div>
      </>
    )
  }

  const Description = () => {
    return (
      <div className={styles.paragraph2}>
        <p>At the outset, we would Like to emphasize that Manas Education Centre is committed towards the goal of JEE (Main + Advanced). For our students, we are the dues - ex machina of JEE Main + Advanced. Commitment has a new face at Manas Education Centre, we demand unwavering resilience from our students and reward intelligence in ample measure.</p>
        <p>At Manas Education Centre "Success becomes habit not Just in exams, but in life as well. A competitive environment, cutting edge knowledge pool, scientifically developed teaching methodology put us far ahead of our competitors. Highly experienced, dedicated and highly trained faculty ensure that students obtain that critical edge which gives students a clear lead In the pursuit of their goal.</p>
        <p>Manas Education Centre is an Institute providing training to the students aspiring for IIT /NIT/WBJEE/BITSAT/State board since 2012. Details of our program are given below.</p>
      </div>
    )
  }

  const WhyManas = ['Guidance of IITians.', 'Highly Effective Study Materials.', 'Weekly Practice Problems(W.P.P).', 'Regular Tests and feedback system.', 'Focused & Regular Doubt Clearing Sessions.', 'Conceptual & Logical Learning.', 'scientific Study approach.', 'High Ethical standards.', ' IIT-JEE pattern proof teaching.', 'All subjects(PCM) at One place.'];

  const TheFuture = ['Manas Education Centre spirit of excellence will touch every area of education from a few weeks old fetus In a mother’s womb at vibrations level to adults at University level education. transforming the world by making children better sons. better daughters. better mothers, better fathers and better human beings in totality.', 'We see all the positivity & all the goodness of the Universe to support us in giving a Utopian future to the mankind on earth.', 'On account of cancellation of admission, an amount in certain percentage will be deducted and balance amount will be refunded.'];

  const WhyUs = () => {
    return (
      <div className={styles.paragraph2}>
        <div className={styles.listBlock}>
          <h2 className={styles.heading}>Why Manas?</h2>
          {WhyManas.map((item => {
            return (
              <div>
                {item}
              </div>
            )
          }))}
        </div>
        <div className={styles.listBlock}>
          <h2 className={styles.heading}>The Future</h2>
          {TheFuture.map((item => {
            return (
              <div>
                {item}
              </div>
            )
          }))}
        </div>
      </div>
    )
  }
  return (
    <>
      {Intro()}
      {Description()}
      {WhyUs()}
    </>
  )
};

export default WhoAreWe;