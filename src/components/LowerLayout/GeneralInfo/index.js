import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
} from '@material-ui/core';

import {
  CardStyled,
  CardContentStyled,
  Heading,
  DividerStyled,
  ContentContainer,
  Text,
  List,
  Link,
} from './styled';

const createList = listContainer => listContainer.map(({ list }) => (
  <ListItem key={list}>
    <List>{list}</List>
  </ListItem>
));

const createLink = additionalInfo => additionalInfo.map(({ link }) => {
  if (!link) {
    return null;
  }

  return (
    <Link
      key={link}
      href="https://search.opengazettes.org.za/text/25860?page=31"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </Link>
  );
});

const createAdditionalInfo = additionalInfo => additionalInfo.map(({ info, link }) => (
  <Text key={info}>
    {info}
    {link && createLink(additionalInfo)}
  </Text>
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
      <Heading>{heading}</Heading>
      <DividerStyled />
      <ContentContainer>
        <Text>{firstParagraph}</Text>
        {createList(listContainer)}
        {additionalInfo && createAdditionalInfo(additionalInfo)}
      </ContentContainer>
    </div>
  );
});

const GeneralInfo = ({ copy }) => {
  const { details } = copy;
  return (
    <CardStyled>
      <CardContentStyled>
        {createDetails(details)}
      </CardContentStyled>
    </CardStyled>
  );
};

export default GeneralInfo;

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
