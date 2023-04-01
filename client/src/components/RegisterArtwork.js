import React, { useState } from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import '../styles/RegisterArtwork.css';
import Button from './Button';

const RegisterArtwork = props => {
  const [collectionObj, setCollectionObj] = useState({
    name: '',
    artistName: '',
    price: '',
    file: ''
  });

  console.log(collectionObj)
  return (
    <div className='register-artwork-container'>
      <div className='register-artwork-form'>
        <div className='register-artwork-form-header'>
          <h1 className='register-form-title'>Register New Artwork</h1>
        </div>
        <div className='register-artwork-form-body'>
          <div className='artwork-form-section'>
            <label className='artwork-label' id='artwork-name-label' htmlFor='name'>Enter the name of the artwork</label>
            <input className='artwork-input' id='artwork-name-input' name='name' value={collectionObj['name']} onChange={(e) => setCollectionObj({...collectionObj, 'name': e.target.value})} />
          </div>
          <div className='artwork-form-section'>
            <label className='artwork-label' id='artwork-artist-label' htmlFor='artistName'>Enter the name of the artist</label>
            <input className='artwork-input' id='artwork-artist-input' name='artistName' value={collectionObj['artistName']} onChange={(e) => setCollectionObj({...collectionObj, 'artistName': e.target.value})} />
          </div>
          <div className='artwork-form-section'>
            <label className='artwork-label' id='artwork-price-label' htmlFor='price'>Enter the listing price (USD)</label>
            <input className='artwork-input' id='artwork-price-input' name='price' value={collectionObj['price']} onChange={(e) => setCollectionObj({...collectionObj, 'price': e.target.value})} />
          </div>
          <div className='artwork-form-section'>
            <input type="file" className='artwork-input' id='artwork-file-input' name='file' value={collectionObj['file']} onChange={(e) => setCollectionObj({...collectionObj, 'file': e.target.value})} />
          </div>
        </div>
        <div className='register-artwork-form-footer'>
          <Button className='register-artwork-button'>Register Artwork</Button>
        </div>

      </div>
    </div>
  );
};

export default RegisterArtwork;
