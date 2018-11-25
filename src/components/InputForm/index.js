import React, { Component } from 'react';

import classes from './style.module.css';

class InputForm extends Component {
  state = {
    content: ''
  }

  changeHandler = event => {
    this.setState({content: event.target.value});
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <form className={classes.form}>
          <label>Search for a medicine:</label>
          <input
            type="text"
            placeholder="e.g. salbutamol or asthavent"
            value={content}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default InputForm;
