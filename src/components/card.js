import React, { Component } from 'react';
import '../styling/card.css'

class Card extends Component {
  render() {
    return (
      <div className='box'>
        <a href={this.props.link}>
          <img src={this.props.img}/>
        </a>
        <p>{this.props.description}</p>
      </div>
    )
  }
};

export default Card;
