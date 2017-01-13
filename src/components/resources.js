import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import Card from './card.js'
import data from '../data.js'
import '../styling/resources.css'

class WorkSpace extends Component {
  render() {
    return (
      <div className="resources">
        {data.resources.Workspace.map(function(i) {
          return (
            <Card link={i.site} img={i.logo} name={i.name} description={i.oneLiner} />
          )
        })
      }
      </div>
    )
  }
}

class Funding extends Component {
  render() {
    return (
      <div className="resources">
        {data.resources.Funding.map(function(i) {
          return (
            <Card link={i.site} img={i.logo} name={i.name} description={i.oneLiner} />
          )
        })
      }
      </div>
    )
  }
}

class Legal extends Component {
  render() {
    return (
      <div className="resources">
        {data.resources.Legal.map(function(i) {
          return (
            <Card link={i.site} img={i.logo} name={i.name} description={i.oneLiner} />
          )
        })
      }
      </div>
    )
  }
}

class Hiring extends Component {
  render() {
    return (
      <div className="resources">
        {data.resources.Hiring.map(function(i) {
          return (
            <Card link={i.site} img={i.logo} name={i.name} description={i.oneLiner} />
          )
        })
      }
      </div>
    )
  }
}

class ResourcesTabs extends Component {
  render() {
    return (
      <div id="Resources">
        <div className='header'>
        <h1> Looking to start a company? Check out these places. </h1>
        </div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Space"> <WorkSpace /> </Tab>
          <Tab eventKey={2} title="Funding"> <Funding /> </Tab>
          <Tab eventKey={3} title="Legal"> <Legal /> </Tab>
          <Tab eventKey={4} title="Hiring"> <Hiring /> </Tab>
        </Tabs>
      </div>
    )
  }
};

export default ResourcesTabs;
