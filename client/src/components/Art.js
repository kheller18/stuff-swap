import React, { useState } from 'react';
import Image from './Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import '../styles/Art.css';

const Art = props => {
  const location = useLocation();
  const [art, setArt] = useState(location.state);

  // function to add nft to cart
  const handleClick = () => {
    props.setContent([...props.content, art])
  }

  return (
    <div className='art-container'>
      <div className='art-body'>
        <div className='art-body-left'>
          <div className='art-card-img-container'>
            <FontAwesomeIcon className='chain-symbol' icon={faEthereum} />
            <Image className='art-card-img' src={`https://ipfs.io/ipfs/${art.ipfs_pin_hash}`} />
          </div>
        </div>
        <div className='art-body-right'>
          <div className='art-card-details'>
            <div className='art-card-detail'>{art.metadata.name}</div>
            <div className='art-card-detail'>Owned by {art.metadata.keyvalues.address}</div>
            <div className='art-card-detail'>This is part of a collection called Bag N Tag</div>
            <div className='art-card-detail'>{art.metadata.keyvalues.price} ETH</div>
          </div>
          <Button className='add-to-cart-art' onClick={handleClick}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Art;
