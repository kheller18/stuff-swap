import React from 'react';
import Image from './Image';
// import logo from '../logos/stuff_swap_current.png';
import logo from '../logos/logo_no_text.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCartShopping, faUser } from  '@fortawesome/free-solid-svg-icons';
// import Web3EthContract from 'web3-eth-contract';
// import Web3 from 'web3';
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';


const Header = props => {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/');
  };

  const handleClick = () => {
    props.cartStatus ? props.setCartStatus(false) : props.setCartStatus(true);
  };

  const handleWalletClick = async () => {
    // navigate('/user/wallet')
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts =  await ethereum.request({
        method: "eth_requestAccounts",
      });
      } catch (err) {
        // dispatch(connectFailed("Something went wrong."));
      }
    }

  };

  const handleUserClick = async () => {
    props.userStatus ? props.setUserStatus(false) : props.setUserStatus(true);
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <Image className='header-logo' alt="StuffSwap logo" src={logo} onClick={handleNavigateClick} />
        {/* <div>StuffSwap</div> */}
      </div>
      <div className="header-right">
        <FontAwesomeIcon className='header-icon' id='user-icon' icon={faUser} onClick={handleUserClick} />
        <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCartShopping} onClick={handleClick}/>
        <FontAwesomeIcon className='header-icon' id='wallet-icon' icon={faWallet} onClick={handleWalletClick} />
      </div>

      {/* <div className="header-right">
        <FontAwesomeIcon className='header-icon' id='user-icon' icon={faUser} onClick={handleUserClick} />
        <FontAwesomeIcon className='header-icon' id='cart-icon' icon={faCartShopping} onClick={handleClick}/>
        <FontAwesomeIcon className='header-icon' id='wallet-icon' icon={faWallet} onClick={handleWalletClick} />
      </div> */}
    </div>
  );
};

export default Header;
