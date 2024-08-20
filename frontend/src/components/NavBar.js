import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link> {/* Add Link to Videos */}
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;




