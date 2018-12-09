import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.module.css';

const createList = listContainer => listContainer.map(({ list }) => (
  <ul key={list}>
    <li>{list}</li>
  </ul>
));

const createLink = additionalInfo => additionalInfo.map(({ link }) => {
  if (!link) {
    return null;
  }

  return (
    <a
      className={classes.link}
      key={link}
      href="https://search.opengazettes.org.za/text/25860?page=31"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  );
});

const createAdditionalInfo = additionalInfo => additionalInfo.map(({ info, link }) => (
  <p key={info}>
    {info}
    {link && createLink(additionalInfo)}
  </p>
));

const createDetails = details => details.map((detailsContent) => {
  const {
    heading,
    firstParagraph,
    lists: listContainer,
    additionalInfo,
  } = detailsContent;

  return (
    <div key={heading}>
      <h3 className={classes.heading}>{heading}</h3>
      <div className={classes.content}>
        <p>{firstParagraph}</p>
        {createList(listContainer)}
        {additionalInfo && createAdditionalInfo(additionalInfo)}
      </div>
    </div>
  );
});

const GeneralInfo = ({ copy }) => {
  const { details } = copy;
  return (
    <div className={classes.container}>
      {createDetails(details)}
    </div>
  );
};

const listsSchema = PropTypes.arrayOf(
  PropTypes.shape({
    list: PropTypes.string,
  }),
);

const additionalInfoSchema = PropTypes.arrayOf(
  PropTypes.shape({
    info: PropTypes.string,
    link: PropTypes.string,
  }),
);

GeneralInfo.propTypes = {
  copy: PropTypes.shape({
    details: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string,
        firstParagraph: PropTypes.string,
        lists: listsSchema,
        additionalInfo: additionalInfoSchema,
      }),
    ),
  }).isRequired,
};

export default GeneralInfo;
