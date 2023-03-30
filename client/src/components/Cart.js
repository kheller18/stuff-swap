import React, { useState } from 'react';
import Image from './Image';
import Button from './Button';
import logo from '../logos/stuff_swap.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash } from  '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.css';

const Cart = props => {
  const [cartTotal, setCartTotal] = useState('0');

  const handleCartStatus = () => {
    props.setCartStatus(false);
  };

  return (
    <div className='cart'>
      <div className='cart-container'>
        <div className='cart-header'>
          <div className='cart-header-left'>
            <h2>Your Cart</h2>
          </div>
          <div className='cart-header-right'>
            <FontAwesomeIcon className='close-cart' icon={faXmark} onClick={handleCartStatus} />
          </div>
        </div>
        <div className='cart-body'>
          <div className='cart-body-header'>
            <div className='cart-body-header-left'>3 items</div>
            <div className='cart-body-header-right'>Clear all</div>
          </div>
          <div className='cart-body-items'>
            <div className='cart-body-item'>
              <div className='cart-body-item-details'>
                <div className='cart-body-image'>
                  <Image className='cart-image' alt='' src={logo} />
                </div>
                <div className='cart-item-contents'>
                  <p className='cart-item-name'>Bag N Tag #1</p>
                  <p className='cart-item-creator'>Audell Sabeti</p>
                  <p className='cart-item-creator-earnings'>Creator earnings: 5%</p>
                </div>
                <div className='cart-item-price'>0.20 ETH</div>
                <div className='cart-item-remove'>
                  <FontAwesomeIcon className='close-cart' icon={faTrash} />
                </div>
              </div>
            </div>
            <div className='cart-body-item'>
              <div className='cart-body-item-details'>
                <div className='cart-body-image'>
                  <Image className='cart-image' alt='' src={logo} />
                </div>
                <div className='cart-item-contents'>
                  <p className='cart-item-name'>Bag N Tag #1</p>
                  <p className='cart-item-creator'>Audell Sabeti</p>
                  <p className='cart-item-creator-earnings'>Creator earnings: 5%</p>
                </div>
                <div className='cart-item-price'>0.20 ETH</div>
              </div>
            </div>
            <div className='cart-body-item'>
              <div className='cart-body-item-details'>
                <div className='cart-body-image'>
                  <Image className='cart-image' alt='' src={logo} />
                </div>
                <div className='cart-item-contents'>
                  <p className='cart-item-name'>Bag N Tag #1</p>
                  <p className='cart-item-creator'>Audell Sabeti</p>
                  <p className='cart-item-creator-earnings'>Creator earnings: 5%</p>
                </div>
                <div className='cart-item-price'>0.20 ETH</div>
              </div>
            </div>
          </div>
        </div>
        <div className='cart-footer'>
          <div className='cart-footer-top'>
            <div className='cart-footer-price-label'>Total price</div>
            <div className='cart-footer-price-eth'>{cartTotal} ETH</div>
          </div>
          <div className='cart-footer-price-usd'>{cartTotal} USD</div>
          <Button className='purchase-btn'>Complete Purchase</Button>
        </div>
      </div>

    </div>
  );
};

export default Cart;
