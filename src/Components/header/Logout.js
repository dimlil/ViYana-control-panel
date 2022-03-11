import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/logout";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";

function Logout() {
  const navigate = useNavigate();

  const handler = () => {
    logout();
    navigate("/");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }} onClick={handler}>
      <HomePageNavigationButtons
        valueFromParent={"Изход"}
        link={`${window.location.pathname}`}
        parentName={"home"}
      />
    </div>
  );
}

export default Logout;
