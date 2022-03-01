import React, { useState } from "react";
import styles from "./Burger.module.css";
import menu from "./menu.png";
import close from "./close.png";

function Nav(props) {
  const [open, setOpen] = useState(props.isOpen);
  props.updateOpen(open);
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
    >
      {props.isOpen == false ? (
        <img src={menu} className={styles.hamburgerIcon} />
      ) : (
        <img
          src={close}
          className={styles.hamburgerIcon}
        />
      )}
    </div>
  );
}

export default Nav;
