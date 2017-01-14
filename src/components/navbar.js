import React, { Component } from 'react';
import '../styling/navbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import smoothScroll from 'smoothscroll';
var icon = require('../menu.png')
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
    menuDisplay(bool, event) {
      console.log("menu display called")
      if (bool) {
        this.setState({ menuShow: !this.state.menuShow });
        event.stopPropagation();
      } else if (!bool && this.state.menuShow) {
        this.setState({ menuShow: false})
      }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        if (document.getElementById('toggle')) {
            document.getElementById('toggle').addEventListener("click", (event) => this.menuDisplay(true, event), true)
            window.addEventListener('click', this.menuDisplay.bind(null, false), false )
        }
    }
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
                    <div className="dropdown">
                        <a id="toggle" className="dropbtn"><img src={icon} /></a>
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