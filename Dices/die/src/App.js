import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiceAnimation from './components/DiceAnimation';
import DiceInformation from './components/DiceInformation';
import {connect} from "react-redux";



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <DiceAnimation/>
          <DiceInformation/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    sum: state.diceReducer.sum,
});


export default connect(mapStateToProps, null)(App);

