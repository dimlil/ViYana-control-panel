import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";
import styles2 from "./MainHeader.module.css";

function HeaderForHome() {
  return (
    <div className={styles2.main}>
      <div className={styles.logoDiv}>
        <Logo size="100px" position="center" />
        <p className={styles.moto}>Детски терапевтичен и игрови център</p>
        <div className={styles.linkswrapper}>
          <HomePageNavigationButtons
            valueFromParent={"Услуги"}
            link={"/services"}
            parentName={"home"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Защо ранната интервенция е важна?"}
            link={"/Why-is-early-intervention-important"}
            parentName={"home"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Полезно"}
            parentName={"home"}
            link={"/useful"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Контакти"}
            parentName={"home"}
            link={"/contacts"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderForHome;
