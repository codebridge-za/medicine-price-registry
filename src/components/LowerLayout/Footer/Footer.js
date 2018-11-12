import React from 'react';
import OpenUpLogo from '../../../images/OpenUp-logo.png'

import global from '../../../styles.module.css';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={global.containerWithUnderline}>
        <img className={classes.logo} src={OpenUpLogo} alt=""/>
      </div>
      <div className={global.container}>
        <div className={classes.CollectionDateAndContact}>
          <p>These prices were collected on 2018-10-15</p>
          <p>Contact <a href="mailto:adi@code4sa.org">adi@code4sa.org</a> for more details</p>
        </div>
        <div className={classes.Sponsor}>
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
