import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import './form.css'



class Form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false
    }
    this.openForm = this.openForm.bind(this)
  }

  openForm = function () {
    this.setState({open: true})
  }

  render() {
    if (this.state.open === false) {
      return (
        <div className='form'>
          <h1> Want to see your company or resource listed? Click to fill out our listing request form </h1>
          <Button className='complete' bsStyle="primary" bsSize="large" onClick={this.openForm}> Form </Button>
        </div>
      )
    }
    if (this.state.open === true) {
      return (
        <iframe src="https://docs.google.com/a/virginia.edu/forms/d/e/1FAIpQLSelkUBbsfRJus5JV21jV8eKdP-DCpYhLRCjDu4qjGgSPs2XPA/viewform?embedded=true" width="760" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      )
    }
  }
}

export default Form
