import React from 'react';
import './App.css';

// function Hello(props){
//   return(
//   <div id="second">
//     <h5>{props.sub}</h5>
//     Hello {props.tx}
//   </div>
//   )
// }

class Hello extends React.Component{
  
  state = {
    show: 'true'
  }

  toggle = () => {
    this.setState({
      show : !this.state.show
    })
  }

  render(){
    if (this.state.show) {
      return(
        <div>
          <h5>{this.props.sub}</h5>
          Hello {this.props.tx}
          <button onClick={this.toggle}>
            Click
          </button>  
        </div>
        )
    } else {
      return(
      <div>
        There are not elements
        <button onClick={this.toggle}>
          Click
        </button>  
      </div>
      )  
    }
  }
}

function App() {
  return (
    <div className="App">
      Bienvenido a este nuevo curso:
      <Hello tx="Juan" sub="Usuario"/>
      <Hello tx="Maria" sub="Cliente"/>
      <Hello tx="El niño" sub="Admin"/>
    </div>
  );
}

export default App;
