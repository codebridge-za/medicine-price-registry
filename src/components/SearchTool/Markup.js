import React from 'react';
import t from 'prop-types';

import MedicineBasicSearch from '../MedicineBasicSearch';

import { SearchWrapper, InputBaseStyled } from './styled';

// import classes from './style.module.css';

const callMatchingProducts = results => (
  <div>Matching products and/or ingredients: {results.length}</div>
);

const callForm = (submitForm, content, changeHandler) => (
  <React.Fragment>
    <span>Search for a medicine:</span>
    <SearchWrapper>
      <InputBaseStyled
        placeholder="e.g. salbutamol or asthavent"
        onChange={changeHandler}
        value={content}
        classes={{
          root: 'inputRoot',
          input: 'inputInput',
        }}
      />
    </SearchWrapper>
  </React.Fragment>
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
      {results.length > 0 && callMatchingProducts(results)}
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
};
