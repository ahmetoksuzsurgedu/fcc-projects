import React, {useState} from "react";
import './App.css';
import {marked} from 'marked'


function App() {
  const [previewValue, setPreviewValue] = useState('<h1>a heading element (H1 size)</h1> <h2>a sub heading element (H2 size) </h2> <a href="https://surgegifting.com/" alt="surgegifting.com"></a> inline code: <code><a href="https://surgegifting.com/" alt="surgegifting.com"></a></code>, a code block: <pre><code>  <h1>a heading element (H1 size)</h1> <h2>a sub heading element (H2 size) </h2> <a href="https://surgegifting.com/" alt="surgegifting.com"></a> </code></pre>, a list item:ordered:<ol><li>ordered</li> <li>list</li> <li>items</li> </ol>,unordered: <ul> <li>UNordered</li> <li>list</li> <li>items</li> </ul> a blockquote: <blockquote><p>When you believe it something is correct; do it!</p> </blockquote>, <img src="https://surgegifting.com/wp-content/uploads/2021/02/IMG_4071-scaled.jpeg" alt="wallet"></img> <strong> bolded text. </strong>')
  
  const updatePreview=function(e){
    setPreviewValue(e.target.value);
  }


  const markedTextarea = () => {
    return {__html: marked(previewValue)}
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <textarea id="editor" onChange={updatePreview} ></textarea>
      <div id="preview" dangerouslySetInnerHTML={markedTextarea()} ></div>
    </div>
  );
}

export default App;
