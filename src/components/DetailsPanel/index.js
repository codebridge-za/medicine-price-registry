import React from 'react';
import classes from './style.module.css';

const callListOfIngredients = ({ name, strength, unit }) => (
  <li key={name} className={classes.ingredientList}>
    <div className={classes.detailKey}>{name}</div>
    <div>{strength + unit}</div>
  </li>
);

const callIngredients = ({ ingredients, regno }) => (
  <div key={regno} className={classes.details}>
    <div className={classes.title}>Ingredients</div>
    <ul className={classes.listsContainer}>
      {ingredients.map(callListOfIngredients)}
    </ul>
  </div>
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
  ]
  
  const createListItem = ({ key, value }) => (
      <li className={classes.list}>
        <div className={classes.detailKey}>{key}:</div>
        <div>{value}</div>
      </li>
  );
  
  return (
    <ul className={classes.listsContainer}>
      {detailsArray.map(createListItem)}
    </ul>
  );
};


const callProductDetails = details => (
  <div className={classes.details}>
    <div className={classes.title}>Product details</div>
    <ul className={classes.listsContainer}>
      {callListOfProducts(details)}
    </ul>
  </div>
);

const DetailsPanel = ({ details }) => {
  const { regno } = details;

  return (
    <div className={classes.container}>
      <div className={classes.detailsContainer}>
        {callProductDetails(details)}
        {callIngredients(details)}
      </div>
      <div className={classes.registration}>
        <p>Registration number: {regno}</p>
      </div>
    </div>
  );
};


export default DetailsPanel;
