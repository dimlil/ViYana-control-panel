import React from "react";
import styles from "./logo.module.css";

export default function Logo({size,position,marginTop}) {
  return (
    <div>
      <p className={styles.logoText} style={{fontSize: size, textAlign:position, marginTop: marginTop}}>
        <span className={styles.Span0}>В</span>
        <span className={styles.Span1}>и</span>
        <span className={styles.Span2}>Я</span>
        <span className={styles.Span3}>н</span>
        <span className={styles.Span4}>а</span>
      </p>
    </div>
  );
}
