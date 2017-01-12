import React, { Component } from 'react';
import Card from './card.js'
import data from '../data.js'
import '../styling/companies.css'

class Company extends Component {
  render() {
    return (
      <div id="Companies">
        <div className='header'>
          <h1> Looking for somewhere to work? </h1>
          <h3> Here are some of Charlottesville's movers and shakers </h3>
        </div>
        <div className="company-cards">
          {data.companies.map(function(i) {
            return (
              <Card link={i.site} img={i.logo} name={i.name} description={i.oneLiner} />
            )
          })
        }
        </div>
        <br />
      </div>
    )
  }
}

export default Company;
