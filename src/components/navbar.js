import React, { Component } from 'react';
import '../styling/navbar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 0
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(key) {
        this.setState({ key });
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
        return (
                <ul>
                    <a href="#Player"><img src={require('../cville.jpg')} /></a>
                    <li className="active"><a href="#Story">Story</a></li>
                    <li><a href="#Companies" onClick={this.changeTab} className={(this.state.activeTab === "Companies") ? "active" : ""}>Companies</a></li>
                    <li><a href="#Resources" onClick={this.changeTab} className={(this.state.activeTab === "Resources") ? "active" : ""}>Resources</a></li>
                </ul>
        );
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