import React,{useState} from 'react'
export default function Textform(props) {
    const handleupclick=()=>{
        // console.log("the function is clicked");
        let newText=text.toUpperCase();
        setText(newText)        
    }
    const handlelowclick=()=>{
      // console.log("the function is clicked");
      let newText=text.toLowerCase();
      setText(newText)
  }
  const handelclear=()=>{
    // console.log("the function is clicked");
    let newText=text.charAt();
    setText(newText)
}
    const handleOnChange=(event)=>{
        // console.log("on changed");
        setText(event.target.value);
    }
    const[text,setText]=useState('enter text here');
  return (
    <>
     <div className='container' style={{color:props.mode==='white'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='white'?'black':'white'}} id="textbox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleupclick}>convert uppercase</button>
    <button className="btn btn-success mx-1" onClick={handlelowclick}>convert lowercase</button>
    <button className="btn btn-success mx-1" onClick={handelclear}>clear it</button>
    </div>
    <div className="container"style={{color:props.mode==='light'?'black':'light'}} >
      <h1  >your text summary</h1>
      <p>{text.split ("").filter((element)=>{return element.length!==0}).length}words and {text . length}characters</p>
      <p>{0.008*text.split ("") .filter((element)=>{return element.length!==0}).length}minutes for reading</p> 
      <h2 >Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}