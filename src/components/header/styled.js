import { Typography } from '@material-ui/core';

import styled from 'styled-components';

const Container = styled.div`
  margin: 40px 0 20px 0;
`;

const Heading = styled(Typography)`
  && {
    padding: 0 20px;
    font-weight: 500;
    font-size: 36px;
    color: #333;

    @media screen and (min-width: 415px) {
      font-size: 48px;
   }
  }
`;


export { Container, Heading };

export default {
  Container,
  Heading,
};
