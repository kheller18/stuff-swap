import React, { useState } from 'react';
import '../styles/Main.css';
import Carousel from './Carousel';

const Main = props => {
  // const [category, setCategory] = useState('Trending');

  return (
    <div className='main-container'>
      <ul className='main-header'>
        <li className='header-item'>Trending</li>
        <li className='header-item'>Accessories</li>
        <li className='header-item'>Apparel</li>
        <li className='header-item'>Art</li>
      </ul>
      <Carousel />
    </div>
  );
};

export default Main;
