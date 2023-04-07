import React, { useState } from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import '../styles/Trending.css';
import CollectionsTable from './CollectionsTable';
import ArtTable from './ArtTable';

const Trending = props => {
  const [category, setCategory] = useState('Trending');

  return (
    <div className='category-container'>
      <ul className='category-header'>
        <li value='Trending' className={category === 'Trending' ? 'category-item-active' : 'category-item'} onClick={(e) => setCategory("Trending")}>Trending</li>
        <li value='Hot' className={category === 'Hot' ? 'category-item-active' : 'category-item'} onClick={(e) => setCategory("Hot")}>Hot</li>
      </ul>
      {/* <CollectionsTable content={props.content} /> */}
      <ArtTable content={props.content} />
    </div>
  );
};

export default Trending;
