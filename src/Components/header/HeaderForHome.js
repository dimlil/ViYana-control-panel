import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";

function HeaderForHome() {
  return (
    <div className={styles.main}>
      <div className={styles.logoDiv}>
        <Logo size="100px" position="center" />
        <p className={styles.moto}>Детски терапевтичен и игрови център</p>
        <p className={styles.moto}>Контролен Панел</p>
        <div className={styles.linkswrapper}>
          <HomePageNavigationButtons
            valueFromParent={"Login"}
            parentName={"home"}
            link={"/login"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderForHome;
