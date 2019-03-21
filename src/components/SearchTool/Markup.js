import React from 'react';
import t from 'prop-types';
import MedicineBasicSearch from '../MedicineBasicSearch';

import classes from './style.module.css';

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
    content,
    results,
    submitForm,
    changeHandler,
    fetchGenerics,
  } = props;

  return (
    <React.Fragment>
      {callForm(submitForm, content, changeHandler)}
      <MedicineBasicSearch {...{ fetchGenerics, results }} />
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
  })),
  submitForm: t.func.isRequired,
  changeHandler: t.func.isRequired,
  fetchGenerics: t.func.isRequired,
};

Markup.defaultProps = {
  content: null,
  results: [],
};
