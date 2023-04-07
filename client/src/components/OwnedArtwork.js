import React, { useState, useEffect } from 'react';
import Image from './Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import { getUserFilesPinata } from '../utils/pinataAPI';
import '../styles/OwnedArtwork.css';


const OwnedArtwork = props => {
  const [myArt, setMyArt] = useState([]);

  // waits for component to mount and then queries to get artwork owned by user
  useEffect(() => {
    const getUserArtwork = async () => {
      const { ethereum } = window;
      let accounts;

      try {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (err) {
      }
      // gets files from pinata
      const artwork = await getUserFilesPinata(accounts[0]);
      setMyArt(artwork.rows);
    }

    getUserArtwork();
  }, [])

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
        </div>
      : 'You do not own any artwork!'
      }
    </div>
  );
};

export default OwnedArtwork;
