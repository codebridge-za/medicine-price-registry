import React from 'react';
import GeneralInfo from './GeneralInfo';
import Footer from './Footer';

import aboutCopy from '../../data/LowerLayout/aboutCopy.json';
import usageCopy from '../../data/LowerLayout/usageCopy.json';
import priceCopy from '../../data/LowerLayout/priceCopy.json';

const LowerLayout = () => (
  <div>
    <GeneralInfo copy={aboutCopy} />
    <GeneralInfo copy={usageCopy} />
    <GeneralInfo copy={priceCopy} />
    <Footer />
  </div>
);

export default LowerLayout;
