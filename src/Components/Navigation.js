import React from 'react';
import { Link } from 'react-router-dom';
import Path from './Path';
import PropTypes from 'prop-types';

function Navfull({logout,name}) {
  return (
    <nav className="navigation ul li">
      <ul>
        <li><Link to={Path.Root}>Home</Link></li>
        <li><Link to={Path.Add}>Add</Link></li>
        <li><Link to={Path.Archive}>Archive</Link></li>
        <li><p>{name}</p></li>
        <li><button onClick={logout}>logout</button></li>
      </ul>
    </nav>
  ); 
}

function Navlimit(){
    return (
      <nav className="navigation ul li">
      <ul>
        <li><Link to={Path.Register}>Register</Link></li>
        <li><Link to={Path.Login}>Login</Link></li>
      </ul>
    </nav>
    )
}
 
Navfull.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export {Navfull , Navlimit };