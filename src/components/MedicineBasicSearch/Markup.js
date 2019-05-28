import React from 'react';
import t from 'prop-types';

import { CardContent, CardActions, Collapse } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DetailsPanel from '../DetailsPanel';

import tablet from '../../../static/images/pill_24.png';
import capsule from '../../../static/images/capsule_24.png';
import syrup from '../../../static/images/syrup_24.png';

import {
  CardStyled,
  Title,
  // IconButtonStyled,
  Price,
  ButtonStyled,
} from './styled';

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


const callName = (name, nappiCode, fetchDetails) => (
  <React.Fragment>
    <Title
      variant="body2"
      color="textSecondary"
      component="div"
      onClick={() => fetchDetails(nappiCode)}
    >
      {name}
    </Title>

    {/* <button
      className={classes.name}
      onClick={() => fetchDetails(nappiCode)}
      type="button"
    >
      {name}
    </button> */}
  </React.Fragment>
);

const callPriceAndGenerics = (price, nappiCode, fetchGenerics) => (
  <div className={classes.farRightContainer}>
    <Price component="div">{price}</Price>
    {/* <div className={classes.price}>{price}</div> */}
    <CardActions>
      <ButtonStyled
        size="small"
        color="primary"
        onClick={() => fetchGenerics(nappiCode)}
      >
        Find Generics
      </ButtonStyled>
    </CardActions>
    {/* <button
      className={classes.generics}
      onClick={() => fetchGenerics(nappiCode)}
      type="button"
    >
      Find Generics
    </button> */}
  </div>
);

const createMedicinePanel = (fetchGenerics, details, fetchDetails, expanded) => (props) => {
  const {
    dosage_form: dosageForm,
    name,
    sep: price,
    nappi_code: nappiCode,
  } = props;
  
  return (
    <React.Fragment>



      <CardStyled key={nappiCode}>
        <CardContent>
        <div className={classes.container}>
          {callImage(dosageForm)}
          <div className={classes.descriptionContainerRight}>
            {callName(name, nappiCode, fetchDetails)}
            {callPriceAndGenerics(price, nappiCode, fetchGenerics)}
          </div>
        </div>
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButtonStyled
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButtonStyled>
        </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div>
              {nappiCode === details.nappi_code && <DetailsPanel details={details} />}
            </div>
          </CardContent>
        </Collapse>
      </CardStyled>


      {/* <div key={nappiCode}>
        <div className={classes.container}>
          {callImage(dosageForm)}
          <div className={classes.descriptionContainerRight}>
            {callName(name, nappiCode, fetchDetails)}
            {callPriceAndGenerics(price, nappiCode, fetchGenerics)}
          </div>
        </div>
        {nappiCode === details.nappi_code && <DetailsPanel details={details} />}
      </div> */}
    </React.Fragment>
  );
};

const Markup = ({
  results,
  details,
  fetchGenerics,
  fetchDetails,
  expanded,
}) => (
  <React.Fragment>
    {results.map(createMedicinePanel(fetchGenerics, details, fetchDetails, expanded))}
  </React.Fragment>
);

export default Markup;

Markup.propTypes = {
  results: t.arrayOf(t.shape({
    dosage_form: t.string,
    name: t.string,
    sep: t.string,
    nappi_code: t.string,
  })).isRequired,
};

Markup.defaultProps = {
  results: [],
};
