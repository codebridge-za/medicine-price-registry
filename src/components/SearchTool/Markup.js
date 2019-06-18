import React from 'react';
import t from 'prop-types';

import MedicineBasicSearch from '../MedicineBasicSearch';
import Spinner from '../Spinner';

import {
  Wrapper,
  Text,
  SearchWrapper,
  InputBaseStyled,
  SpinnerContainer,
} from './styled';

const callMatchingProducts = (results, content, loading) => {
  if (!content || content.length < 4) {
    return null;
  }

  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner size={30} thickness={2.5} />
      </SpinnerContainer>
    );
  }

  if (results.length < 1) {
    return <Text>No matching products found.</Text>;
  }

  return <Text>Matching products and/or ingredients: {results.length}</Text>;
};

const callForm = (content, changeHandler, results, loading) => (
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
    {callMatchingProducts(results, content, loading)}
  </Wrapper>
);

const Markup = (props) => {
  const {
    content,
    results,
    loading,
    changeHandler,
    fetchGenerics,
  } = props;

  return (
    <React.Fragment>
      {callForm(content, changeHandler, results, loading)}
      {results.length > 0 && <MedicineBasicSearch {...{ fetchGenerics, results, loading }} />}
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
  loading: t.bool,
  details: t.arrayOf(t.shape({
  })),
  changeHandler: t.func.isRequired,
  fetchGenerics: t.func.isRequired,
};

Markup.defaultProps = {
  content: null,
  results: [],
  details: [],
  loading: false,
};
