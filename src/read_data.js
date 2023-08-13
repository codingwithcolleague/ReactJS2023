import React, { useState,useMemo} from 'react';
import './App.css'

const App = () => {
    const data=['sachin','dhoni','kohli','uv','Dravid'];
    const players=[{'name':'sachin','runs':20000,'loc':'Mumbai'},
    { 'name':'Dhoni','runs':10000,'loc':'Ranchi'},
    {'name':'Kohli','runs':15000,'loc':'Delhi'},
    {'name':'Dravid','runs':12000,'loc':'Banglore'}
   ]
   const playerObj={
    name:'sachin',
    runs:20000,
    loc:'mumbai',
    hun:'100',
    fif:'76',
    catches: 226
}
    return <div className='App'>
            <h1> Home </h1>
            <h3>Prepare order list</h3>
            <ol>
                { data.map((k,v) => {
                     <h1> {v+1} {k}  </h1>
                }) } 
            </ol>

            <table>
                <tbody>
                    {players.map((o,i) => {
                    return <tr key={'tr'+i}>
                                        <td> { o.name } </td>
                       </tr>
                    })}
                </tbody>
            </table>
    </div>
}

export default App