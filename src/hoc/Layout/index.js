import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../../components/Header';
import LowerLayout from '../../components/LowerLayout';
import classes from './style.module.css';
import '../../styles.module.css';

const Layout = ({ children }) => (
  <div className={classes.container}>
    <Header />
    <main>
      {children}
    </main>
    <LowerLayout />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
