import React, { Component } from 'react';
import hello from 'hellojs/dist/hello.all.js';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    debugger;
    const msft = hello('msft').getAuthResponse();

    this.state = {
      contacts: [],
      token: msft.access_token
    };

    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    const { token } = this.state;

    axios.get(
      'https://graph.microsoft.com/v1.0/me/givenName/$value',
      { headers: { Authorization: `Bearer ${token}` }}
    ).then(res => {
      const username = res.data;
      this.setState({ username });
    });
}

  onLogout() {
    hello('msft').logout().then(
      () => this.props.history.push('/'),
      e => console.error(e.error.message)
    );
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <div>{username}</div>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

export default Home;