import React from 'react';
import openUpLogo from '../../../images/OpenUp-logo.png';

import classes from './style.module.css';

const Logo = (
  <div className={classes.logoContainer}>
    <img className={classes.logo} src={openUpLogo} alt="Logo of OpenUp" />
  </div>
);

const contacts = (
  <div className={classes.collectionDateAndContact}>
    <p className={classes.paragraph}>These prices were collected on 2018-10-15</p>
    <p className={classes.paragraph}>Contact <a className={classes.link} href="mailto:adi@openup.org.za">adi@openup.org.za</a> for more details</p>
  </div>
);

const disclaimers = (
  <div className={classes.sponsor}>
    <p>
      <a className={classes.link} href="https://mpr.netlify.com/" target="_blank" rel="noopener noreferrer">MPR</a> is powered by%
      <a className={classes.link} href="https://openup.org.za/" target="_blank" rel="noopener noreferrer"> OpenUp</a>.
    </p>
    <p className={classes.paragraph}>
      <a className={classes.link} href="https://github.com/codebridge-za/medicine-price-registry" target="_blank" rel="noopener noreferrer">Pull requests are welcome
      </a>
    </p>
    <p className={classes.paragraph}>Thanks to <a className={classes.link} href="http://onlinepharmacycheck.com/medico/" target="_blank" rel="noopener noreferrer">MedICO</a> for the cool icons.</p>
  </div>
);

const Footer = () => (
  <div>
    {Logo}
    <div>
      {contacts}
      {disclaimers}
    </div>
  </div>
);

export default Footer;
