import React from "react";
import logo from '../logos/stuff_swap.png';

const Image = (props) => {

  return (
    <img
      alt={props.alt}
      src={props.src}
      className={props.className}
    />
  );
};

export default Image;
