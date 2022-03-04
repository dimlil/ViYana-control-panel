import React, { useState } from "react";
import style from "../login.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "./ckeditor/build/ckeditor.js";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const updatingTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const signIn = async (e) => {
    e.preventDefault();
    console.log(title);
    console.log(text);
    // const responce = await login(email, password);
    // if (responce) navigate("/");
  };
  return (
    <div className={style.main}>
      <form action="#" method="post">
        <h1>Създаване на статия</h1>

        <div className={style.inputDiv}>
          <input
            onChange={updatingTitle}
            type="text"
            value={title}
            id="inputUsername"
            name="title"
            placeholder="Заглавие на статията"
            required=""
            style={{width: '200%'}}
          />
          <label htmlFor="inputUsername">Заглавие</label>
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
