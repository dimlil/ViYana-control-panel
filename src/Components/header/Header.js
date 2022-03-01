import React from "react";
import HeaderForAllComponentsExeptHome from "./HeaderForAllComponentsExeptHome";
import HeaderForHome from "./HeaderForHome";

export default function Header() {
  let location = window.location.pathname;
  return (
    <div>
       { location == "/" ? <HeaderForHome /> : <HeaderForAllComponentsExeptHome /> }
    </div>
  );
}
