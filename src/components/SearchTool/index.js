import React, { Component } from 'react';
import { uniqBy } from 'lodash';
import Markup from './Markup';


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
    const { state, props } = this;

    const passedProps = {
      ...props,
      content: state.content,
      results: state.results,
      changeHandler: this.changeHandler,
      submitForm: this.submitForm,
      fetchData: this.fetchData,
    };

    return <Markup {...passedProps} />;
  }
}


export default SearchTool;
