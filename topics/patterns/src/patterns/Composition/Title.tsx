import React from 'react'
import styles from "./Styles.module.css";

const Title : React.FC<{children : any}> = ({children}) => {
    return <div className={styles.title}>{children}</div>;
}

export default Title
