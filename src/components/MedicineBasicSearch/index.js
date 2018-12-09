import React from 'react';

import tablet from '../../../static/images/pill_24.png';
import capsule from '../../../static/images/capsule_24.png';
import syrup from '../../../static/images/syrup_24.png';
import classes from './style.module.css';

const callImage = dosageForm => {
  let medIcon = tablet;
    switch (dosageForm) {
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
    <img className={classes.medIcon} src={medIcon} alt='medicine icon' />
  );
}

const MedicineBasicSearch = ({ results }) => (
  
  results.map(({ dosageForm, name, sep: price, nappi_code }) => (
    <div className={classes.container} key={nappi_code}>
      <div className={classes.innerContainerLeft}>
        {callImage(dosageForm)}
        <div className={classes.name}>{name}</div>
      </div>
      <div className={classes.innerContainerRight}>
        <div className={classes.price}>{price}</div>
        <div className={classes.generics}>Find Generics</div>
      </div>
    </div>
  ))
);

export default MedicineBasicSearch;
