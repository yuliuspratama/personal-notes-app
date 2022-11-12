import React from 'react';
import { Link } from 'react-router-dom';
 
function Navigation() {
  return (
    <nav className="navigation ul li">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/note/add">Add</Link></li>
        <li><Link to="/note/archive">Archive</Link></li>
        <li><Link to="/note/all">All Note</Link></li>
        <li><Link to="/note/search">search</Link></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;