import React from 'react';

import tablet from '../../../static/images/pill_24.png';
import capsule from '../../../static/images/capsule_24.png';
import syrup from '../../../static/images/syrup_24.png';
import classes from './style.module.css';

const callIcon = (dosageForm) => {
  switch (dosageForm) {
    case ('suspension'): return syrup;
    case ('effervescent tablet'): return tablet;
    case ('tablet'): return tablet;
    case ('capsule'): return capsule;
    default: return tablet;
  }
};

const callImage = (dosageForm) => {
  const medIcon = callIcon(dosageForm);
  return (
    <div className={classes.imageContainerLeft}>
      <img className={classes.medIcon} src={medIcon} alt={dosageForm} />
    </div>
  );
};

const callName = name => (
  <div className={classes.name}>{name}</div>
);

const callPriceAndGenerics = price => (
  <div className={classes.farRightContainer}>
    <div className={classes.price}>{price}</div>
    <div className={classes.generics}>Find Generics</div>
  </div>
);

const createMedicinePanel = (props) => {
  const {
    dosage_form: dosageForm,
    name,
    sep: price,
    nappi_code: nappiCode,
  } = props;

  return (
    <div className={classes.container} key={nappiCode}>
      {callImage(dosageForm)}
      <div className={classes.descriptionContainerRight}>
        {callName(name)}
        {callPriceAndGenerics(price)}
      </div>
    </div>
  );
};

const MedicineBasicSearch = ({ results }) => results.map(createMedicinePanel);

export default MedicineBasicSearch;
