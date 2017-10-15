import React, { Component } from 'react';
import hello from 'hellojs/dist/hello.all.js';
import { Configs } from '../configs';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    hello('msft').login({ scope: Configs.scope }).then(
      () => this.props.history.push('/home'),
      e => console.error(e.error.message)
    );
  }

  render() {
    return (
      <div>
        <div align = "center"> <h3>Welcome to your Chatterbug! </h3></div>
        <button onClick={this.onLogin} align="center" >Sign in with your LU Mail</button>
      </div>
    );
  }
}

export default Login;