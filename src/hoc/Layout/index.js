import React from 'react';
import Header from '../../components/header';
import LowerLayout from '../../components/LowerLayout';
import classes from './style.module.css';
import '../../styles.module.css';

const Layout = props => {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        {props.children}
      </main>
      <LowerLayout />
    </div>
  );
}

export default Layout;
