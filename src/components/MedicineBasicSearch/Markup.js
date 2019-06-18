import React from 'react';
import t from 'prop-types';

import { CardActions, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DetailsPanel from '../DetailsPanel';
import Spinner from '../Spinner';

import tablet from '../../../static/images/pill_24.png';
import capsule from '../../../static/images/capsule_24.png';
import syrup from '../../../static/images/syrup_24.png';

import {
  Container,
  CardContentStyled,
  CardActionsStyled,
  ImageContainerLeft,
  MedIcon,
  CardStyled,
  Title,
  FarRightContainer,
  IconButtonStyled,
  Price,
  ButtonStyled,
  DescriptionContainerRight,
  ImageAndNameLeft,
  CardContentCollapse,
} from './styled';

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
    <ImageContainerLeft>
      <MedIcon src={medIcon} alt={dosageForm} />
    </ImageContainerLeft>
  );
};


const callName = (name, nappiCode, fetchDetails) => (
  <Title
    component="div"
    onClick={() => fetchDetails(nappiCode)}
  >
    {name}
  </Title>
);

const callPriceAndGenerics = (price, nappiCode, fetchGenerics) => (
  <FarRightContainer>
    <Price component="div">{price}</Price>
    <CardActions>
      <ButtonStyled
        size="small"
        color="primary"
        onClick={() => fetchGenerics(nappiCode)}
      >
        Find Generics
      </ButtonStyled>
    </CardActions>
  </FarRightContainer>
);

const callSpinner = (loading, nappiCode, details) => {
  if (loading && nappiCode === details.nappi_code) {
    return <Spinner size={30} thickness={2.5} />;
  }
  return null;
};

const callCollapsibleIcon = (expanded, fetchDetails, nappiCode, loading, details) => (
  <CardActionsStyled>
    {callSpinner(loading, nappiCode, details)}
    <IconButtonStyled
      onClick={() => fetchDetails(nappiCode)}
      expanded={nappiCode === details.nappi_code && expanded}
      loading={nappiCode === details.nappi_code && loading}
    >
      <ExpandMoreIcon />
    </IconButtonStyled>
  </CardActionsStyled>
);

const callCollapsibleDetails = (expanded, nappiCode, details, loading) => {
  if (loading) {
    return null;
  }
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContentCollapse>
        <div>
          {nappiCode === details.nappi_code && !loading && <DetailsPanel details={details} />}
        </div>
      </CardContentCollapse>
    </Collapse>
  );
};

const createMedicinePanel = (
  fetchGenerics,
  details,
  fetchDetails,
  expanded,
  loading,
) => (props) => {
  const {
    dosage_form: dosageForm,
    name,
    sep: price,
    nappi_code: nappiCode,
  } = props;

  return (
    <CardStyled key={nappiCode}>
      <CardContentStyled>
        <Container>
          <ImageAndNameLeft>
            {callImage(dosageForm)}
            {callName(name, nappiCode, fetchDetails)}
          </ImageAndNameLeft>
          <DescriptionContainerRight>
            {callPriceAndGenerics(price, nappiCode, fetchGenerics)}
            {callCollapsibleIcon(expanded, fetchDetails, nappiCode, loading, details)}
          </DescriptionContainerRight>
        </Container>
      </CardContentStyled>
      {callCollapsibleDetails(expanded, nappiCode, details, loading)}
    </CardStyled>
  );
};

const Markup = ({
  results,
  details,
  fetchGenerics,
  fetchDetails,
  expanded,
  loading,
}) => results.map(createMedicinePanel(fetchGenerics, details, fetchDetails, expanded, loading));

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
