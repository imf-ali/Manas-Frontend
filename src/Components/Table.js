import React from "react";
import styles from "./Table.module.css";
const Table = ({ data, head }) => {
  return (
    <table className={styles.table}>
      <tr>
        <th colSpan={10} className={styles.head}>
          {head}
        </th>
      </tr>
      <tbody>
        {data.map((item) => (
          <td key={item.id}>
            <tr className={styles.data}>{item.name}</tr>
            <tr className={styles.data}>{item.value}</tr>
          </td>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
