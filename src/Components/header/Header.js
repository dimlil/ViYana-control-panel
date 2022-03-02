import React from "react";
import { useLocation } from "react-router-dom";
import HeaderForAllComponentsExeptHome from "./HeaderForAllComponentsExeptHome";
import HeaderForHome from "./HeaderForHome";

export default function Header() {
  let location = useLocation();
  React.useEffect(() => {}, [location]);
  return (
    <div>
      {location.pathname == "/" ? (
        <HeaderForHome />
      ) : (
        <HeaderForAllComponentsExeptHome />
      )}
    </div>
  );
}
