import React from 'react';
import Helmet from 'react-helmet';

import classes from './style.module.css';


const Header = () => (
  <React.Fragment>
    <Helmet>
      <title>MPR (Medicine Price Registry) - OpenUp</title>
    </Helmet>
    <div className={classes.container}>
      <h1 className={classes.header}>What should your medicines cost?</h1>
    </div>
  </React.Fragment>
);

export default Header;
