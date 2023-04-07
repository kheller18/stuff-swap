import React from 'react';
import Image from './Image';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import bagtag from '../logos/bag_n_tag.png';
import '../styles/SellArtwork.css';

// component that lists your nfts and allows you to list them on the marketplace
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
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
            <div className='card-detail'>Purchase Price: 0.2 ETH</div>
            <div className='card-detail'>
              <label className='list-price-label'>List Price:</label>
              <input className='list-price-input' />
              <div className='list-price-currency'>USD</div>
            </div>
          </div>
          <Button className='sell-art-btn'>List Item</Button>
        </div>

      </div>
    </div>
  );
};

export default SellArtwork;
