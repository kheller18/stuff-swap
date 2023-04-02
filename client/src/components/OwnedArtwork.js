import React from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import bagtag from '../logos/bag_n_tag.png';
import '../styles/OwnedArtwork.css';


const OwnedArtwork = props => {

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
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='owned-artwork-item-card'>
          <div className='owned-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='owned-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnedArtwork;


