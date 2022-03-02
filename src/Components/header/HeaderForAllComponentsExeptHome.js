import React, {useState} from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";
import Nav from "./Nav";
import MobileNavigation from "./MobileNavigation";

function HeaderForAllComponentsExeptHome() {
  const handler = () => {
    console.log("logout");
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={styles.headerWrapperForMobileHideShow}>
        <div className={styles.headerWrapperForMobile} style={{display: "flex !important"}}>
          <Link to="/" style={{ "textDecoration": "none" }}>
            <Logo size="50px" position="left" marginTop="15px" />
          </Link>
          <Nav isOpen={open} updateOpen={setOpen}/>
        </div>
        <MobileNavigation isOpen={open}/>
      </div>

      <div className={styles.headerWrapper}>
        <Link to="/" style={{ "textDecoration": "none" }}>
          <Logo size="50px" position="left" marginTop="15px" />
        </Link>
        <div className={styles.headerLinksWrapper}>
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

export default HeaderForAllComponentsExeptHome;
