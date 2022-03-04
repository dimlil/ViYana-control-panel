import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";
import { Fragment } from "react/cjs/react.production.min";
import jsCookie from "js-cookie";

function MobileNavigation(props) {
  const [user, setUser] = useState(jsCookie.get("user"));
  const handler = () => {
    console.log("logout");
  };
  useEffect(() => {
    setUser(jsCookie.get("user"));
  }, [user]);
  return (
    <div className={styles.componentWrapper}>
      {props.isOpen == true ? (
        <div>{user ? (
            <Fragment>
              {" "}
              <HomePageNavigationButtons
                valueFromParent={"Създай статия"}
                link={"/create"}
                parentName={"home"}
              />
              <div style={{ display: "flex" }} onClick={handler}>
                <HomePageNavigationButtons
                  valueFromParent={"изход"}
                  link={`${window.location.pathname}`}
                  parentName={"home"}
                />
              </div>
            </Fragment>
          ) : (
            <HomePageNavigationButtons
              valueFromParent={"Login"}
              parentName={"home"}
              link={"/login"}
            />
          )}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MobileNavigation;
