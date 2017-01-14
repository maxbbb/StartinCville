import React, { Component } from 'react';
import '../styling/navbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import smoothScroll from 'smoothscroll';
var icon = require('../menu.png')

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//       Navigation.collapseMenu()
//   }
// }

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: "",
            menuShow: false,
        }
        this.handleSelectStory = this.handleSelectStory.bind(this);
        this.handleSelectCompanies = this.handleSelectCompanies.bind(this);
        this.handleSelectResources = this.handleSelectResources.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.menuDisplay = this.menuDisplay.bind(this);
        this.collapseMenu = this.collapseMenu.bind(this)
    }

    handleSelectStory(event) {
        event.preventDefault();
        smoothScroll(document.querySelector('#Story'));
    }

    handleSelectCompanies() {
        event.preventDefault();
        smoothScroll(document.querySelector('#Companies'));
    }

    handleSelectResources() {
        event.preventDefault();
        smoothScroll(document.querySelector('#Resources'));
    }

    handleScroll() {
        var doc = document.documentElement
        var scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        var storyPosition = document.getElementById('Story').offsetTop - 2;
        var companiesPosition = document.getElementById('Companies').offsetTop - 2;
        var resourcesPosition = document.getElementById('Resources').offsetTop - 2;

        if (scrollTop > storyPosition && scrollTop < companiesPosition) {
            this.setState({ key: 'Story' })
        }
        if (scrollTop > companiesPosition && scrollTop < resourcesPosition) {
            this.setState({ key: 'Companies' })
        }
        if (scrollTop > resourcesPosition) {
            this.setState({ key: 'Resources' })
        };
    }

    menuDisplay() {
        console.log(this.state.menuShow)
        this.setState({ menuShow: (this.state.menuShow === false ? true : false) });
        console.log(this.state.menuShow)
    }

    // collapseMenu(event) {
    //     if (this.state.clickicon === false) {
    //         if (this.state.menuShow === true) {
    //             this.setState({ menuShow: false })
    //         }
    //      console.log('hey')
    //     }
    // }


    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    //     window.addEventListener('click', this.collapseMenu, false);
    //     document.getElementById('toggle').addEventListener("click", this.collapseMenu, false)
    // }

    collapseMenu(bool) {
        
            if (this.state.menuShow === true) {
                this.setState({ menuShow: false })
            }
            if (bool === true) {
                this.setState({menuShow: true})
            }

         console.log('hey')
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        // window.addEventListener('click', this.collapseMenu, false);
        // document.getElementById('toggle').addEventListener("click", this.collapseMenu(true), false)
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
                <ul className="Navigation">
                    <a href="#Player"><img src={require('../cville.jpg')} /></a>
                    <li><a onClick={this.handleSelectStory} className={(this.state.key === "Story") ? "active" : ""}>Story</a></li>
                    <li><a onClick={this.handleSelectCompanies} className={(this.state.key === "Companies") ? "active" : ""}>Companies</a></li>
                    <li><a onClick={this.handleSelectResources} className={(this.state.key === "Resources") ? "active" : ""}>Resources</a></li>
                </ul>
            );
        }
        if (window.innerWidth < 731) {
            return (
                <div className="mobileNav">
                    <a href="#Player"><img src={require('../cville.jpg')} /></a>
                    <div id="toggle" className="dropdown">
                        <a onClick={this.menuDisplay} className="dropbtn"><img src={icon} /></a>
                        <div id="myDropdown" className={this.state.menuShow === true ? "show dropdown-content" : "dropdown-content"}>
                            <a href="#Story" className={(this.state.key === "Story") ? "active" : ""}>Story</a>
                            <a href="#Companies" className={(this.state.key === "Companies") ? "active" : ""}>Companies</a>
                            <a href="#Resources" className={(this.state.key === "Resources") ? "active" : ""}>Resources</a>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Navigation;

/*
<a href="#Player"><img src={require('../cville.jpg')} /></a>

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