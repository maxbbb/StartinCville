import React, { Component } from 'react';
import Card from './card.js'
import data from '../data.js'
import '../styling/companies.css'

class Company extends Component {
  render() {
    return (
      <div id="Companies">
        <div clasName='header'>
          <h1> Looking for somewhere to work? </h1>
          <h1> Here are some of Charlottesvilles movers and shakers </h1>
        </div>
        <div>
          {data.companies.map(function(i) {
            return (
              <Card link={i.site} img={i.logo} name={i.name} description={i.oneLiner} />
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Company;
