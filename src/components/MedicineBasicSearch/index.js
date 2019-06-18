import React, { Component } from 'react';
import Markup from './Markup';


class MedicineBasicSearch extends Component {
  state = {
    details: [],
    expanded: false,
    loading: false,
  }

  fetchDetails = (id) => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded, loading: true });
    fetch(`https://mpr.code4sa.org/api/v2/detail?nappi=${id}`)
      .then(response => response.json())
      .then(parsedJSON => (
        this.setState({ details: parsedJSON, loading: false })
      ));
  };

  render() {
    const { state, props } = this;

    const passedProps = {
      ...props,
      details: state.details,
      expanded: state.expanded,
      loading: state.loading,
      showDetails: state.showDetails,
      fetchDetails: this.fetchDetails,
    };

    return <Markup {...passedProps} />;
  }
}


export default MedicineBasicSearch;
