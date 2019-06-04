import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from "./Calculator";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="d-flex flex-row justify-content-center mt-3">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-link">React Calculator</h1>
                </div>
                <Calculator/>
            </header>
        </div>
    );
}

export default App;
