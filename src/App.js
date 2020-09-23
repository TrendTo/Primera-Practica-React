import React from 'react';
import './App.css';

function Hello(props){
  return(
  <div id="second">
    <h5>{props.sub}</h5>
    Hello {props.tx}
  </div>
  )
}

function App() {
  return (
    <div className="App">
      Bienvenido a este nuevo curso: <Hello tx="Juan" sub="Usuario"/><Hello tx="Maria" sub="Cliente"/><Hello tx="El niño" sub="Admin"/>
    </div>
  );
}

export default App;
