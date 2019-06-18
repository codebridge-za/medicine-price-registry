import { InputBase } from '@material-ui/core';

import { Typography } from '@material-ui/core';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 120px;
  margin-bottom: 20px;
`;

const Text = styled(Typography)`
  && {
    margin: 10px 0;
  }
`;

const SearchWrapper = styled.div`
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-left: 0;
  width: 100%;
  border: 1px solid #d6d6d6;

  &:hover {
    background: #fff;
    border: 1px solid #beeef7;   
  }
`;

const InputBaseStyled = styled(InputBase)`

  && {
    display: inline-block;
    width: 90%;
  }

  & .inputRoot {
    color: #333;
  }

  & .inputInput {
    padding: 10px;
    width: 100%;
  }
`;

const SpinnerContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Wrapper,
  Text,
  SearchWrapper,
  InputBaseStyled,
  SpinnerContainer,
};

export default {
  Wrapper,
  Text,
  SearchWrapper,
  InputBaseStyled,
  SpinnerContainer,
};
