import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";
import Nav from "./Nav";
import MobileNavigation from "./MobileNavigation";
import jsCookie from "js-cookie";
import { Fragment } from "react/cjs/react.production.min";

function HeaderForAllComponentsExeptHome() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(jsCookie.get("user"));

  const handler = () => {
    console.log("logout");
  };
  useEffect(() => {
    setUser(jsCookie.get("user"));
  }, [window.location.pathname])
  
  useEffect(() => {
    setUser(jsCookie.get("user"));
  }, [user]);
  return (
    <div>
      <div className={styles.headerWrapperForMobileHideShow}>
        <div
          className={styles.headerWrapperForMobile}
          style={{ display: "flex !important" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo size="50px" position="left" marginTop="15px" />
          </Link>
          <Nav isOpen={open} updateOpen={setOpen} />
        </div>
        <MobileNavigation isOpen={open} />
      </div>

      <div className={styles.headerWrapper}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo size="50px" position="left" marginTop="15px" />
        </Link>
        <div className={styles.headerLinksWrapper}>
          {user ? (
            <Fragment>
              {" "}
              <HomePageNavigationButtons
                valueFromParent={"Всички статии"}
                link={"/allPosts"}
                parentName={"home"}
              />
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
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderForAllComponentsExeptHome;
