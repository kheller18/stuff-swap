import React from 'react';

const Image = props => {
  // module for dynamic image creation
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
