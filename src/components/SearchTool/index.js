import React, { Component } from 'react';
import { uniqBy } from 'lodash';
import Markup from './Markup';


class SearchTool extends Component {
  state = {
    content: '',
    results: [],
    loading: true,
  }

  fetchGenerics = (id) => {
    this.setState({ loading: true });
    fetch(`https://mpr.code4sa.org/api/v2/related?nappi=${id}`)
      .then(response => response.json())
      .then((parsedJSON) => {
        const results = uniqBy(parsedJSON, 'nappi_code');
        return this.setState({ results });
      });
  };

  fetchBasicSearch = (content) => {
    this.setState({ loading: true });
    fetch(`https://mpr.code4sa.org/api/v2/search?q=${content}`)
      .then(response => response.json())
      .then((parsedJSON) => {
        const results = uniqBy(parsedJSON, 'nappi_code');
        return this.setState({ results, loading: false });
      });
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
      loading: state.loading,
      changeHandler: this.changeHandler,
      fetchGenerics: this.fetchGenerics,
    };

    return <Markup {...passedProps} />;
  }
}


export default SearchTool;
