import React from 'react';
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
  } = props;

  return (
    <React.Fragment>
      {callForm(submitForm, content, changeHandler)}
      <MedicineBasicSearch results={results} />
    </React.Fragment>
  );
};

export default Markup;
