import React, { useState } from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import '../styles/RegisterArtwork.css';
import Button from './Button';
import { pinFilePinata } from '../utils/pinataAPI';

const RegisterArtwork = props => {
  const [collectionObj, setCollectionObj] = useState({
    name: '',
    artist: '',
    price: '',
    file: ''
  });

  const handleSubmit = () => {
    pinFilePinata(collectionObj);
  }

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
            <label className='artwork-label' id='artwork-artist-label' htmlFor='artist'>Enter the name of the artist</label>
            <input className='artwork-input' id='artwork-artist-input' name='artist' value={collectionObj['artistName']} onChange={(e) => setCollectionObj({...collectionObj, 'artist': e.target.value})} />
          </div>
          <div className='artwork-form-section'>
            <label className='artwork-label' id='artwork-price-label' htmlFor='price'>Enter the listing price (USD)</label>
            <input className='artwork-input' id='artwork-price-input' name='price' value={collectionObj['price']} onChange={(e) => setCollectionObj({...collectionObj, 'price': e.target.value})} />
          </div>
          <div className='artwork-form-section'>
            <input type="file" className='artwork-input' id='artwork-file-input' name='file'  onChange={(e) => setCollectionObj({...collectionObj, 'file': e.target.files[0]})} />
          </div>
        </div>
        <div className='register-artwork-form-footer'>
          <Button className='register-artwork-button' onClick={handleSubmit}>Register Artwork</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterArtwork;
