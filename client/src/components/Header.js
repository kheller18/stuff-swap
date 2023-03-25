import React from "react";
import Image from './Image';
import logo from '../logos/stuff_swap_current.png';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCartShopping, faUser } from  '@fortawesome/free-solid-svg-icons';

const Header = props => {

  return (
    <div className='header-container'>
      <div className='header-left'>
        <Image className='logo' alt="StuffSwap logo" src={logo} />
      </div>
      <div className="header-right">
        <FontAwesomeIcon className='header-icon' id='user-icon' icon={faUser} size='1x' />
        <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCartShopping} />
        <FontAwesomeIcon className='header-icon' id='wallet-icon' icon={faWallet} />
      </div>
    </div>
  );
};

export default Header;
