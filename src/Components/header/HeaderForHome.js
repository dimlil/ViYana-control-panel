import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";
import styles2 from "./MainHeader.module.css";
import { Fragment } from "react/cjs/react.production.min";

function HeaderForHome() {
  const handler = () => {
    console.log("logout");
  };
  return (
    <div className={styles2.main}>
      <div className={styles.logoDiv}>
        <Logo size="100px" position="center" />
        <p className={styles.moto}>Детски терапевтичен и игрови център</p>
        <p className={styles.moto}>Контролен Панел</p>
        <div className={styles.linkswrapper}>
          <HomePageNavigationButtons
            valueFromParent={"Създай статия"}
            link={"/create"}
            parentName={"home"}
          />
          <div style={{display: 'flex'}} onClick={handler}>
            <HomePageNavigationButtons
              valueFromParent={"изход"}
              link={`${window.location.pathname}`}
              parentName={"home"}
            />
          </div>
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
