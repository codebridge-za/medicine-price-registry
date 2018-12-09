import React, { Component } from 'react';

import classes from './style.module.css';

class InputForm extends Component {
  state = {
    content: '',
  }

  changeHandler = (event) => {
    this.setState({ content: event.target.value });
  };

  render() {
    const { content } = this.state;
    return (
      <form className={classes.form}>
        <label htmlFor="medicine">
          <span>Search for a medicine:</span>
          <input
            id="medicine"
            type="text"
            placeholder="e.g. salbutamol or asthavent"
            value={content}
            onChange={this.changeHandler}
          />
        </label>
      </form>
    );
  }
}

export default InputForm;
