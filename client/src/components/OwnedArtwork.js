import React, { useState, useEffect } from 'react';
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
  const [myArt, setMyArt] = useState([]);

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
      setMyArt(artwork.rows);
    }
    getUserArtwork();
  }, [])
  console.log(myArt)
  return (
    <div className='owned-artwork-container'>
      <div className='owned-artwork-header'>
        <h2 className='owned-artwork-title'>My Artwork</h2>
      </div>
      {(myArt.length > 0) ?
        <div className='owned-artwork-items'>
          {myArt.map(art => {
            return (
              <div className='owned-artwork-item-card'>
                <div className='owned-artwork-item-card-img-container'>
                  <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
                  <Image className='owned-artwork-item-card-img' src={`https://ipfs.io/ipfs/${art.ipfs_pin_hash}`} />
                </div>
                <div className='owned-card-details'>
                  <div className='card-detail'>{art.metadata.name}</div>
                </div>
              </div>
            )
          })}
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
      : ''
      }
    </div>
  );
};

export default OwnedArtwork;


