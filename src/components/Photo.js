import React from 'react';

const Photo = (props) => (
  <li>
    <img src={props.img} alt={props.alt} />
  </li>
);

export default Photo;