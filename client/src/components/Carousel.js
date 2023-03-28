import React from 'react';
import { BrowserRouter, Switch, Redirect, Route  } from 'react-router-dom';
import Image from './Image';
import logo from '../logos/bag_n_tag.png';
import '../styles/Carousel.css';

const Carousel = props => {

  const handleClick = e => {
    console.log(e);
    return <Redirect to='/collection' />;
  }

  return (
    <div className='carousel-container'>
      <div className='carousel-body'>
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} onClick={(e => handleClick(e))} />
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} />
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} />
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} />
      </div>
    </div>
  );
};

export default Carousel;