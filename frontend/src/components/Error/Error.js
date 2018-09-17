import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Error = props => (
  <div className="Error">
    <h2>{props.error}</h2>
  </div>
);

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
