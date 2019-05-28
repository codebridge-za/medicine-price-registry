import React, { Component } from 'react';
import Markup from './Markup';


class MedicineBasicSearch extends Component {
  state = {
    details: [],
    expanded: false,
  }

  fetchDetails = (id) => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
    fetch(`https://mpr.code4sa.org/api/v2/detail?nappi=${id}`)
      .then(response => response.json())
      .then(parsedJSON => (
        this.setState({ details: parsedJSON })
      ));
  };

  render() {
    const { state, props } = this;

    const passedProps = {
      ...props,
      details: state.details,
      expanded: state.expanded,
      showDetails: state.showDetails,
      fetchDetails: this.fetchDetails,
    };

    return <Markup {...passedProps} />;
  }
}


export default MedicineBasicSearch;
