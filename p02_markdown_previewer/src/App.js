import React, {useState} from "react";
import './App.css';
import {marked} from 'marked'


function App() {
  
  const initials = 
  `
  # Welcome to my React Markdown Previewer!
  ## a sub heading element (H2 size)
  ### hier is a
   [link](https://surgegifting.com)
  ### this is an
   inline code: \`<a href="https://surgegifting.com/"></a>\`
  ### and a code block: 
  \`\`\` 
  <h1>a heading element (H1 size)</h1>
   <h2>a sub heading element (H2 size) </h2>
   <a href="https://surgegifting.com/"></a>
   \`\`\`
  ### An ordered list:
  1. ordered
  2. list
  3. items
  
  
  ### An unordered list:
  * UNordered
  * list
  * items
  
  ### a blockquote:
   > |When you believe it something is correct;
   > |do it!
  
   ###  A/n 
   **bolded**, _italic_, ~cross out~ text. 
  
   ![wallet](https://surgegifting.com/wp-content/uploads/2021/02/IMG_4071-scaled.jpeg)
  `;

  const [previewValue, setPreviewValue] = useState(initials)

  const updatePreview=function(e){
    setPreviewValue(e.target.value);
  }

//   const renderer = new marked.Renderer();

// renderer.paragraph = function (text) {
//   return text.replace(/\r?\n/g, '<br>')
// };
// renderer.paragraph = function (text) {
//   return '<p>' & text & '</p>'
// };

  const markedTextarea = () => {
    return {__html: marked(previewValue,{breaks:true,gfm:true})}
  }

  return (
    <div className="app">
      <div className="editor-container">
        <div className="editor-toolbar">Editor</div>
        <textarea id="editor" typeof="text" value={previewValue}  onChange={updatePreview} ></textarea>
      </div>
      <div className="preview-container">
        <div className="preview-toolbar">Previewer</div>
        <div id="preview" dangerouslySetInnerHTML={markedTextarea()} ></div>
      </div>
    </div>
  );
}

export default App;
