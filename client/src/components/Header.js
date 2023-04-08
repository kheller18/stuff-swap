import React, { useState } from 'react';
import Image from './Image';
import logo from '../logos/logo_no_text.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCartShopping, faUser } from  '@fortawesome/free-solid-svg-icons';
// import { faCircle } from  '@fortawesome/free-regular-svg-icons';
import Cart from './Cart';
import UserDropdown from './UserDropdown';
import { getUserAddress } from '../utils/web3API';
import '../styles/Header.css';

const Header = props => {
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/');
  };

  // handles when user clicks cart
  const handleClick = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  // handles when user clicks wallet
  const handleWalletClick = async () => {
    const address = await getUserAddress();
    props.setWalletAddress(address);
  };

  // handles when user clicks icon
  const handleUserClick = () => {
    showUser ? setShowUser(false) : setShowUser(true);
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <Image className='header-logo' alt="StuffSwap logo" src={logo} onClick={handleNavigateClick} />
      </div>
      <div className="header-right">
        <FontAwesomeIcon className='header-icon' id='user-icon' icon={faUser} onClick={handleUserClick} />
        <div>
          <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCartShopping} onClick={handleClick}/>
        </div>
        <FontAwesomeIcon className='header-icon' id='wallet-icon' icon={faWallet} onClick={handleWalletClick} />
      </div>
      {showUser ?
        <UserDropdown showUser={showUser} setShowUser={setShowUser} />
      : null
      }
      {showCart ?
        <Cart content={props.content} setContent={props.setContent} showCart={showCart} setCartStatus={setShowCart} />
      : null
      }
    </div>
  );
};

export default Header;
