import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-background">pornrulz</div>
      <nav className="navbar">
        <a href="/">Best Of</a>
        <a href="/">Hits</a>
        <a href="/">Tags</a>
      </nav>
    </header>
  );
};

export default Header;
