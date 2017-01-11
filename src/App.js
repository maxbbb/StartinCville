import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card.js'
import ResourcesTabs from './resources'
import Company from './Companies'
import Form from './form'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Company />
        <ResourcesTabs />  
        <Form />
      </div>
    );
  }
}

export default App;
