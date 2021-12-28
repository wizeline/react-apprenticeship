import React from "react";
import styles from "./Styles.module.css";

const Frame: React.FC<{ children: any }> = ({ children }) => {
  return <div className={styles.frame}>{children}</div>;
};

export default Frame;
