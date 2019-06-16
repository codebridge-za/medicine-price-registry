import React from 'react';
import Helmet from 'react-helmet';

import { Divider } from '@material-ui/core';

import { Container, Heading } from './styled';

const Header = () => (
  <React.Fragment>
    <Helmet>
      <title>MPR (Medicine Price Registry) - OpenUp</title>
    </Helmet>
    <Container>
      <Heading>What should your medicines cost?</Heading>
      <Divider />
    </Container>
  </React.Fragment>
);

export default Header;
