import React from 'react';
import PropTypes from 'prop-types';
import './PhoneListItem.css';

const PhoneListItem = props => (
  <article className="PhoneListItem">
    <img src={props.image} alt={props.title} />
    <h2>{props.title}</h2>
    <p>{`Diagonal: ${props.diagonal}"`}</p>
    <p>{`Capacity: ${props.capacity}`}</p>
    <p><b>more specs...</b></p>
  </article>
);

PhoneListItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  diagonal: PropTypes.string,
  capacity: PropTypes.string,
};

export default PhoneListItem;
