import React, { useState } from 'react';
import Image from './Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from  '@fortawesome/free-brands-svg-icons';
import '../styles/Art.css';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Art = props => {
  // console.log(props);

  const location = useLocation();
  const [art, setArt] = useState(location.state);
  // console.log(location.state)
  const handleClick = () => {
    console.log('yo')
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
            <div className='art-card-detail'>Owned by {art.metadata.keyvalues.owner}</div>
            <div className='art-card-detail'>{art.metadata.keyvalues.price} ETH</div>
          </div>
          <Button className='add-to-cart' onClick={handleClick}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Art;
