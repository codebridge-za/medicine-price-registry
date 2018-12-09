import React from 'react';

import tablet from '../../../static/images/pill_24.png';
import capsule from '../../../static/images/capsule_24.png';
import syrup from '../../../static/images/syrup_24.png';
import classes from './style.module.css';

const callImage = dosage_form => {
  let medIcon = tablet;
    switch (dosage_form) {
      case ('suspension'):
        medIcon = syrup;
        break;
      case ('effervescent tablet' || 'tablet'):
        medIcon = tablet;
        break;
      case ('capsule'):
        medIcon = capsule;
        break;
      default:
        medIcon = tablet;
    }

  return (
    <div className={classes.imageContainerLeft}>
      <img className={classes.medIcon} src={medIcon} alt='medicine icon' />
    </div>
  );
}

const callName = name => (
  <div className={classes.name}>{name}</div>
);

const callPriceAndGenerics = price => (
  <div className={classes.farRightContainer}>
    <div className={classes.price}>{price}</div>
    <div className={classes.generics}>Find Generics</div>
  </div>
);

const MedicineBasicSearch = ({ results }) => (
  
  results.map(({ dosage_form, name, sep: price, nappi_code }) => (
    <div className={classes.container} key={nappi_code}>
      {callImage(dosage_form)}
      <div className={classes.descriptionContainerRight}>
        {callName(name)}
        {callPriceAndGenerics(price)}
      </div>
    </div>
  ))
);

export default MedicineBasicSearch;
