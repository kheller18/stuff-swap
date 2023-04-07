import React, { useState, useEffect } from 'react';
import Image from './Image';
// import logo from '../logos/stuff_swap_current.png';
import logo from '../logos/logo_no_text.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCartShopping, faUser } from  '@fortawesome/free-solid-svg-icons';
import { faCircle } from  '@fortawesome/free-regular-svg-icons';
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import Cart from './Cart';
import UserDropdown from './UserDropdown';
import { getUserAddress } from '../utils/web3API';

const Header = props => {
  const [showCart, setShowCart] = useState(false);
  // const [showWallet, setShowWallet] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/');
  };

  const handleClick = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const handleWalletClick = async () => {

    // navigate('/user/wallet');
    const address = await getUserAddress();
    props.setWalletAddress(address);
    console.log(address);
    // const { ethereum } = window;
    // const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    // if (metamaskIsInstalled) {
    //   Web3EthContract.setProvider(ethereum);
    //   let web3 = new Web3(ethereum);
    //   try {
    //     const accounts =  await ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   } catch (err) {
    //     // dispatch(connectFailed("Something went wrong."));
    //   }
    // }

  };

  const handleUserClick = () => {
    showUser ? setShowUser(false) : setShowUser(true);
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <Image className='header-logo' alt="StuffSwap logo" src={logo} onClick={handleNavigateClick} />
        {/* <div>StuffSwap</div> */}
      </div>
      <div className="header-right">
        <FontAwesomeIcon className='header-icon' id='user-icon' icon={faUser} onClick={handleUserClick} />
        <div>
          <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCartShopping} onClick={handleClick}/>
          {/* <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCircle} /> */}

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
