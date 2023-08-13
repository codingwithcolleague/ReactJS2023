import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';
const App = () => {
const nameRef = useRef()
function submit(){
  nameRef.current.value = "I am use Ref"
  nameRef.current.style.color = "red"

}


return <div className="App">
    <h1>  counter </h1>
    <input type="text" name="n1" ref={nameRef} />
    <button onClick={ submit } > click me </button>
   </div>
}

export default App;
