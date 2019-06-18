import React from 'react';
import t from 'prop-types';

import { CircularProgress } from '@material-ui/core';

const Spinner = ({ size, thickness }) => (
  <CircularProgress {...{ size, thickness }} />
);

export default Spinner;

Spinner.propTypes = {
  size: t.number.isRequired,
  thickness: t.number.isRequired,
};
