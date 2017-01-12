import React, { Component } from 'react';
import '../styling/navbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: ""
        }
        this.handleSelectStory = this.handleSelectStory.bind(this);
        this.handleSelectCompanies = this.handleSelectCompanies.bind(this);
        this.handleSelectResources = this.handleSelectResources.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(eventKey) {
    event.preventDefault();
    }

    handleSelectStory() {
        this.setState({ key: 'Story' });
        console.log(this.state.key)
    }

    handleSelectCompanies() {
        this.setState({ key: 'Companies' });
    }

    handleSelectResources() {
        this.setState({ key: 'Resources' });
    }
    /*
        render() {
            return (
                <div className="App">
                    <Nav activeKey={this.state.key} onSelect={this.handleSelect}>
                        <a href="#Player"><img src={require('../cville.jpg')} /></a>
                        <NavItem eventKey={1} href="#Story"> Story </NavItem>
                        <NavItem eventKey={2} href="#Companies"> Companies </NavItem>
                        <NavItem eventKey={3} href="#Resources"> Resources </NavItem>
                    </Nav>
                </div>
                    )
        }
    */
    render() {
        if (window.innerWidth > 730) {
            return (
                <ul>
                    <a href="#Player"><img src={require('../cville.jpg')} /></a>
                    <li><a href="#Story" onClick={this.handleSelectStory} className={(this.state.key === "Story") ? "active" : ""}>Story</a></li>
                    <li><a href="#Companies" onClick={this.handleSelectCompanies} className={(this.state.key === "Companies") ? "active" : ""}>Companies</a></li>
                    <li><a href="#Resources" onClick={this.handleSelectResources} className={(this.state.key === "Resources") ? "active" : ""}>Resources</a></li>
                </ul>
            );
        }
        if (window.innerWidth < 731) {
            return (
                <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                    <a href="#Player"><img src={require('../cville.jpg')} /></a>
                    <NavDropdown eventKey="4" title="Menu" id="nav-dropdown">
                        <MenuItem eventKey="4.1"><a href="#Story" onClick={this.handleSelectStory} className={(this.state.key === "Story") ? "active" : ""}>Story</a></MenuItem>
                        <MenuItem eventKey="4.2"><a href="#Companies" onClick={this.handleSelectCompanies} className={(this.state.key === "Companies") ? "active" : ""}>Companies</a></MenuItem>
                        <MenuItem eventKey="4.3"><a href="#Resources" onClick={this.handleSelectResources} className={(this.state.key === "Resources") ? "active" : ""}>Resources</a></MenuItem>
                    </NavDropdown>
                </Nav>
            )
        }
    }
}

export default Navigation;

/*
const ControlledTabs = React.createClass({
                    getInitialState() {
                return {
                    key: 1
    };
  },

  handleSelect(key) {
                    alert('selected ' + key);
                this.setState({key});
  },

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
                    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                </Tabs>
                );
  }
});
*/