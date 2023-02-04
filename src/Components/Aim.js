import styles from './Aim.module.css';

const Aim = () => {

  const data = [
    {
      title: 'Mission', 
      subtitle: 'To create an Institution that serves the society for thousands of years – may be perennially. To Make India Global Leader In Education, both In Profit as well as non-profit Ventures.'
    },
    {
      title: 'Vision', 
      subtitle: 'To create an Institution that serves the society for thousands of years – may be perennially. To Make India Global Leader In Education, both In Profit as well as non-profit Ventures.'
    },
    {
      title: 'Target', 
      subtitle: 'To create an Institution that serves the society for thousands of years – may be perennially. To Make India Global Leader In Education, both In Profit as well as non-profit Ventures.'
    }
  ]
  return (
    <div className={styles.mainDiv}>
      {data.map((item) => {
        return (
          <div className={styles.subdiv}>
            <h3 className={styles.heading}>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Aim;