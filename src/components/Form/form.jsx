import React ,{useState} from 'react'

const Form = (props) => {
    // Dark Mode 
  //   const [myStyle, setStyle] =useState({
  //       color: "white",
  //      backgroundColor :"black"
  //   })
  //   const [btnText, setBtnText] =useState("Enable")
  //  const toggleStyle=()=>{
  //    if(myStyle.color == 'white'){
  //       setStyle({
  //           color: "Black",
  //           backgroundColor :"white"
  //       })
  //       setBtnText("Enable Light Mode")
  //    }
  //    else{
  //       setStyle({
            
  //           color: "white",
  //           backgroundColor :"Black",
  //           boxShadow:"0px 0px 6px 1px red"
  //       })
  //       setBtnText("Enable Dark Mode")
  //    }
  //  }
       

    const [text, setText] =useState("")
    console.log(text);
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Clear Text", "success");
    }
    const handleCopy = ()=>{
      let text = document.getElementById("floatingTextarea2")
      text.select();
      props.showAlert("Copy Text", "success");
      navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpace = ()=>{
    let newtext1 = text.split(/[ ]+/);
    setText(newtext1.join(" "))
    props.showAlert("Remove   All Extra-Space", "success");
}
   
    const handleOnChange = (event)=>{
        console.log("On Changed");
        setText(event.target.value);
      }
  return (
    <>
    <div className="container p-5 mt-5 mb-4  rounded" style={{color : props.mode==="dark"?"white": "black"}}>
    <div className="form-floating" >
  <textarea className="form-control"  value={text} onChange={handleOnChange}  placeholder="Leave a comment here" id="floatingTextarea2" style={{backgroundColor : props.mode==="dark"?"grey": "white",color : props.mode==="dark"?"white": "black"}}></textarea>
  <label htmlFor="floatingTextarea2">Please Enter Value</label>
</div>
    <button className='btn btn-danger my-3 ' onClick={handleUpClick} >Convert UpperCase</button>
    <button className='btn btn-danger my-3 mx-3' onClick={handleLowClick} >Convert LowerCase</button>
    <button className='btn btn-danger my-3 mx-3' onClick={handleClearClick} >Clear Text</button>

    <button className='btn btn-danger my-3 mx-3' onClick={handleCopy} >Copy Text </button>
    <button className='btn btn-danger my-3 mx-3' onClick={handleExtraSpace} >Remove Extra Space </button>

    </div>

    <div className="div container" style={{color : props.mode==="dark"?"white":"black"}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split("").length} Read Time</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview in here"}</p>
    </div>
    </>
  )
}

export default Form