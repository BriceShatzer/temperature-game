import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import getCityTemp from './utilities';
import GuessForm from './inputGuess';


const cities = [
  'chicago',
  'paris',
  'london',
  'toronto',
  'tokyo'
];

class Printer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    getCityTemp('chicago').then((response)=>{
      this.setState((state, props) => ({
        data: response
      }));
    });
 
  }

  render(){
    return (
      <div>
      <h1>Hello, world!</h1>
      <p>{this.state.data}</p>
    </div>
    )
  }


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <GuessForm />
    </div>
  );
}

/*<Printer/>

      
      
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [...cities],
      game: {
        selectedObject

      }
    };
  };
  // componentDidMount() {
  //   getCityTemp('chicago').then((response)=>{
  //     this.setState((state, props) => ({
  //       data: response
  //     }));
  //   });
  // }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Printer/>
        </div>
      );
    }
  
}

*/

export default App;
