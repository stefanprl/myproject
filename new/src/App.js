import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import CounterDetails from './components/counterDetails';
import CounterActions from './components/counterActions';
import Login from './components/login';
import Toolbar from './components/toolbar';

import { onAppInit } from './actions/auth';

class App extends Component {
    componentDidMount() {
        this.props.onAppInit();
    }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Login />

          <CounterDetails
             // counterValue={this.state.counter}
          />

          <CounterActions
            // counter={this.state.counter}
            // onIncrement={this.incCounter}
            // onDecrement={this.decCounter}
            // onAdd={this.addCounter}
            // onSub={this.subCounter}
          />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    onAppInit: () => dispatch(onAppInit()),
});

export default connect(null, mapDispatchToProps)(App);
