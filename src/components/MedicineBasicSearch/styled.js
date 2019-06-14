import styled from 'styled-components';
import removeProps from '../../helpers/removeProps';

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionContainerRight = styled.div`
  max-width: 300px;
   @media screen and (min-width: 600px) {
    display: flex;
    width: stretch;
    justify-content: space-between;
   }
`;

const ImageAndNameLeft = styled.div`
  display: flex;
`;

const ImageContainerLeft = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const MedIcon = styled.img`
  padding-right: 15px;
`;

const CardStyled = styled(Card)`
  && {
    margin-bottom: 10px;
  }
`;

const CardContentStyled = styled(CardContent)`
  &&& {
    padding: 5px 20px;
  }
`;

const CardActionsStyled = styled(CardActions)`
  && {
    padding: 0;
  }
`;


const Title = styled(Typography)`
  && {
    &:hover {
      cursor: pointer;
      color: #2a6496;
    }
  }
`;

const FarRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const Price = styled(Typography)`
  padding-right: 15px;
  color: #4d4b4b;
`;


const ButtonStyled = styled(Button)`
  text-transform: none;
`;

const IconButtonStyled = styled(removeProps({ component: IconButton, blacklist: 'expanded' }))`
  && {
    transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    color: ${({ expanded }) => (expanded ? 'red' : 'blue')};
    transition: transform .2s ease-in-out;
  }
`;

export {
  Container,
  ImageContainerLeft,
  MedIcon,
  CardStyled,
  CardContentStyled,
  CardActionsStyled,
  Title,
  FarRightContainer,
  IconButtonStyled,
  Price,
  ButtonStyled,
  DescriptionContainerRight,
  ImageAndNameLeft,
};

export default {
  Container,
  ImageContainerLeft,
  MedIcon,
  CardStyled,
  CardContentStyled,
  CardActionsStyled,
  Title,
  FarRightContainer,
  IconButtonStyled,
  Price,
  ButtonStyled,
  DescriptionContainerRight,
  ImageAndNameLeft,
};
