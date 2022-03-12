import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostService } from "../../services/delete";
import styles from "./buttons.module.css";

function DeleteButton() {
  const params = useParams();
  const navigate = useNavigate();
  const DeleteHandle = async () => {
    const responce = await deletePostService(params.id);
    if (responce) {
      navigate("/allPosts");
    }
  };
  return (
    <div className={styles.button} onClick={DeleteHandle}>
      Изтрий
    </div>
  );
}

export default DeleteButton;
