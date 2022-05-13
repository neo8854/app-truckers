import React from "react";
import styles from "./Assets.module.scss";

export const Assets = ({ data }) => {
  return (
    <div className={styles.assets1}>
      <h2 className={styles.color}>Assets</h2>
      <div className={styles.assets}>
        <ul className={styles.ulBlock}>
          {data.map((truck) => (
            <li key={truck.id}>
              {truck.nameTrucks}
              <button className={styles.closeBtn}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
