import React from 'react';
import {
  Link,
} from 'react-router-dom';

import './styles.scss';
import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';
import contact from 'src/assets/images/contact.png';

const Footer = () => (

  <div className="footer">
    <a
      href="http://www.github.com/mibmae"
      target="_blank"
      rel="noreferrer"
    > <img src={github} className="menu_logo_footer" alt="" />
    </a>
    <a
      href="https://www.linkedin.com/in/guilhem-moes/"
      target="_blank"
      rel="noreferrer"
    > <img src={linkedin} className="menu_logo_footer" alt="" />
    </a>
    <Link
      to="/contact"
    > <img src={contact} className="menu_logo_footer" alt="" />
    </Link>
  </div>

);

export default Footer;
