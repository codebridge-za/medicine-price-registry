import styled from 'styled-components';

import { Typography } from '@material-ui/core';

const DetailsContainer = styled.div`
  display: flex;
`;

const Details = styled.div`
  width: 50%;
  padding: 20px;
`;

const Title = styled(Typography)`
  && {
    padding-bottom: 20px;
    font-size: 20px;
  }
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

const DetailKey = styled(Typography)`
  && {
    line-height: 1.5px;
    font-size: 14px;
  }
`;

const Value = styled(Typography)`
  && {
    font-size: 14px;
  }
`;

const IngredientList = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Registration = styled(Typography)`
  && {
    color: #999;
    font-size: 14px;
    padding: 0 20px;
  }
`;

export {
  DetailsContainer,
  Registration,
  Details,
  Title,
  ListsContainer,
  List,
  DetailKey,
  Value,
  IngredientList,
};

export default {
  DetailsContainer,
  Registration,
  Details,
  Title,
  ListsContainer,
  List,
  DetailKey,
  Value,
  IngredientList,
};
