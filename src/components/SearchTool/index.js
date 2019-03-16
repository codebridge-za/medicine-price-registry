import React, { Component } from 'react';
import { uniqBy } from 'lodash';
import MedicineBasicSearch from '../MedicineBasicSearch';

import classes from './style.module.css';

class SearchTool extends Component {
  state = {
    content: '',
    results: [],
  }

  fetchData = (content) => {
    fetch(`https://mpr.code4sa.org/api/v2/search?q=${content}`)
      .then(response => response.json())
      .then((parsedJSON) => {
        const results = uniqBy(parsedJSON, 'nappi_code');
        return this.setState({ results });
      });
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ content: '' });
  }

  changeHandler = (event) => {
    this.setState({ content: event.target.value }, () => {
      const { content } = this.state;
      if (content && content.length > 3) {
        this.fetchData(content);
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
