import React from 'react';
import { useNavigate  } from 'react-router-dom';
// import Image from './Image';
// import logo from '../logos/stuff_swap.png';
import '../styles/UserDropdown.css';

const UserDropdown = props => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    switch(e.target.id) {
      case 'my-collections':
        navigate('/user/collections');
        break;
      case 'register-artwork':
        navigate('/collection/register');
        break;
      case 'update-artwork':
        navigate('/collection/update');
        break;
      case 'settings':
        navigate('/user/settings');
        break;
      default: break;
    };
  };

  return (
    <div className='user-dropdown-container'>
      <ul className='user-dropdown-items'>
        <li className='user-dropdown-item' id='my-collections' onClick={e => {handleClick(e)}}>My collections</li>
        <li className='user-dropdown-item' id='register-artwork' onClick={e => {handleClick(e)}}>Register New Artwork</li>
        <li className='user-dropdown-item' id='update-artwork' onClick={e => {handleClick(e)}}>Update Existing Artwork</li>
        <li className='user-dropdown-item' id='settings' onClick={e => {handleClick(e)}}>Settings</li>
      </ul>
    </div>
  );
};

export default UserDropdown;
