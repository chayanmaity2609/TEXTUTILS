import React,{useState} from 'react'
 
export default function TextForm(props) {
    const [text,setText]=useState('');
// text="enter text";//we cant change the state which we define above
// setText("enter text");//correct way to change the text
const handleUpClick=()=>{
   // console.log(text);
    let newText=text.toUpperCase();
    setText(newText);
    
}
const handleOnChange=(event)=>{
    //console.log("uppercase was on change clicked");
    setText(event.target.value);
}
const handleLoClick=()=>{
    // console.log(text);
     let newText=text.toLowerCase();
     setText(newText);
     
 }
 const handleClrClick=()=>{
  // console.log(text);
   let newText="";
   setText(newText);
 }
const handleCopy=()=>{
  // console.log(text);
  var text=document.getElementById("My_text");
   text.select();
   navigator.clipboard.writeText(text.value);
  
}
const exSpace=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    
}
// const emailExtract=()=>{
//    let f= text.match(/([a-zA-z0-9.-_]+@[a-zA-z0-9.-_]+\.[a-zA-z0-9.-_]+)/gi);
//    let newText=f;
//    console.log(newText);
//    setText(newText);
// }
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
    <h1 >{props.heading}</h1>
   
<div className="mb-3">
 
  <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="My_text" rows="8"></textarea>
</div>
</div>
<button className="btn mx-1" onClick={handleUpClick}>convert to uppercase</button> 
<button className='btn mx1' onClick={handleLoClick}>convert to lowercase</button>
<button className='btn mx-1' onClick={handleClrClick}>clear</button>
<button className='btn mx-1' onClick={handleCopy}>Copy</button>
<button className='btn mx-1' onClick={exSpace}>remove extra space</button>
    <div className='container my-2' style={{ color: props.mode==='dark'?'white':'#042743'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length } charecters</p>
      <p>minimum {0.008*text.split(" ").length } minutes or {0.008*text.split(" ").length*60 } seconds  required to read this text</p>
      <h2>Preview</h2>
      
      <p>{text.length>0?text:"enter some thing above in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
