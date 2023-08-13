import React, { useState,useMemo} from 'react';
import './App.css'
import X from './X';
import Z from './Z';
import {Provider}  from 'react-redux';
import homeStore from './store';
import Y from './Y';


const App = () => {
    return <div className='App'>
            <h1> App Component </h1>
            <Provider store={homeStore}>
                <X />
                <Y />
                <Z />
            </Provider>
    </div>
}

export default App