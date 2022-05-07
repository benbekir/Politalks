import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  weather = "test";

  componentDidMount() {
    var request = new XMLHttpRequest()

    request.addEventListener('load', () => {
      this.weather = request.responseText
      console.log(this.weather)
    })

    request.open('GET', 'https://localhost:7066/weatherforecast')
    request.send()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. {this.weather}
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
      </div>
    );
  }
}

export default App;
