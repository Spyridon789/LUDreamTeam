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
      'https://graph.microsoft.com/v1.0/me',
      { headers: { Authorization: `Bearer ${token}` }}
    ).then(res => {
      const user = res.data;
      this.setState({ user });
    });
}

  onLogout() {
    hello('msft').logout().then(
      () => this.props.history.push('/'),
      e => console.error(e.error.message)
    );
  }

  render() { 
    const { user } = this.state; 
    return ( 
        <div> 
          {user &&
          <div>
            <div> Welcome back, {user.givenName}!</div>
            <div> Logged in as {user.mail}!</div>
          </div>
          }
          

          <div> <i> Not you? </i> </div> 
        <button onClick={this.onLogout}>Logout</button> 
      </div> 
      ); 

  }
}

export default Home;