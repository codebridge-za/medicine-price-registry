import React, { Component } from 'react';
import MedicineBasicSearch from '../MedicineBasicSearch';

import classes from './style.module.css';
import Loader from '../Loader';

const BaseRequest = {
  loading: false,
  error: false,
  success: false,
  errMessage: '',
};

class SearchTool extends Component {
  state = {
    content: '',
    results: [],
    request: {
      ...BaseRequest,
    },

  };

  updateRequest = obj => this.setState({
    request: {
      ...BaseRequest,
      ...obj,
    },
  });

  fetchData = (content) => {
    this.updateRequest({ loading: true });
    fetch(`https://mpr.code4sa.org/api/v2/search?q=${content}`)
      .then(response => response.json())
      .then((parsedJSON) => {
        this.setState({
          results: parsedJSON,
          request: {
            ...BaseRequest,
            success: true,
          },
        });
      })
      .catch(() => {
        this.updateRequest({
          error: true,
          errMessage: 'Oh no something went wrong',
        });
      });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ content: '' });
  };

  changeHandler = (event) => {
    this.setState({ content: event.target.value }, () => {
      const { content } = this.state;
      if (content && content.length > 3) {
        this.fetchData(content);
      }
    });
  };

  render() {
    const {
      content, results, request: {
        loading,
        error,
        success,
        errMessage,
      },
    } = this.state;
    return (
      <React.Fragment>
        <form className={classes.form} onSubmit={this.submitForm}>
          <label htmlFor="medicine">
            <span>Search for a medicine:</span>

            <div className={classes.inputContainer}>
              <input
                id="medicine"
                type="text"
                placeholder="e.g. salbutamol or asthavent"
                value={content}
                onChange={this.changeHandler}
              />
            </div>
          </label>
        </form>

        {loading && (
        <div className={classes.loaderContainer}>
          <Loader />
        </div>
        )}
        {success && <MedicineBasicSearch results={results} />}

        {error && <div>{errMessage}</div>}

      </React.Fragment>
    );
  }
}

export default SearchTool;
