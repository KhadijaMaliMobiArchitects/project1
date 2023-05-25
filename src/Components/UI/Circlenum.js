import React from 'react'
import styles from "./Subheader.module.css";

export default function Circlenum({num}) {
  return (
    <div className={styles.dot}>{num}</div>
  )
}
