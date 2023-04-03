import React, { useState } from 'react';
import Image from './Image';
import logo from '../logos/stuff_swap.png';
import '../styles/UpdateArtwork.css';
import { updatePinPinata } from '../utils/pinataAPI';
import Button from './Button';

const UpdateArtwork = props => {

    const [collectionObj, setCollectionObj] = useState({
      name: '',
      artistName: '',
      price: '',
      file: ''
    });

    const handleUpdate = () => {
      updatePinPinata(collectionObj);
    }

    return (
      <div className='update-artwork-container'>
        <div className='update-artwork-form'>
          <div className='update-artwork-form-header'>
            <h1 className='update-form-title'>Update Existing Artwork</h1>
          </div>
          <div className='update-artwork-form-body'>
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
            {/* <div className='artwork-form-section'>
              <input type="file" className='artwork-input' id='artwork-file-input' name='file' value={collectionObj['file']} onChange={(e) => setCollectionObj({...collectionObj, 'file': e.target.value})} />
            </div> */}
          </div>
          <div className='update-artwork-form-footer'>
            <Button className='update-artwork-button' onClick={handleUpdate}>Update Artwork</Button>
          </div>
        </div>
      </div>
    );
  };

export default UpdateArtwork;
