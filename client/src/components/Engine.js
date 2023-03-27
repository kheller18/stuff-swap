import React from 'react';
import Landing from './Landing';
import Main from './Main';
import ShopCollections from './ShopCollections';

const Engine = props => {

  return (
    <div className='engine-container'>
      {/* <Main /> */}
      <ShopCollections />
    </div>
  );
};

export default Engine;
