import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";
import { Fragment } from "react/cjs/react.production.min";
import jsCookie from "js-cookie";
import Logout from "./Logout";

function MobileNavigation(props) {
  const [user, setUser] = useState(jsCookie.get("user"));
  useEffect(() => {
    setUser(jsCookie.get("user"));
  }, [window.location.pathname]);
  useEffect(() => {
    setUser(jsCookie.get("user"));
  }, [user]);
  return (
    <div className={styles.componentWrapper}>
      {props.isOpen == true ? (
        <div className={styles.hidenLinks}>
          {user ? (
            <Fragment>
              <Fragment>
                <HomePageNavigationButtons
                  valueFromParent={"Всички статии"}
                  link={"/allPosts"}
                  parentName={"home"}
                />
              </Fragment>
              <Fragment>
                <HomePageNavigationButtons
                  valueFromParent={"Създай статия"}
                  link={"/create"}
                  parentName={"home"}
                />
              </Fragment>
              <Logout />
            </Fragment>
          ) : (
            <HomePageNavigationButtons
              valueFromParent={"Login"}
              parentName={"home"}
              link={"/login"}
            />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MobileNavigation;
