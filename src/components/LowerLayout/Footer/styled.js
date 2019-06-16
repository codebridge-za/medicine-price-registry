import styled from 'styled-components';

import {
  Typography,
} from '@material-ui/core';

const Wrapper = styled.div`
  margin: 0 20px;
  @media screen and (min-width: 415px) {
    display: flex;
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  order: 1;
`;

const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
  padding-bottom: 30px;
`;

// const Details = styled.div`
//   @media screen and (min-width: 415px) {
//     display: flex;
//     justify-content: space-between;
//   }
// `;

const CollectionDateAndContact = styled.div`

`;

const Text = styled(Typography)`
  && {
    margin-top: 0;

    @media screen and (min-width: 415px) {
      padding: 0 10px;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #3a87ad;

  &:hover {
    text-decoration: underline;
    color: #2a6496;
  }
`;

const Sponsor = styled.div`

`;

export {
  Wrapper,
  LogoContainer,
  Logo,
  // Details,
  CollectionDateAndContact,
  Text,
  Link,
  Sponsor,
};

export default {
  Wrapper,
  LogoContainer,
  Logo,
  // Details,
  CollectionDateAndContact,
  Text,
  Link,
  Sponsor,
};
