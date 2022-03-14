import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./buttons.module.css";

function EditButton(id) {
  const navigate = useNavigate();
  const redirectToEditPage = () => {
    navigate(`/edit/${id.id}`);
  };
  return (
    <div className={styles.button} onClick={redirectToEditPage}>
      Промени
    </div>
  );
}

export default EditButton;
