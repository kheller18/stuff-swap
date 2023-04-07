import React from 'react';
import Image from './Image';
import logo2 from '../logos/bag_n_tag_dark_current.png';
import bagtag from '../logos/bag_n_tag.png';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import '../styles/ShopCollections.css';

// component for shopping for a specific collection
const ShopCollections = props => {

  return (
    <div className='shop-collection-container'>
      <div className='shop-collection-header'>
        <div className='shop-collection-background-img'>
          <Image className='shop-collection-logo' src={logo2} />
        </div>
      </div>
      <div className='shop-collection-subheader'>
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
        <div className='shop-collection-filter'>
          <ul className='filter-items'>
            <li className='filter-item'>Price low to high</li>
            <li className='filter-item'>Price high to low</li>
            <li className='filter-item'>Recently listed</li>
          </ul>
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
