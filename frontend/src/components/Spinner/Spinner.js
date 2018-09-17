import React from 'react';
import { RingLoader } from 'react-spinners';
import './Spinner.css';

const Spinner = () => (
  <div className="Spinner">
    <RingLoader color="lightblue" loading />
  </div>
);

export default Spinner;
