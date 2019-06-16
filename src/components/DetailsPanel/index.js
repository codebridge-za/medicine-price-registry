import React from 'react';

import { Divider } from '@material-ui/core';

import {
  DetailsContainer,
  Registration,
  Details,
  Title,
  ListsContainer,
  List,
  DetailKey,
  Value,
  IngredientList,
} from './styled';

const callListOfIngredients = ({ name, strength, unit }) => (
  <IngredientList key={name}>
    <DetailKey>{name}</DetailKey>
    <Value>{strength + unit}</Value>
  </IngredientList>
);

const callIngredients = ({ ingredients, regno }) => (
  <Details key={regno}>
    <Title>Ingredients</Title>
    <ListsContainer>
      {ingredients.map(callListOfIngredients)}
    </ListsContainer>
  </Details>
);

const callListOfProducts = (details) => {
  const {
    sep: price,
    cost_per_unit: costPerUnit,
    dosage_form: dosageForm,
    dispensing_fee: dispensingFee,
    schedule,
    pack_size: packSize,
    num_packs: numPacks,
    is_generic: isGeneric,
  } = details;

  const detailsArray = [
    {
      key: 'Max price (incl VAT and fees)',
      value: price,
    },
    {
      key: 'Cost per unit',
      value: `${costPerUnit}/${dosageForm}`,
    },
    {
      key: 'Dispensing Fee',
      value: dispensingFee,
    },
    {
      key: 'Schedule',
      value: schedule,
    },
    {
      key: 'Dosage Form',
      value: dosageForm,
    },
    {
      key: 'Tablets/ml/Doses',
      value: packSize,
    },
    {
      key: 'Number of packs',
      value: numPacks,
    },
    {
      key: 'Generic/Innovator',
      value: isGeneric,
    },
  ];

  const createListItem = ({ key, value }) => (
    <List key={key}>
      <DetailKey>{key}:</DetailKey>
      <Value>{value}</Value>
    </List>
  );

  return (
    <ListsContainer>
      {detailsArray.map(createListItem)}
    </ListsContainer>
  );
};


const callProductDetails = details => (
  <Details>
    <Title>Product details</Title>
    <ListsContainer>
      {callListOfProducts(details)}
    </ListsContainer>
  </Details>
);

const DetailsPanel = ({ details }) => {
  const { regno } = details;

  return (
    <React.Fragment>
      <Divider />
      <DetailsContainer>
        {callProductDetails(details)}
        {callIngredients(details)}
      </DetailsContainer>
      <Registration>Registration number: {regno}</Registration>
    </React.Fragment>
  );
};


export default DetailsPanel;
