import React, { Component } from 'react';
import hello from 'hellojs/dist/hello.all.js';
import axios from 'axios';
import Chat from './chat';

class Home extends Component {
  constructor(props) {
    super(props);
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

  appendRow() {
    var table = document.getElementById("table");
    table.appendChild(document.createElement("tr"));
    table.appendChild(document.createElement("td"));
    table.appendChild(document.createElement("td"));
    table.appendChild(document.createElement("td"));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <div>Welcoome, {username}!</div>
        <button onClick={this.onLogout}>Logout</button>
        <button onClick={this.appendRow}>Chat</button>
        <table id="table" border="1">
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Time</th>
          </tr>
        </table>
      </div>
      
    );
  }
}

export default Home;