import React from 'react'
import { useState } from 'react'

const TextFrom = (props) => {



  const [text, settext] = useState("");

  const pressed = function () {
    let newText = text.toUpperCase()
    settext(newText)
    props.showAlert("converted to upper case!", 'success')
  }

  const toLowercase = function () {
    let newText = text.toLowerCase()
    settext(newText)
    props.showAlert("converted to lower case!", 'success')
  }
  const handleOnchange = function (event) {
    settext(event.target.value)
  }
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1")
    console.log(text.value)
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("text coppied !", 'success')
  }
  const removeSpace = function () {
    let newText = text.split(/[ ]+/)
    settext(newText.join(" "))
    props.showAlert("all extra spaces are removed!", 'success')
 
  }


  return (
<>
    <div style={{color:props.mode==="dark"?'white':'black',background:props.mode==="dark"?'#042745ff':'white'}} className=' container my-3 px-4 '>
      <div  style={{color:props.mode==="dark"?'white':'black',background:props.mode==="dark"?'#042745ff':'white'}}>
      
        <div >
          <h1 className='p-4 font-bold '>{props.heading}</h1>
          <textarea style={{color:props.mode==="dark"?'white':'black',background:props.mode==="dark"?'grey':'white'} } id='exampleFormControlTextarea1'
          className='w-4/5 p-4 justify-center cursor-pointer border-x-2 border-y-2 border-black caret-{pink-400} ' rows="8" value={text} onChange={handleOnchange}></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={pressed}>Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={toLowercase}>Convert to LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==="dark"?'white':'black',background:props.mode==="dark"?'#042745ff':'white'}}>
      <h2 className=' font-bold text-2xl'>Youe text summery</h2>
      <p>{text.split(' ').length} words and {text.length} charectors</p>
      <p>{0.008 * text.split(' ').length}Minutes to read this</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </div>
    </>
  )
}

export default TextFrom
