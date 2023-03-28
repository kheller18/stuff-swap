import React, { useState } from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

const Footer = props => {
  const [email, setEmail] = useState('');

  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <h1 className='footer-section-header'>Stay Connected</h1>
          <p className='footer-section-subheader'>Stay up to date by joining our mail list!</p>
          <input className='email-input' placeholder='youremail@domain.com' value={email} onChange={e => setEmail(e.target.value)} />
          <Button className='footer-signup-btn'>Sign up</Button>
        </div>
        <div className='footer-top-right'>
          <h1 className='footer-section-header'>Join the Community</h1>
          <div className='footer-icons'>
            <FontAwesomeIcon className='footer-icon' id='twitter' icon={faTwitter} />
            <FontAwesomeIcon className='footer-icon' id='twitter' icon={faInstagram} />
            <FontAwesomeIcon className='footer-icon' id='twitter' icon={faDiscord} />
          </div>
        </div>
      </div>
      <div className='footer-bottom'></div>
      <div className='footer-copyright'>
        <FontAwesomeIcon className='footer-copyright-symbol' icon={faCopyright} />
        <p>StuffSwap 2023</p>
      </div>
    </div>
  );
};

export default Footer;
