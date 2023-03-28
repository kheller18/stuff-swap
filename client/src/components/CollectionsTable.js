import React from 'react';
import { BrowserRouter, Switch, Redirect, Route, useNavigate  } from 'react-router-dom';
import Image from './Image';
import logo from '../logos/bag_n_tag.png';
import '../styles/CollectionsTable.css';

const CollectionsTable = props => {
  // let navigate = useNavigate();
  const handleClick = e => {
    console.log(e);
    < Route exact path='/collection' />
    // return Redirect('/collection');
    // return <Redirect
    //   to='/collection' exact
    // />
  }

  return (
    <div className='collections-table-container'>
      <table className='collections-table-left'>
        <thead className='collections-table-headers'>
          <tr>
            <th className='collections-table-header' id='rank'>Rank</th>
            <th className='collections-table-header' id='collection'>Collection</th>
            <th className='collections-table-header' id='floor-price'>Floor Price</th>
            <th className='collections-table-header' id='volume'>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={e => handleClick(e)} className='collection'>
            <td className='collection-rank'>1</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>2</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>3</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>4</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>5</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
        </tbody>
      </table>



      <table className='collections-table-right'>
        <thead className='collections-table-headers'>
          <tr>
            <th className='collections-table-header' id='rank'>Rank</th>
            <th className='collections-table-header' id='collection'>Collection</th>
            <th className='collections-table-header' id='floor-price'>Floor Price</th>
            <th className='collections-table-header' id='volume'>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr className='collection'>
            <td className='collection-rank'>6</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>7</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>8</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>9</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr className='collection'>
            <td className='collection-rank'>10</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default CollectionsTable;
