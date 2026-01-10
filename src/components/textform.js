import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('enter text');

  const handleup = () => {
    setText(text.toLowerCase());
 props.showAlert("Lowercase ", "success");
  };

  const handlelow = () => {
    setText(text.toUpperCase());
    props.showAlert("uppercase ", "success");
  };

  const handelonchange = (event) => {
    setText(event.target.value);
    props.showAlert("dowload ", "success");
  };

  const cleartext = () => {
    setText('');
    props.showAlert("clear easy ", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copy ", "success");
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "mytext.txt";
    element.click();
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.head}</h1>
          <label htmlFor="mytext" className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            value={text}
            onChange={handelonchange}
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
          ></textarea>

          <button className="btn btn-primary mx-1" onClick={handleup}>convert to lower</button>
          <button className="btn btn-primary mx-1" onClick={handlelow}>convert to upper</button>
          <button className="btn btn-primary mx-1" onClick={cleartext}>clear text</button>
          <button className="btn btn-primary mx-1" onClick={downloadText}>Download Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Handlecopy</button>
        </div>
      </div>

      <div className="container my-3"style={{
           
              color: props.mode === 'dark' ? 'white' : 'black'}}>
        <p>{text.split(" ").filter(e => e.length !== 0).length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"enter something"}</p>
      </div>
    </>
  );
}
