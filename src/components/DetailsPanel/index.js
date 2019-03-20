import React from 'react';
import classes from './style.module.css';

const DetailsPanel = ({ details }) => {
  const {
    sep: price,
    cost_per_unit: costPerUnit,
    dosage_form: dosageForm,
    dispensing_fee: dispensingFee,
    schedule,
    pack_size: packSize,
    num_packs: numPacks,
    is_generic: isGeneric,
    ingredients,
    name,
    nappi_code: nappiCode,
    regno,
  } = details;

  return (
    <div key={nappiCode + regno} className={classes.container}>
      <div className={classes.detailsContainer}>
        <div className={classes.productDetails}>
          <div className={classes.productTitle}>Product details</div>
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
        </div>
        <div>
          <div>Ingredients</div>
        </div>
      </div>
      <div>Registration number: {regno}</div>
    </div>
  );
};


export default DetailsPanel;
