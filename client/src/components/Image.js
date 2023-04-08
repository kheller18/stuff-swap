import React from 'react';

// module for dynamic image creation
const Image = props => {
  return (
    <img
      alt={props.alt}
      src={props.src}
      className={props.className}
      id={props.id}
      onClick={props.onClick}
    />
  );
};

export default Image;
