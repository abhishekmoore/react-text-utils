import { useState } from "react"
import Counter from "./Counter";

function TextArea() {
    
  const [areaText,setAreaText] = useState("");  

  const [wordCnt,setWordCnt] = useState(0);  

  const setText = (event)=>{

            setAreaText(event.target.value)

            setWordCnt(event.target.value.length)
  }    

  const setToLowerCase = ()=>{
            setAreaText(areaText.toLowerCase())
  }


  const setToUpperCase = ()=>{
            setAreaText(areaText.toUpperCase())
  }

  const setToBold = ()=>{
    setAreaText(areaText.bold())
}


  const clearText = ()=>{
    setAreaText("")
  }


  const removeSpaces = ()=>{
            setAreaText(areaText.split(' ').filter(s => s).join(' '))
            setWordCnt(areaText.length)            
  }

  return (    

    <div className="container">
        <form>
        <div className="">
                <textarea className="form-control my-3"  onChange={ setText }  value={ areaText } name="" id="" cols="80" rows="10"></textarea>
        </div>               
        <div className="">
            <button type="button" className="btn btn-primary mx-2" onClick={ setToLowerCase } >Lowwer Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={ setToUpperCase }>Upper Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={ setToBold }>Bold</button>
            <button type="button" className="btn btn-primary mx-2" >Clipboard</button>
            <button type="button" className="btn btn-primary mx-2" onClick={ removeSpaces }>Remove Spaces</button>
            <button type="button" className="btn btn-primary mx-2" onClick={ clearText }>Clear Text</button>
        </div>
        <Counter totalchars={ wordCnt }  totalwords= { areaText.split(" ").filter((element)=>{ return element!=='' }).length }  />
        </form>        
    </div>

  )
}

export default TextArea