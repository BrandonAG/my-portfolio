import React, { useState } from 'react';
import gitHubLogo from '../../assets/logos/GitHub_Logo.png';
import linkedInLogo from '../../assets/logos/LI-Logo.png';
import 'materialize-css';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {

  return (
    <section>
      <h1 data-testid="h1tag">Connect with me</h1>
      <a href="https://www.linkedin.com/in/brandon-arnst-goodrich" target="_blank"><img src={linkedInLogo} className="logo" alt="LinkedIn Logo" /></a>
      <a href="https://github.com/BrandonAG" target="_blank"><img src={gitHubLogo} className="my-2, logo" alt="GitHub Logo" /></a>
    </section>
  );
}

export default ContactForm;
