// React Dependencies 
import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './home';
 
// Authentication Dependencies 
import hello from 'hellojs/dist/hello.all.js'; 
 
class Chat extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {value: ''}; 
     
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    } 
    handleChange(event) { 
        this.setState({value: event.target.value}); 
      } 
     
    handleSubmit(event) { 
        alert('Brenden Said: ' + this.state.value); 
        event.preventDefault(); 
    } 
     
    render() { 
        return ( 
          <form onSubmit={this.handleSubmit}> 
            <label> 
              Name: 
              <input type="text" value={this.state.value} onChange={this.handleChange} /> 
            </label> 
            <input type="submit" value="Submit" /> 
          </form> 
        ); 
    } 
} 
 
export default Chat;