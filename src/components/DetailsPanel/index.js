import React from 'react';

import {
  Container,
  DetailsContainer,
  Registration,
  Details,
  Title,
  ListsContainer,
  List,
  DetailKey,
  IngredientList,
} from './styled';

const callListOfIngredients = ({ name, strength, unit }) => (
  <IngredientList key={name}>
    <DetailKey>{name}</DetailKey>
    <div>{strength + unit}</div>
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
      <div>{value}</div>
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
    <Container>
      <DetailsContainer>
        {callProductDetails(details)}
        {callIngredients(details)}
      </DetailsContainer>
      <Registration>
        <p>Registration number: {regno}</p>
      </Registration>
    </Container>
  );
};


export default DetailsPanel;
