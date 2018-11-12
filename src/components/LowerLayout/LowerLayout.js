import React from 'react';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import Footer from './Footer/Footer';

import aboutCopy from '../../data/LowerLayout/aboutCopy';
import usageCopy from '../../data/LowerLayout/usageCopy';
import priceCopy from '../../data/LowerLayout/priceCopy';

const LowerLayout = () => {
  return (
    <div>
      <GeneralInfo copy={aboutCopy} />
      <GeneralInfo copy={usageCopy} />
      <GeneralInfo copy={priceCopy} />
      <Footer />
    </div>
  );
}

export default LowerLayout;
