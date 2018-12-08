import React from 'react';

import tablet from '../../../static/images/pill_24.png';
import capsule from '../../../static/images/capsule_24.png';
import syrup from '../../../static/images/syrup_24.png';
import classes from './style.module.css';

const MedicineBasicSearch = props => {
  let medIcon = tablet;
  switch (props.dosageForm) {
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
    <div className={classes.container}>
      <div className={classes.innerContainerLeft}>
        <img className={classes.medIcon} src={medIcon} alt='medicine icon' />
        <div className={classes.name}>medicine name</div>
      </div>
      <div className={classes.innerContainerRight}>
        <div className={classes.price}>R price</div>
        <div className={classes.generics}>Find Generics</div>
      </div>
    </div>
  );
}

export default MedicineBasicSearch;
