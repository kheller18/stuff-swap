import React from 'react';
import { useNavigate  } from 'react-router-dom';
import '../styles/UserDropdown.css';

const UserDropdown = props => {
  const navigate = useNavigate();

  // handles click and switches to new routes
  const handleClick = (e) => {
    props.setShowUser(false);

    switch(e.target.id) {
      case 'my-artwork':
        navigate('/user/artwork/owned');
        break;
      case 'register-artwork':
        navigate('/user/artwork/register');
        break;
      case 'update-artwork':
        navigate('/user/artwork/update');
        break;
      case 'sell-artwork':
        navigate('/user/artwork/sell');
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
        <li className='user-dropdown-item' id='my-artwork' onClick={e => {handleClick(e)}}>My Art</li>
        <li className='user-dropdown-item' id='register-artwork' onClick={e => {handleClick(e)}}>Register New Art</li>
        <li className='user-dropdown-item' id='update-artwork' onClick={e => {handleClick(e)}}>Update Existing Art</li>
        <li className='user-dropdown-item' id='sell-artwork' onClick={e => {handleClick(e)}}>Sell Your Art</li>
        <li className='user-dropdown-item' id='settings' onClick={e => {handleClick(e)}}>Settings</li>
      </ul>
    </div>
  );
};

export default UserDropdown;
