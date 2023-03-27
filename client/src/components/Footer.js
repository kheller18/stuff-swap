import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = props => {

  return (
    <div className='footer-container'>
      <div className='footer-copyright'>
        <FontAwesomeIcon className='footer-copyright-symbol' icon={faCopyright} />
        <p>StuffSwap 2023</p>
      </div>
    </div>
  );
};

export default Footer;
