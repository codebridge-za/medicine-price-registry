import React, { Component } from 'react';
import MedicineBasicSearch from '../MedicineBasicSearch';

import classes from './style.module.css';

class SearchTool extends Component {
  state = {
    content: '',
    results: [],
  }

  fetchData = () => {
    fetch('http://localhost:8000/api/search-lite.json')
      .then(response => response.json())
      .then(parsedJSON => (
        this.setState({ results: parsedJSON })
      ))
      .catch(error => console.log('parsing failed:', error));
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ content: '' });
  }

  changeHandler = (event) => {
    this.setState({ content: event.target.value }, () => {
      const { content } = this.state;
      if (content && content.length > 3) {
        this.fetchData();
      }
    });
  }

  render() {
    const { content, results } = this.state;
    return (
      <React.Fragment>
        <form className={classes.form} onSubmit={this.submitForm}>
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
        <MedicineBasicSearch results={results} />
      </React.Fragment>
    );
  }
}

export default SearchTool;
