import React from 'react';
import { Link } from 'react-router-dom';
import {Navfull , Navlimit } from './Navigation';
import Path from './Path';
import PropTypes from 'prop-types';
import Themehandler from './Themehandler';

function Headerfull({logout , name }) {
    return(
        <header className='header'>
            <h1 className='header h1'>
            <Link to={Path.Root}>Aplikasi Notes</Link>
            </h1>
            <Themehandler/>
            <Navfull logout={logout} name={name} />
        </header>
    )
}

function Headerlimit() {
    return(
        <header className='header'>
            <h1 className='header h1'>
            <Link to={Path.Root}>Aplikasi Notes</Link>
            </h1>
            <Navlimit/>
        </header>
    )
}

Headerfull.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };
export {Headerfull, Headerlimit};