import React from 'react';
import Image from './Image';
import logo from '../logos/bag_n_tag.png';
import '../styles/Carousel.css';

const Carousel = props => {

  return (
    <div className='carousel-container'>
      <div className='carousel-body'>
        <Image className='bagtag-logo' alt="Bag N Tag logo" src={logo} />
      </div>
    </div>
  );
};

export default Carousel;