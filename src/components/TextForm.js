import React,{useState} from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case","success")
  }
  const handleLoClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lower case","success")
  }
  const handleclearClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = "";
    setText(newText)
    props.showAlert("text cleared","success")
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox")
    // text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success")
  }
  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value)
  }
  const[text,setText] = useState("enter text here");
  return (
    <>
    <div className='container' style = {{color : props.mode==='dark' ? 'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} style = {{backgroundColor : props.mode==='dark' ? 'grey':'white' , 
            color : props.mode==='dark'? 'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn.btn-primary mx-1' onClick={handleUpClick}>convert to uppercase</button>
        <button className='btn.btn-primary mx-1' onClick={handleLoClick}>convert to lowercase</button>
        <button className='btn.btn-primary mx-1' onClick={handleclearClick}>clear text</button>
        <button className='btn.btn-primary mx-1' onClick={handleCopy}>copy text</button>
    </div>
    <div className='container my-3' style = {{color : props.mode==='dark'? 'white':'black' }} >
      <h2>your text summary</h2>
      <p>{text[text.length]===" "? (text.split(" ").length)-1:(text.split(" ").length)}words , {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read </p>
      <h2>Preview new</h2>
      <p>{text.length>0?text:"enter something here to preview"}</p>
    </div>
    </>
  )
}
