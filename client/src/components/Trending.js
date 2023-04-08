import React, { useState } from 'react';
import CollectionsTable from './CollectionsTable';
import ArtTable from './ArtTable';
import '../styles/Trending.css';

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
