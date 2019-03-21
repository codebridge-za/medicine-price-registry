import React, { Component, Fragment } from 'react';
import { uniqBy } from 'lodash';
import Markup from './Markup';

const BaseRequest = {
  loading: false,
  error: false,
  success: false,
  errMessage: '',
};

class SearchTool extends Component {
  state = {
    content: null,
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

  fetchGenerics = (id) => {
    fetch(`https://mpr.code4sa.org/api/v2/related?nappi=${id}`)
      .then(response => response.json())
      .then((parsedJSON) => {
        const results = uniqBy(parsedJSON, 'nappi_code');
        return this.setState({
          results,
        });
      });
  };

  fetchBasicSearch = (content) => {
    this.updateRequest({ loading: true });
    fetch(`https://mpr.code4sa.org/api/v2/search?q=${content}`)
      .then(response => response.json())
      .then((parsedJSON) => {
        const results = uniqBy(parsedJSON, 'nappi_code');
        return this.setState({
          results,
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
    ;
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ content: null });
  }

  changeHandler = (event) => {
    const { fetchBasicSearch } = this;
    const { value: content } = event.target;

    this.setState({ content });

    if (!content || content.length < 4) {
      return null;
    }

    return fetchBasicSearch(content);
  }

  render() {
    const { state } = this;

    const passedProps = {
      content: state.content,
      results: state.results,
      changeHandler: this.changeHandler,
      submitForm: this.submitForm,
      fetchGenerics: this.fetchGenerics,
      loading: state.request.loading,
      error: state.request.error,
      success: state.request.success,
      errMessage: state.request.errMessage,
    };

    return (
      <Fragment>
        <Markup {...passedProps} />
      </Fragment>
    );
  }
}


export default SearchTool;
