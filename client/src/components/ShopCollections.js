import React from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import bagtag from '../logos/bag_n_tag.png';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import '../styles/ShopCollections.css';

const ShopCollections = props => {

  return (
    <div className='shop-collection-container'>
      <div className='shop-collection-header'>
        <div className='shop-collection-background-img'>
          <Image className='shop-collection-logo' src={logo} />
        </div>
      </div>
      <div className='shop-collection-body'>
        <div className='collection-name'>Bag N Tag</div>
        <div className='collection-creator'>By Audell Sabeti</div>
        <div className='collection-info'>
          <p>Items 10 |</p>
          <p>Created Mar 2023 |</p>
          <p>Creator earnings 5% |</p>
          <p>Chain Etherium |</p>
          <p>Category Accessories</p>
        </div>
        <div className='collection-description'>
          Bag N Tag is a collection comprised of unique duffle bags.
        </div>
        <div className='shop-collection-items'>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
          <div className='collection-item-card'>
            <div className='collection-item-card-img-container'>
              <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
              <Image className='collection-item-card-img' src={bagtag} />
            </div>
            <div className='card-details'>
              <div className='card-detail'>Bag N Tag #1</div>
              <div className='card-detail'>0.1 ETH</div>
            </div>
            <Button className='add-to-cart'>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollections;
