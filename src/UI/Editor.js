import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

const Editor = ({ submitBlogHandler }) => {

  const [myState, setMyState] = useState({
    editorHtml: '', theme: 'snow'
  })
  
  const handleChange = (html) => {
    setMyState((state) => ({...state, editorHtml: html}));
  }
  
  const handleThemeChange = (newTheme) => {
    if (newTheme === "core") newTheme = null;
    setMyState((state) => ({...state, theme: newTheme}));
  }
    return (
      <div>
        <ReactQuill 
          theme={myState.theme}
          onChange={handleChange}
          value={myState.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder="Enter your content"
         />
        <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => 
              handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div>
        <button onClick={() => { submitBlogHandler(myState.editorHtml) }}>Submit Blog</button>
       </div>
     )
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default Editor;