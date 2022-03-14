import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../login.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../CreatePage/ckeditor/build/ckeditor.js";
import parse from "html-react-parser";
import axios from "axios";
import { editPost } from "../../services/editPost";

function EditPage() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [text, setText] = useState("");
  const id = useParams().id;
  let navigate = useNavigate();
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/post/${id}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setTitle(response.data[0].title);
        setAbout(response.data[0].about);
        setText(response.data[0].content);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [])
  
  const updatingTitle = (e) => {
    setTitle(e.target.value);
  };
  const updatingAbout = (e) => {
    setAbout(e.target.value);
  };
  const edit = async (e) => {
    e.preventDefault();
    const responce = await editPost(id,title, about, text);
    if (responce) navigate(`/posts/${id}`);
  };
  return (
    <div className={style.mainCreate}>
      <form action="#" method="post">
        <h1>Създаване на статия</h1>
        <div style={{ margin: "5% 0 5% 0", width: "50vw" }}>
          <div className={style.inputDiv} style={{ margin: "0% 0 5% 0" }}>
            <input
              onChange={updatingTitle}
              type="text"
              value={title}
              id="inputUsername"
              name="title"
              placeholder="Заглавие на статията"
              required=""
              style={{ width: "100%", height: "25px" }}
            />
            <label htmlFor="inputUsername">Заглавие</label>
          </div>
          <div className={style.inputDiv} style={{ margin: "10% 0 5% 0" }}>
            <input
              onChange={updatingAbout}
              type="text"
              value={about}
              id="inputUsername"
              name="about"
              placeholder="Заглавие на статията"
              required=""
              style={{ width: "100%", height: "25px" }}
            />
            <label htmlFor="inputUsername">Кратка инфорамация</label>
          </div>
        </div>
        <div className={style.editor}>
          <CKEditor
            config={{
              table: {
                customClass: ["ui", "table", "celled"],
              },
              image: {
                customClass: ["ui", "fluid", "image"],
              },
              toolbar: [
                "heading",
                "|",
                "fontSize",
                "fontFamily",
                "fontColor",
                "|",
                "bold",
                "italic",
                "underline",
                "|",
                "link",
                "bulletedList",
                "numberedList",
                "|",
                "indent",
                "alignment",
                "outdent",
                "|",
                "codeBlock",
                "blockQuote",
                "insertTable",
                "mediaEmbed",
                "undo",
                "redo",
              ],
            }}
            editor={Editor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>
        <button onClick={edit} type="submit" className={style.submitBtn}>
          Промени
        </button>
      </form>
      <div>{parse(text)}</div>
    </div>
  );
}

export default EditPage;
