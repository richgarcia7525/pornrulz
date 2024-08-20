import React from 'react';
import './Sidebar.css'; // Adjusted path if it's in the styles folder

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>A - Z</li>
        <li><a href="/">Category 1</a></li>
        <li><a href="/">Category 2</a></li>
        <li><a href="/">Category 3</a></li>
        <li className="click-to-continue"><a href="/">Click to Continue...</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;



