import React, { useState,useMemo,memo, useCallback} from 'react';
import './App.css'

function App(){
  const [count,setCount] = useState(0)
  const [subcount,setSubCount] = useState(0)

  const mul = useCallback( ()=>{  },[subcount] )
  return <div className="App">
        <h1> App Component </h1>
          <h1> Add Counter  {count} </h1>
          <button onClick={ () => { setCount(count + 1) } } > Add</button>
          <h1> Sub Counter  {subcount} </h1>
          <button onClick={ () => { setSubCount(subcount + 1) } } > Sub</button>
          <Child mul={mul} />
    </div>

}

const Child = memo( ()=> {
    function my(){
      console.log("hi")
    }
    { my() }
    return  <h1>  Child Component</h1>
})

export default App