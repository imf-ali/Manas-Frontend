import React from "react";
import styles from "./Table.module.css";
const Table = ({ data, head }) => {
  return (
    <div className={styles.table}>
      <h2>{head}</h2>
      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.row} key={item.id}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.value}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
