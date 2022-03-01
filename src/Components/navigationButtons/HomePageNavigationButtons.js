import React from "react";
import styles from "./linksstyle.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

export default function HomePageNavigationButtons({
  valueFromParent,
  link,
  parentName,
}) {
  return (
    <Fragment>
      {parentName == "home" ? (
        <Link to={link} className={styles.linkWrapper}>
          <p className={styles.links}>{valueFromParent}</p>
        </Link>
      ) : (
        <Link to={link} className={styles.linkWrapperSecondView}>
          <p className={styles.linksSecondView}>{valueFromParent}</p>
        </Link>
      )}
    </Fragment>
  );
}
