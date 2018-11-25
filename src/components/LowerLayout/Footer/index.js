import React from 'react';
import openUpLogo from '../../../images/OpenUp-logo.png'

import global from '../../../styles.module.css';
import classes from './style.module.css';

const Footer = () => {
  return (
    <div>
      <div className={global.containerWithUnderline}>
        <img className={classes.logo} src={openUpLogo} alt=""/>
      </div>
      <div className={global.container}>
        <div className={classes.collectionDateAndContact}>
          <p>These prices were collected on 2018-10-15</p>
          <p>Contact <a href="mailto:adi@openup.org.za">adi@openup.org.za</a> for more details</p>
        </div>
        <div className={classes.sponsor}>
          <p>
            <a href="https://mpr.netlify.com/" target="_blank" rel="noopener noreferrer">MPR</a> is powered by 
            <a href="https://openup.org.za/" target="_blank" rel="noopener noreferrer">OpenUp</a>.
          </p>
          <p>
            <a href="https://github.com/codebridge-za/medicine-price-registry" target="_blank" rel="noopener noreferrer">Pull requests are welcome
            </a>
          </p>
          <p>Thanks to <a href="http://onlinepharmacycheck.com/medico/" target="_blank" rel="noopener noreferrer">MedICO</a> for the cool icons.</p>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
