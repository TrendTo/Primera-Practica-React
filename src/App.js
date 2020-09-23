import React from 'react';
import './App.css';

function Hello(){
  return(
    <div id="second">Hello World</div>
  )
}

function App() {
  return (
    <div className="App">
      Bienvenido a este nuevo curso: <Hello/><Hello/>
    </div>
  );
}

export default App;
