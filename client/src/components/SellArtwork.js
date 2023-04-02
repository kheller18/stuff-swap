import React from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import bagtag from '../logos/bag_n_tag.png';
import '../styles/SellArtwork.css';


const SellArtwork = props => {

  return (
    <div className='sell-artwork-container'>
      <div className='sell-artwork-header'>
        <h2 className='sell-artwork-title'>My Artwork</h2>
      </div>
      <div className='sell-artwork-items'>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
          <Button className='sell-art-btn'>List Item</Button>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
        <div className='sell-artwork-item-card'>
          <div className='sell-artwork-item-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='sell-artwork-item-card-img' src={bagtag} />
          </div>
          <div className='card-details'>
            <div className='card-detail'>Bag N Tag #1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellArtwork;
