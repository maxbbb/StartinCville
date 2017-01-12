import React, { Component } from 'react';
import Navigation from './navbar.js';
import Player from './player.js';
import Story from './story.js';
import Company from './companies';
import ResourcesTabs from './resources';
import Form from './form.js'
import '../styling/page.css';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Navigation />
        <Player />
        <Story />
        <Company />
        <ResourcesTabs />
        <Form />
      </div>
    );
  }
}

export default Page;
