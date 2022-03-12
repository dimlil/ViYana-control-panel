import React, { useState } from "react";
import style from "../login.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "./ckeditor/build/ckeditor.js";
import { createPost } from "../../services/createPost";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [text, setText] = useState("");
  let navigate = useNavigate();
  const updatingTitle = (e) => {
    setTitle(e.target.value);
  };
  const updatingAbout = (e) => {
    setAbout(e.target.value);
  };
  const signIn = async (e) => {
    e.preventDefault();
    const responce = await createPost(title, about, text);
    if (responce) navigate("/allPosts");
  };
  return (
    <div className={style.main}>
      <form action="#" method="post">
        <h1>Създаване на статия</h1>
        <div style={{ margin: "5% 0 5% 0" }}>
          <div className={style.inputDiv} style={{ margin: "0% 0 5% 0" }}>
            <input
              onChange={updatingTitle}
              type="text"
              value={title}
              id="inputUsername"
              name="title"
              placeholder="Заглавие на статията"
              required=""
              style={{ width: "200%" }}
            />
            <label htmlFor="inputUsername">Заглавие</label>
          </div>
          <div className={style.inputDiv} style={{ margin: "25% 0 5% 0" }}>
            <input
              onChange={updatingAbout}
              type="text"
              value={about}
              id="inputUsername"
              name="about"
              placeholder="Заглавие на статията"
              required=""
              style={{ width: "200%" }}
            />
            <label htmlFor="inputUsername">Кратка инфорамация</label>
          </div>
        </div>
        <CKEditor
          config={{
            table: {
              customClass: ["ui", "table", "celled"], // Important!!! need to be array
            },
            image: {
              customClass: ["ui", "fluid", "image"], // Use whatever class names defined in your theme
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
        <button onClick={signIn} type="submit" className={style.submitBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default CreatePage;
