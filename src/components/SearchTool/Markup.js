import React from 'react';
import MedicineBasicSearch from '../MedicineBasicSearch';

import classes from './style.module.css';

const callForm = (content, changeHandler) => (

  <form className={classes.form}>
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
    changeHandler,
  } = props;

  return (
    <React.Fragment>
      {callForm(content, changeHandler)}
      <MedicineBasicSearch results={results} />
    </React.Fragment>
  );
};

export default Markup;
