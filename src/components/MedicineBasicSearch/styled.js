import styled from 'styled-components';

import {
  Card,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';

const ImageContainerLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MedIcon = styled.img`
  padding-right: 15px;
`;

const CardStyled = styled(Card)`
  padding: 15px;
  margin-bottom: 10px;
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
`;


const Price = styled(Typography)`
  padding-right: 15px;
  color: #4d4b4b;
`;


const ButtonStyled = styled(Button)`
  text-transform: none;
`;


const IconButtonStyled = styled(IconButton)``;

export {
  ImageContainerLeft,
  MedIcon,
  CardStyled,
  Title,
  FarRightContainer,
  IconButtonStyled,
  Price,
  ButtonStyled,
};

export default {
  ImageContainerLeft,
  MedIcon,
  CardStyled,
  Title,
  FarRightContainer,
  IconButtonStyled,
  Price,
  ButtonStyled,
};
