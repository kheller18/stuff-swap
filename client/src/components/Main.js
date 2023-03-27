import React, { useState } from 'react';
import Carousel from './Carousel';
import '../styles/Main.css';
import Trending from './Trending';


const Main = props => {
  const [category, setCategory] = useState('All');

  return (
    <div className='main-container'>
      <ul className='main-header'>
        <li value='All' className={category === 'All' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("All")}>All</li>
        <li value='Accessories' className={category === 'Accessories' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("Accessories")}>Accessories</li>
        <li value='Apparel' className={category === 'Apparel' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("Apparel")}>Apparel</li>
        <li value='Art' className={category === 'Art' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory("Art")}>Art</li>
      </ul>
      <Carousel />
      <Trending />
    </div>
  );
};

export default Main;
