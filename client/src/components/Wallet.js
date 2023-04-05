import React, { useEffect } from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';

const Wallet = props => {
  useEffect(() => {
    const fetchWallet = async () => {
      const { ethereum } = window;
      const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
      if (metamaskIsInstalled) {
        Web3EthContract.setProvider(ethereum);
        let web3 = new Web3(ethereum);
        try {
          const accounts =  await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts);
        } catch (err) {
          // dispatch(connectFailed("Something went wrong."));
        }
      }
    }
    
    fetchWallet();

  }, []);

  return (
    <div className='wallet-container'>
      <div className='wallet-header'>

      </div>
      <div className='wallet-body'>

      </div>
      <div className='wallet-footer'>

      </div>
    </div>
  );
};

export default Wallet;
