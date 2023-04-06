import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import logo from '../logos/bag_n_tag.png';
import '../styles/Carousel.css';

const Carousel = props => {
  const navigate = useNavigate();
  console.log(props.content);
  const handleClick = e => {
    navigate('/collection'); // handles redirect from click
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-body'>
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} onClick={(e => handleClick(e))} />
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} onClick={(e => handleClick(e))} />
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} onClick={(e => handleClick(e))} />
        <Image className='carousel-img bagtag-logo' alt="Bag N Tag logo" src={logo} onClick={(e => handleClick(e))} />
      </div>
    </div>
  );
};

export default Carousel;
