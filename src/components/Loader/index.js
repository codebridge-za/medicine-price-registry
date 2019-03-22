import React from 'react';
import classes from './style.module.css';

const Loader = () => (
  <div className={classes.ldsEllipsis}>
    <div className={classes.ldsEllipsisInner} />
    <div className={classes.ldsEllipsisInner} />
    <div className={classes.ldsEllipsisInner} />
    <div className={classes.ldsEllipsisInner} />
  </div>
);

export default Loader;
