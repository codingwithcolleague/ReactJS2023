import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

const Start = () => { return <h1> Start Component </h1> }
const Update = () => { return <h1> Update Component </h1> }

const App = () => {
  const [count,setCount] = useState(0)
  const [flag,setFlag] = useState(false)

  useEffect( ()=> {
      console.log("Hello")
  },[])

  useEffect( ()=> {
    setFlag(!flag)
},[count])

   return <div >
    <h1>  counter  {count}</h1>
    <button onClick={ ()=> { setCount(count+1) } }>  clickMe </button>
      { flag ?  <Update/> : '' }
   </div>
}

export default App;
