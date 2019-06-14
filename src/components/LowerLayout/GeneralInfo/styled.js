import styled from 'styled-components';

import {
  Card,
  CardContent,
  Divider,
  Typography,
  ListItemText,
} from '@material-ui/core';

const CardStyled = styled(Card)`
  && {
    margin: 30px 10px;
  }
`;

const CardContentStyled = styled(CardContent)`
  && {
    padding: 0;
  }
`;

const Heading = styled(Typography)`
  && {
    margin: 0;
    padding: 20px 0 0 20px;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 400;
  }
`;

const DividerStyled = styled(Divider)`
  && {
    margin: 20px 20px 0 20px;
  }
`;

const ContentContainer = styled.div`
  padding: 20px 20px 0 20px;
`;

const Text = styled(Typography)`
  color: rgba(0, 0, 0, 0.54);
`;

const List = styled(ListItemText)`
  && {
    color: rgba(0, 0, 0, 0.54);
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

export {
  CardStyled,
  CardContentStyled,
  Heading,
  DividerStyled,
  ContentContainer,
  Text,
  List,
  Link,
};

export default {
  CardStyled,
  CardContentStyled,
  Heading,
  DividerStyled,
  ContentContainer,
  Text,
  List,
  Link,
};
