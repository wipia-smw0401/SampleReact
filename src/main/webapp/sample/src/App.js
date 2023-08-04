import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopMenuComponent from './view/TopMenuComponent';

function App() {
  const [message, setMessage] = useState("");
 
  useEffect(() => {
      fetch('/test')
          .then(response => response.text())
          .then(message => {
              setMessage(message);
          });
  },[])

  return (
    <div className="App">
      <div>
        <TopMenuComponent></TopMenuComponent>
      </div>
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{message}하하하</h1>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      */}
    </div>
  );
}

export default App;
