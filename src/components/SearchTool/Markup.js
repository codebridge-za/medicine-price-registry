import React from 'react';
import t from 'prop-types';
import MedicineBasicSearch from '../MedicineBasicSearch';

import classes from './style.module.css';

const callMatchingProducts = results => (
  <div>Matching products and/or ingredients: {results.length}</div>
);

const callForm = (submitForm, content, changeHandler) => (

  <form className={classes.form} onSubmit={submitForm}>
    <label htmlFor="medicine">
      <span>Search for a medicine:</span>
      <input
        id="medicine"
        type="text"
        placeholder="e.g. salbutamol or asthavent"
        value={content}
        onChange={changeHandler}
      />
    </label>
  </form>
);

const Markup = (props) => {
  const {
    content,
    results,
    details,
    submitForm,
    changeHandler,
    fetchGenerics,
    fetchDetails,
  } = props;

  return (
    <React.Fragment>
      {callForm(submitForm, content, changeHandler)}
      {results.length > 0 && callMatchingProducts(results)}
      <MedicineBasicSearch
        {...{ fetchGenerics, fetchDetails }}
        results={results}
        details={details}
      />
    </React.Fragment>
  );
};

export default Markup;

Markup.propTypes = {
  content: t.string,
  results: t.arrayOf(t.shape({
    dosage_form: t.string,
    name: t.string,
    sep: t.string,
    nappi_code: t.string,
  })).isRequired,
  details: t.arrayOf(null).isRequired,
  submitForm: t.func.isRequired,
  changeHandler: t.func.isRequired,
  fetchGenerics: t.func.isRequired,
  fetchDetails: t.func.isRequired,
};

Markup.defaultProps = {
  content: '',
};
