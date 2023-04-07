import React, { useState, useEffect } from 'react';
import Image from './Image';
import Button from './Button';
import logo from '../logos/stuff_swap.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash } from  '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.css';
import { transferArtwork } from '../utils/web3API';


const Cart = props => {
  const [cartTotal, setCartTotal] = useState('0');

  // sets whether to show cart or not
  const handleCartStatus = () => {
    props.setCartStatus(false);
  };

  // handles clearing the cart when "clear all" is clicked
  const handleClick = () => {
    props.setContent([]);
  }

  // function to call web3 API when user wants to purchase and NFT
  const handlePurchase = async () => {
    await transferArtwork(props.content[0], props.walletAddress);
    props.setContent([]);
  }

  useEffect(() => {

  }, []);

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
      {props.content.length > 0 ?
        <div>
          <div className='cart-body'>
            <div className='cart-body-header'>
              <div className='cart-body-header-left'>{props.content.length} items</div>
              <div className='cart-body-header-right' onClick={handleClick}>Clear all</div>
            </div>
            <div className='cart-body-items'>
              {props.content.map(item => {
                return (
                  <div className='cart-body-item'>
                    <div className='cart-body-item-details'>
                      <div className='cart-body-image'>
                        <Image className='cart-image' alt='' src={`https://ipfs.io/ipfs/${item.ipfs_pin_hash}`} />
                      </div>
                      <div className='cart-item-contents'>
                        <p className='cart-item-name'>{item.metadata.name}</p>
                        <p className='cart-item-creator'>{item.metadata.keyvalues.artist}</p>
                        <p className='cart-item-creator-earnings'>Creator earnings: 5%</p>
                      </div>
                      <div className='cart-item-price'>{item.metadata.keyvalues.price} ETH</div>
                      <div className='cart-item-remove'>
                        <FontAwesomeIcon className='close-cart' icon={faTrash} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='cart-footer'>
            <div className='cart-footer-top'>
              <div className='cart-footer-price-label'>Total price</div>
              <div className='cart-footer-price-eth'>{cartTotal} ETH</div>
            </div>
            <div className='cart-footer-price-usd'>{cartTotal} USD</div>
            <Button className='purchase-btn' onClick={handlePurchase}>Complete Purchase</Button>
          </div>
        </div>
        : 'Your Cart is empty!'
        }
      </div>
    </div>
  );
};

export default Cart;
