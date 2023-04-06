import React, { useEffect } from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import bagtag from '../logos/bag_n_tag.png';
import { getArtwork } from '../utils/web3API';
import { getUserFilesPinata } from '../utils/pinataAPI';
import '../styles/OwnedArtwork.css';
import Web3 from 'web3';



const OwnedArtwork = props => {

  useEffect(() => {
    const getUserArtwork = async () => {
      const { ethereum } = window;
      // let web3 = new Web3(ethereum);
      let accounts;

      try {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        // return accounts[0];
      } catch (err) {
        console.log(err)
      }
      const artwork = await getUserFilesPinata(accounts[0]);
      console.log(artwork);
    }
    getUserArtwork();
  }, [])

  return (
    <div className='owned-artwork-container'>
      <div className='owned-artwork-header'>
        <h2 className='owned-artwork-title'>My Artwork</h2>
      </div>
      <div className='owned-artwork-items'>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='owned-card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnedArtwork;


