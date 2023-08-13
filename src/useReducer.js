import logo from './logo.svg';
import './App.css';
import React, {useState,useContext, useReducer} from 'react';

const intval = 0
const reducer_cond = (state,action) => {
  switch(action){
    case 'ADD':
      return state + 1
    case 'SUB':
      return state - 1
    case "CLEAR":
      return 0
  }
}

const App = () => {
  const [count , setCount] = useReducer(reducer_cond, intval)
return <div className="App">

        <h1> Counter  {count} </h1>
          <button onClick={ () => { setCount('ADD') }  } >Add </button>
          <button onClick={ () => { setCount('SUB') }  } >Sub </button>
          <button onClick={ () => { setCount('CLEAR') }  } >Clear </button>

      </div>
}



export default App;
