import React from 'react';
import Image from './Image';
// import logo from '../logos/stuff_swap_current.png';
import logo from '../logos/logo_no_text.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCartShopping, faUser } from  '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/');
  };

  const handleClick = () => {
    props.cartStatus ? props.setCartStatus(false) : props.setCartStatus(true);
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <Image className='header-logo' alt="StuffSwap logo" src={logo} onClick={handleNavigateClick} />
        {/* <div>StuffSwap</div> */}
      </div>
      <div className="header-right">
        <FontAwesomeIcon className='header-icon' id='user-icon' icon={faUser} />
        <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCartShopping} onClick={handleClick}/>
        <FontAwesomeIcon className='header-icon' id='wallet-icon' icon={faWallet} />
      </div>
    </div>
  );
};

export default Header;
