import React from 'react';
import Image from './Image';
import Button from './Button';
import logo from '../logos/stuff_swap.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from  '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.css';

const Cart = props => {

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <div className='cart-header-left'>
          <h2>Your Cart</h2>
        </div>
        <div className='cart-header-right'>
          <FontAwesomeIcon className='close-cart' icon={faXmark} />
        </div>
      </div>
      <div className='cart-body'>
        <div className='cart-body-header'>
          <div className='cart-body-header-left'>
            2 items
          </div>
          <div className='cart-body-header-right'>
            Clear all
          </div>
        </div>
        <div className='cart-body-items'>
          <div className='cart-body-item'>
            <div className='cart-body-item-details'>
              <div className='cart-body-image'>
                <Image className='cart-image' alt='' src={logo} />
              </div>
              <div className='cart-item-contents'>
                <p>Bag N Tag #1</p>
                <p>Audell Sabeti</p>
              </div>
              <div className='cart-item-price'>0.20 ETH</div>
            </div>
          </div>
        </div>
      </div>
      <div className='cart-footer'>
        <div>Total price</div>
        <div>0.20 ETH</div>
      </div>
      <Button className='purchase-btn'>Complete Purchase</Button>
    </div>
  );
};

export default Cart;
