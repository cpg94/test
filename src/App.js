import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export class Link extends Component {
  render(){
    return (
      this.props.hide ? null : <a href={this.props.address}>Click!</a>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hi!</h1>
        </header>
        <Link address="google.com" hide={false} />
      </div>
    );
  }
}

export default App;
