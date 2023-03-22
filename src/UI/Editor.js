import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Input from "./Input";
import styles from "./Editor.module.css";

const Editor = ({ name, submitBlogHandler }) => {
  const [myState, setMyState] = useState({
    editorHtml: "",
    theme: "snow",
    heading: "",
  });
  const handleChange = (html) => {
    setMyState((state) => ({ ...state, editorHtml: html }));
  };

  const headingChange = (e) => {
    setMyState((state) => ({ ...state, heading: e.target.value }));
  };

  return (
    <div className={styles.editor}>
      <div className={styles.editorH}>
        <div className={styles.editorL}>
          <Input
            id="name"
            type="text"
            name="number"
            label="Name"
            value={name}
          />
          <Input
            id="heading"
            type="text"
            name="heading"
            label="Heading"
            value={myState.heading}
            onChange={headingChange}
          />
          {/* <div className={styles.themeSwitcher}>
            <label>Theme </label>
            <select onChange={(e) => handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
              <option value="bubble">Bubble</option>
              <option value="core">Core</option>
            </select>
          </div> */}
        </div>
        <div className={styles.editorR}>
          <ReactQuill
            className={styles.quillEditor}
            theme={myState.theme}
            onChange={handleChange}
            value={myState.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={".app"}
            placeholder="Enter your content"
          />
        </div>
      </div>
      <button
        className={styles.submitBtn}
        onClick={() => {
          submitBlogHandler(myState.editorHtml, myState.heading);
        }}
      >
        Submit Blog
      </button>
    </div>
  );
};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default Editor;
