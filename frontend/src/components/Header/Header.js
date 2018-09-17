import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="Header">
    <Link to="/">
      <h1>Phone Catalog App</h1>
    </Link>
  </header>
);

export default Header;
