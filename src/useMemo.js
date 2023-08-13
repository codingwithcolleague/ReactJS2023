import React, { useState,useMemo} from 'react';
import './App.css'

function App(){
  const [addcount,setAddCount] = useState(0)
  const [subcount,setSubCount] = useState(0)
  const price = useMemo(()=>{ return addcount * 100   },[addcount] )
 

  return <div className="App">
        <h1> App Component </h1>

        <h1>Add Counter { addcount } </h1>
        <h1>Sub Counter { subcount } </h1>
        {  price }
        {  price }
        <button onClick={ ()=> { setAddCount(addcount+1) }}> Adding </button>
        <button onClick={ ()=> { setSubCount(subcount-1) }}> Subtract </button>

    </div>

}

export default App