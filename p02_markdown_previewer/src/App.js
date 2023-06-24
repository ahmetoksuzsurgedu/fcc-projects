import React, {useState} from "react";
import './App.css';
import {marked} from 'marked'


function App() {
  const [previewValue, setPreviewValue] = useState('# Welcome to my React Markdown Previewer!\n  ## a sub heading element (H2 size)\n hier is a [link](https://surgegifting.com) \n\n  this is an inline code: `<a href="https://surgegifting.com/"></a>` \n\n  and a code block: \n\n```  \n\n   <h1>a heading element (H1 size)</h1>\n\n   <h2>a sub heading element (H2 size) </h2>\n\n   <a href="https://surgegifting.com/"></a>\n\n ```\n\n An ordered list:\n\n 1. ordered\n\n 2. list\n\n 3. items\n\n An unordered list:\n\n * UNordered\n\n * list\n\n * items \n\n a blockquote:\n\n > |When you believe it something is correct;\n\n > |do it!\n\n, A/n **bolded**, _italic_, ~cross out~ text. \n\n  ![wallet](https://surgegifting.com/wp-content/uploads/2021/02/IMG_4071-scaled.jpeg)')
  
  const updatePreview=function(e){
    setPreviewValue(e.target.value);
  }


  const markedTextarea = () => {
    return {__html: marked(previewValue)}
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
