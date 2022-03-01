import React, {useState} from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";
import Nav from "./Nav";
import MobileNavigation from "./MobileNavigation";

function HeaderForAllComponentsExeptHome() {
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
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderForAllComponentsExeptHome;
