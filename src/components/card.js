import React, { Component } from 'react';
import '../styling/card.css'

class Card extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className='box'>
          <img src={this.props.img} />
          <p>{this.props.description}</p>
        </div>
      </a>
    )
  }
};

export default Card;
