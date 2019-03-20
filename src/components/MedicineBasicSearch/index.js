import React, { Component } from 'react';
import Markup from './Markup';


class MedicineBasicSearch extends Component {
  state = {
    details: [],
  }

  fetchDetails = (id) => {
    console.log('first one', id);
    fetch(`https://mpr.code4sa.org/api/v2/detail?nappi=${id}`)
      .then(response => response.json())
      .then(parsedJSON => (
        this.setState({ details: parsedJSON })
      ));
    console.log('Second one');
  };

  render() {
    const { state, props } = this;

    const passedProps = {
      ...props,
      details: state.details,
      showDetails: state.showDetails,
      fetchDetails: this.fetchDetails,
    };

    return <Markup {...passedProps} />;
  }
}


export default MedicineBasicSearch;
