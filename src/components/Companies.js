import React, { Component } from 'react';
import Card from './card.js'
import data from '../data.js'
import '../styling/companies.css'
import { Button } from 'react-bootstrap'

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonPress: 0
    }
    this.handleExpand = this.handleExpand.bind(this)
    this.handleContract = this.handleContract.bind(this)

  }
  handleExpand() {
    this.state.buttonPress += 1
    this.setState({ buttonPress: this.state.buttonPress })
  }

  handleContract() {
    this.state.buttonPress -= 1
    this.setState({ buttonPress: this.state.buttonPress })
  }

  render() {
    if (this.state.buttonPress === 0) {
      return (
        <div id="Companies">
          <div className='header'>
            <h1> Looking for somewhere to work? </h1>
            <h3> Here are some of Charlottesvilles movers and shakers </h3>
          </div>
          <div className="companies">
            {data.companies.map(function (i) {
              if (data.companies.indexOf(i) < 9) {
                return (
                  <Card link={i.site} img={i.logo} description={i.oneLiner} />
                )
              }
            })
            }
          </div>
          <Button className='complete' onClick={this.handleExpand} bsStyle="primary" bsSize="large" > MORE </Button>
          <br />
        </div>
      )
    }
    if (this.state.buttonPress === 1) {
      return (
        <div id="Companies">
          <div className='header'>
            <h2> Looking for somewhere to work? </h2>
            <h2> Here are some of Charlottesvilles movers and shakers </h2>
          </div>
          <div>
            {data.companies.map(function (i) {
              if (data.companies.indexOf(i) < 19) {
                return (
                  <Card link={i.site} img={i.logo} description={i.oneLiner} />
                )
              }
            })
            }
          </div>
          <Button href="#Companies" className='complete' onClick={this.handleContract} bsStyle="primary" bsSize="large" > LESS </Button>
          <br />
        </div>
      )
    }
  }
}
export default Company;
