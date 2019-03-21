import React from 'react';
import t from 'prop-types';
import classes from './style.module.css';

const callListOfIngredients = (ingredients) => {
  const { name, strength, unit } = ingredients;
  return (
    <li key={name} className={classes.ingredientList}>
      <div className={classes.detailKey}>{name}</div>
      <div>{strength + unit}</div>
    </li>
  );
};

const callIngredients = (details) => {
  const { ingredients, regno } = details;

  return (
    <div key={regno} className={classes.details}>
      <div className={classes.title}>Ingredients</div>
      <ul className={classes.listsContainer}>
        {ingredients.map(callListOfIngredients)}
      </ul>
    </div>
  );
};

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
  return (
    <ul className={classes.listsContainer}>
      <li className={classes.list}>
        <div className={classes.detailKey}>Max price (incl VAT and fees):</div>
        <div>{price}</div>
      </li>
      <li className={classes.list}>
        <div className={classes.detailKey}>Cost per unit:</div>
        <div>{costPerUnit}/{dosageForm}</div>
      </li>
      <li className={classes.list}>
        <div className={classes.detailKey}>Dispensing Fee:</div>
        <div>{dispensingFee}</div>
      </li>
      <li className={classes.list}>
        <div className={classes.detailKey}>Schedule:</div>
        <div>{schedule}</div>
      </li>
      <li className={classes.list}>
        <div className={classes.detailKey}>Dosage Form:</div>
        <div>{dosageForm}</div>
      </li>
      <li className={classes.list}>
        <div className={classes.detailKey}>Tablets/ml/Doses:</div>
        <div>{packSize}</div>
      </li>
      <li className={classes.list}>
        <div className={classes.detailKey}>Number of packs:</div>
        <div>{numPacks}</div>
      </li>
      <li className={classes.list}>
        <div className={classes.detailKey}>Generic/Innovator:</div>
        <div>{isGeneric}</div>
      </li>
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
  const {
    regno,
  } = details;

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


DetailsPanel.propTypes = {
  details: t.shape({
    regno: t.string,
    sep: t.string,
    cost_per_unit: t.string,
    dosage_form: t.string,
    dispensing_fee: t.string,
    schedule: t.string,
    pack_size: t.number,
    num_packs: t.number,
    is_generic: t.string,
    ingredients: t.arrayOf(t.shape({
      name: t.string,
      strength: t.number,
      unit: t.string,
    })),
  }).isRequired,
};
