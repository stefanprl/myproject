import React, { Component } from 'react';
import http from '../../config/http';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';


class Login extends Component {
    state = {
      username: '',
      password: '',
    };

    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    onLoginSubmit = (event) => {
        event.preventDefault();

        this.props.initLoginFlow(this.state);
    };

    render() {
        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.onLoginSubmit}>
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={(event) => this.onInputChange(event)}
                    />

                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onInputChange}
                    />

                    <button>Login</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      initLoginFlow: (value) => dispatch(authActions.initLogin(value)),
  };
};

const withConnect = connect(null, mapDispatchToProps)(Login);

export default withConnect;