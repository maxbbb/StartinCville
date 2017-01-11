import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import Card from './card.js'
import data from './data.js'

class WorkSpace extends Component {
  render() {
    return (
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
        <h1> Looking to start a company? These places can help you out. </h1> 
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Work Space"> <WorkSpace /> </Tab>
          <Tab eventKey={2} title="Funding"> <Funding /> </Tab>
          <Tab eventKey={3} title="Legal"> <Legal /> </Tab>
          <Tab eventKey={4} title="Hiring"> <Hiring /> </Tab>
        </Tabs>
      </div>
    )
  }
};

export default ResourcesTabs;
