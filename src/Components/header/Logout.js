import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { logout } from "../../services/logout";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";

function Logout() {
  const navigate = useNavigate();

  const handler = () => {
    logout();
    navigate("/");
  };
  return (
    <Fragment style={{ display: "flex" }} onClick={handler}>
      <HomePageNavigationButtons
        valueFromParent={"Изход"}
        link={`${window.location.pathname}`}
        parentName={"home"}
      />
    </Fragment>
  );
}

export default Logout;
