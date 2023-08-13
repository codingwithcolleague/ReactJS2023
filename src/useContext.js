import logo from './logo.svg';
import './App.css';
import React, {useState,useContext} from 'react';
const Context  =React.createContext()

const App = () => {
  let student_name = "Rahul Chouhan"
return <div className="App">
        <h1> App Component </h1>
        <Context.Provider  value={student_name}>
        <X />
        </Context.Provider>
      </div>
}

const X = () => {
  return  <div>
        X component
        <Y />
  </div>
}

const Y = () => {
  const mydata = useContext(Context)
  return  <div>
        Y component { mydata }
       
  </div>
}



export default App;
