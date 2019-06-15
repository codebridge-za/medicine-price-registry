import React from 'react';
import t from 'prop-types';

import MedicineBasicSearch from '../MedicineBasicSearch';

import { SearchWrapper, InputBaseStyled } from './styled';

const callMatchingProducts = (results, content) => {
  if (!content || content.length < 4) {
    return null;
  }

  if (results.length < 1) {
    return <div>No matching products found.</div>;
  }

  return <div>Matching products and/or ingredients: {results.length}</div>;
};

const callForm = (content, changeHandler) => (
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
    changeHandler,
    fetchGenerics,
  } = props;

  return (
    <React.Fragment>
      {callForm(content, changeHandler)}
      {callMatchingProducts(results, content)}
      {results.length > 0 && <MedicineBasicSearch {...{ fetchGenerics, results }} />}
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
  changeHandler: t.func.isRequired,
  fetchGenerics: t.func.isRequired,
};

Markup.defaultProps = {
  content: null,
  results: [],
  details: [],
};
