import React from 'react';
import openUpLogo from '../../../images/OpenUp-logo.png';

import {
  Wrapper,
  LogoContainer,
  Logo,
  CollectionDateAndContact,
  Text,
  Link,
  Sponsor,
} from './styled';

const callLogo = (
  <LogoContainer>
    <Logo src={openUpLogo} alt="Logo of OpenUp" />
  </LogoContainer>
);

const callContacts = (
  <CollectionDateAndContact>
    <Text>These prices were collected on 2018-10-15</Text>
    <Text>Contact <Link href="mailto:adi@openup.org.za">adi@openup.org.za</Link> for more details</Text>
  </CollectionDateAndContact>
);

const callDisclaimers = (
  <Sponsor>
    <Text>
      <Link href="https://mpr.netlify.com/" target="_blank" rel="noopener noreferrer">MPR</Link> is powered by
      <Link href="https://openup.org.za/" target="_blank" rel="noopener noreferrer"> OpenUp</Link>.
    </Text>
    <Text>
      <Link href="https://github.com/codebridge-za/medicine-price-registry" target="_blank" rel="noopener noreferrer">Pull requests are welcome
      </Link>
    </Text>
    <Text>Thanks to <Link href="http://onlinepharmacycheck.com/medico/" target="_blank" rel="noopener noreferrer">MedICO</Link> for the cool icons.</Text>
  </Sponsor>
);

const Footer = () => (
  <Wrapper>
    {callLogo}
    {callContacts}
    {callDisclaimers}
  </Wrapper>
);

export default Footer;
