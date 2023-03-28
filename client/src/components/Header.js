import React from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap_current.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCartShopping, faUser } from  '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <Image className='header-logo' alt="StuffSwap logo" src={logo} onClick={handleClick} />
      </div>
      <div className="header-right">
        <FontAwesomeIcon className='header-icon' id='user-icon' icon={faUser} />
        <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCartShopping} />
        <FontAwesomeIcon className='header-icon' id='wallet-icon' icon={faWallet} />
      </div>
    </div>
  );
};

export default Header;
