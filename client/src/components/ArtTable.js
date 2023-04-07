import React from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import Image from './Image';
import logo from '../logos/bag_n_tag.png';
import '../styles/CollectionsTable.css';
import ShopCollections from './ShopCollections';

const ArtTable = props => {
  let navigate = useNavigate();

  const handleClick = (e, art) => {
    navigate('/artwork/item', {state: art}); // handles redirect from click
  };

  console.log(props.content)

  return (
    <div className='collections-table-container'>
      <table className='collections-table-left'>
        <thead className='collections-table-headers'>
          <tr>
            <th className='collections-table-header' id='rank'>Rank</th>
            <th className='collections-table-header' id='collection'>NFT</th>
            <th className='collections-table-header' id='floor-price'>Price</th>
            <th className='collections-table-header' id='volume'>Volume</th>
          </tr>
        </thead>
        <tbody>
          {props.content.map((art, index) => {

            return (
              <tr onClick={e => handleClick(e, art)} className='collection'>
                <td className='collection-rank'>{index + 1}</td>
                <td className='collection-item'>
                  <Image className='collection-image' src={`https://ipfs.io/ipfs/${art.ipfs_pin_hash}`} />
                  <p className='collection-name'>{art.metadata.name}</p>
                </td>
                <td className='collection-item-floor-price'>{art.metadata.keyvalues.price} ETH</td>
                <td className='collection-item-volume'>{index} ETH</td>
              </tr>
            )
          })}
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
        <tr onClick={e => handleClick(e)} className='collection'>
            <td className='collection-rank'>6</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr onClick={e => handleClick(e)} className='collection'>
            <td className='collection-rank'>7</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr onClick={e => handleClick(e)} className='collection'>
            <td className='collection-rank'>8</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr onClick={e => handleClick(e)} className='collection'>
            <td className='collection-rank'>9</td>
            <td className='collection-item'>
              <Image className='collection-image' src={logo} />
              <p className='collection-name'>Bag N Tag</p>
            </td>
            <td className='collection-item-floor-price'>0.10 ETH</td>
            <td className='collection-item-volume'>25 ETH</td>
          </tr>
          <tr onClick={e => handleClick(e)} className='collection'>
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

export default ArtTable;
