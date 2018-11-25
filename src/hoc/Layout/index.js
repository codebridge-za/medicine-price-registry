import React from 'react';
import Header from '../../components/header';
import LowerLayout from '../../components/LowerLayout';

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {props.children}
      </main>
      <LowerLayout />
    </React.Fragment>
  );
}

export default Layout;
