import React from 'react';
import Helmet from 'react-helmet';

import global from '../../styles.module.css';
import classes from './style.module.css';


const Header = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>MPR (Medicine Price Registry) - OpenUp</title>
      </Helmet>
      <div className={global.containerWithUnderline}>
        <h1 className={classes.header}>What should your medicines cost?</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;
