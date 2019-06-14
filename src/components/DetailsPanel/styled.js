import styled from 'styled-components';

import {
  Card,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';

const Container = styled.div`
  margin-bottom: 10px;
`;

const DetailsContainer = styled.div`
  display: flex;
  ${'' /* border: 1px solid #d6d6d6; */}
  ${'' /* border-top: none; */}
  ${'' /* margin-top: -10px; */}
`;

const Registration = styled.div`
  color: #999;
  font-size: 14px;
  padding: 15px;
  ${'' /* border: 1px solid #d6d6d6; */}
  ${'' /* border-top: none; */}
`;

const Details = styled.div`
  width: 50%;
  padding: 15px;
`;

const Title = styled.div`
  padding-bottom: 20px;
  font-size: 20px;
`;

const ListsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
`;

const DetailKey = styled.div`
  font-weight: bold;
  line-height: 1.4px;
  font-size: 14px;
`;

const IngredientList = styled.li`
  display: flex;
  justify-content: space-between;
`;

export {
  Container,
  DetailsContainer,
  Registration,
  Details,
  Title,
  ListsContainer,
  List,
  DetailKey,
  IngredientList,
};

export default {
  Container,
  DetailsContainer,
  Registration,
  Details,
  Title,
  ListsContainer,
  List,
  DetailKey,
  IngredientList,
};
