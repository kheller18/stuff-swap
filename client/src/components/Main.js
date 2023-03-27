import React, { useState } from 'react';
import '../styles/Main.css';
import Carousel from './Carousel';

const Main = props => {
  const [category, setCategory] = useState('All');
  console.log(category)
  return (
    <div className='main-container'>
      <ul className='main-header'>
        <li value='All' className={category === 'All' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory(e.target.value)}>All</li>
        <li value='Accessories' className={category === 'Accessories' ? 'header-item-active' : 'header-item'} onClick={(e) => {console.log(e)}}>Accessories</li>
        <li value='Apparel' className={category === 'Apparel' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory(e.target.value)}>Apparel</li>
        <li value='Art' className={category === 'Art' ? 'header-item-active' : 'header-item'} onClick={(e) => setCategory(e.target.value)}>Art</li>
      </ul>
      <Carousel />
    </div>
  );
};

export default Main;
