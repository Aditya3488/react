
import React, {useState} from 'react';

import './App.css';

function App() {
  const [text, setText]=useState('');
  const [output ,setOutput]=useState(0);

 function Clear(){
    setOutput(0)
  }

  function Subtraction() {
    
    setOutput(Number(output)-Number(text));
    }

  function Addition() {
  setOutput(Number(output)+Number(text));
    }

    function valueOnChange(event){
     setText(event.target.value);
    }
 
  return (
    <main>
    <h2>Calculator for Add & Subtract</h2>
    <input type="Number" placeholder="Enter the number for add and subtract"  onChange={valueOnChange} value={text}/>
   
    <button onClick={Addition} >Add</button>
    <button onClick={Clear} >Clear</button>

     <button  onClick={Subtraction}>Subtract</button>
        <div>
        <span>Result</span>
        <div id="Result">{output}</div>
        </div>

    </main>
  );
}

export default App;