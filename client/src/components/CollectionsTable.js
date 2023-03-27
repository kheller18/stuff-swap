import React from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import '../styles/CollectionsTable.css';

const CollectionsTable = props => {

  return (
    <div className='collections-table-container'>
      <table className='collections-table'>
        <tr className='collections-table-headers'>
          <th className='collections-table-header' id='collection'>Collection</th>
          <th className='collections-table-header' id='floor-price'>Floor Price</th>
          <th className='collections-table-header' id='volume'>Volume</th>
        </tr>
        <tr className='collection'>

        </tr>
      </table>
    </div>
  );
};

export default CollectionsTable;
