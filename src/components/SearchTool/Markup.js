import React from 'react';
import t from 'prop-types';

import MedicineBasicSearch from '../MedicineBasicSearch';

import { Wrapper, Text, SearchWrapper, InputBaseStyled } from './styled';

const callMatchingProducts = (results, content) => {
  if (!content || content.length < 4) {
    return null;
  }

  if (results.length < 1) {
    return <Text>No matching products found.</Text>;
  }

  return <Text>Matching products and/or ingredients: {results.length}</Text>;
};

const callForm = (content, changeHandler, results) => (
  <Wrapper>
    <Text>Search for a medicine:</Text>
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
    {callMatchingProducts(results, content)}
  </Wrapper>
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
      {callForm(content, changeHandler, results)}
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
