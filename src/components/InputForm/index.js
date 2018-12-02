import React, { Component } from 'react';
// import axios from 'axios';

import classes from './style.module.css';

class InputForm extends Component {
  state = {
    content: ''
  }

  // fetchData = () => {
  //   fetch('../../../api/api.json')
  //     .then(response => response.json())
  //     .then(parsedJSON => console.log(parsedJSON.results))
  //     .catch(error => console.log('parsing failed:', error));
  // }

  // submitForm = event => {
  //   event.preventDefault();

  //   this.fetchData();

  //   // fetch('https://randomuser.me/api/')
  //   //   .then(response => response.json())
  //   //   .then(parsedJSON => console.log(parsedJSON.results))
  //   //   .catch(error => console.log('parsing failed:', error));
    
  //   this.setState({ content: '' });

  // }

  changeHandler = event => {
    this.setState({content: event.target.value});
  }

  render() {
    const { content } = this.state;
    return (
        <form className={classes.form}>
          <label>Search for a medicine:</label>
          <input
            type="text"
            placeholder="e.g. salbutamol or asthavent"
            value={content}
            onChange={this.changeHandler}
          />
        </form>
    );
  }
}

export default InputForm;
