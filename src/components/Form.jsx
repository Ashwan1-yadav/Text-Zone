import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("")
  const handlerUp = () => {
    setText("lorem ipsum") 
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleonchange= (event) =>{
    setText(event.target.value)
  }

  const handlerlower = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const copytoclipboard = () => {
    navigator.clipboard.writeText(text)
  }

  const clearText = () => {
    setText("")
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  return (
    <>
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label mt-4">
           <h2>Textarea</h2>
        </label>
        <textarea onChange={handleonchange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          style={{backgroundColor : props.mode === "light" ? "dark" : "light" , color : props.mode === "light" ? "black" : "light"}}
        ></textarea>
        <button className="btn btn-primary m-2" onClick={handlerUp}>Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handlerlower}>Convert to Lowercase</button>
        <button onClick={copytoclipboard} className="btn btn-success">Copy Text</button>
        <button onClick={clearText} className="btn btn-danger m-2">Clear Text</button>
        <button onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      </div>
    </div>

    <div className="container">
      <p>Word Count : {(text.split(" ").length)}</p>
      <p>Character Count : {text.length}</p>
      <p>Take Time to read : {0.008 * text.split(" ").length} minutes </p>
    </div>

    <hr />

    <div className="container">
      <h2>Text Preview</h2>
      <div className="container"><hr />
      <p>{text}</p>
      <hr />
      </div>
    </div>
    </>
  );
};

export default Form;
