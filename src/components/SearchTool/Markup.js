import React from 'react';
import t from 'prop-types';
import MedicineBasicSearch from '../MedicineBasicSearch';

import classes from './style.module.css';
import Loader from '../Loader';


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
        value={content || ''}
        onChange={changeHandler}
      />
    </label>
  </form>
);

const Markup = (props) => {
  const {
    loading,
    error,
    success,
    errMessage,
    content,
    results,
    submitForm,
    changeHandler,
    fetchGenerics,
  } = props;

  return (
    <React.Fragment>
      {callForm(submitForm, content, changeHandler)}
      {results.length > 0 && callMatchingProducts(results)}
      {loading && <Loader />}
      {success && <MedicineBasicSearch {...{ fetchGenerics, results }} />}
      {error && <div>{errMessage}</div>}

    </React.Fragment>
  );
};

export default Markup;

Markup.propTypes = {
  content: t.string,
  loading: t.bool,
  error: t.bool,
  success: t.bool,
  errMessage: t.string,
  results: t.arrayOf(t.shape({
    dosage_form: t.string,
    name: t.string,
    sep: t.string,
    nappi_code: t.string,
  })),
  details: t.arrayOf(t.shape({
  })),

  submitForm: t.func.isRequired,
  changeHandler: t.func.isRequired,
  fetchGenerics: t.func.isRequired,
  fetchDetails: t.func.isRequired,
};

Markup.defaultProps = {
  content: null,
  results: [],
  details: [],
  loading: false,
  error: false,
  success: false,
  errMessage: '',
};
