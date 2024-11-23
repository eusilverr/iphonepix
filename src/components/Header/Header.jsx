import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';


import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <SearchBar />
        <CartButton />
        <Link to="/login" className="login-button">Login</Link>
      </div>

    </header>
  );
}

export default Header;
