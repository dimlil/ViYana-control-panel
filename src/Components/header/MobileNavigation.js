import React from "react";
import styles from "./Header.module.css";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";

function MobileNavigation(props) {
  return (
    <div className={styles.componentWrapper}>
      {props.isOpen == true ? (
        <div className={styles.headerLinksWrapper}>
          <HomePageNavigationButtons
            valueFromParent={"Услуги"}
            link={"/services"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Защо ранната интервенция е важна?"}
            link={"/Why-is-early-intervention-important"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Полезно"}
            link={"/useful"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Контакти"}
            link={"/contacts"}
          />{" "}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MobileNavigation;
