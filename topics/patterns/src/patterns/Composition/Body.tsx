import React from 'react'
import styles from "./Styles.module.css";

const Body : React.FC<{children : any}> = ({children}) => {
    return <div className={styles.body}>{children}</div>;
}

export default Body
