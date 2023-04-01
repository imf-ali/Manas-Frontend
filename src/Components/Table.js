import React from "react";
import styles from "./Table.module.css";
const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <tr>
        <th colSpan={10} className={styles.table}>
          hello
        </th>
      </tr>
      <tbody>
        {data.map((item) => (
          <td key={item.id}>
            <tr className={styles.head}>{item.name}</tr>
            <tr className={styles.head}>{item.value}</tr>
          </td>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
