import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState({num:0})

  const [count1,setCount1] = useState(0)


  function increment(){
    setCount1(count1 +1 )
  }

  function decrement(){
    setCount1(count1 - 1 )

  }

  return (
    <div className="App">
      <h1>Counter : { count1 }</h1>
      <button onClick={ increment  } >Increment </button>
      <button onClick={ decrement  } >DeCrement </button>


      <div className="App">
      <h1>Counter : { count.num }</h1>
      <button onClick={ () => { setCount({ num:count.num+1 })  }  } > Inline Increment </button>
      <button onClick={ () => { setCount({ num:count.num+1 } )  }} > Inline DeCrement </button>

    </div>

    </div>
  );
}

export default App;
